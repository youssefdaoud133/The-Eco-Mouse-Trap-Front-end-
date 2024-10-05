import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

interface Issue {
  _id: string;
  issueType: string;
  title: string;
  description: string;
}

const IssuesComponent: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [solution, setSolution] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Fetch issues from the backend using Axios
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('http://localhost:5000/issue');
        if (Array.isArray(response.data)) {
          setIssues(response.data);
        } else if (response.data && Array.isArray(response.data.data)) {
          setIssues(response.data.data);
        } else {
          console.error('Unexpected data structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, []);

  // Function to log issue data to the console and fetch the solution
  const logIssueData = async (issue: Issue) => {
    setSelectedIssue(issue); // Set the current issue being processed
    setIsModalOpen(true); // Open the modal
    
    const message = "Provide solutions to this problem and companies charity to help in this problem.";
    
    try {
      const response = await axios.post('http://localhost:5000/api/solve', {
        message: `${message} + ${issue.title} -> ${issue.description}`,
      });

      // Check if response contains the data you expect
      if (response.data && typeof response.data === 'string') {
        setSolution(response.data); // Set solution to be shown in modal
      } else if (response.data && typeof response.data.data === 'string') {
        setSolution(response.data.data); // Access the 'data' key if necessary
      } else {
        setSolution('No solution available.'); // Handle unexpected response structure
      }
    } catch (error) {
      console.error('Error sending request to solve issue:', error);
      setSolution('Unable to find a solution at this time.'); // Error message
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-left">All Issues</h2>
      
      {/* Display each issue as a post */}
      <div className="space-y-8">
        {issues.length === 0 ? (
          <p className="text-left text-gray-600">No issues found.</p>
        ) : (
          issues.map((issue) => (
            <div
              key={issue._id}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-left">{issue.title}</h3>
              <p className="text-sm text-gray-500 mb-4 text-left">
                <strong>Type:</strong> <span className="font-semibold text-gray-700">{issue.issueType}</span>
              </p>
              <div className="border-t pt-4 text-gray-700 text-left">
                <p className="text-lg leading-relaxed">
                  <strong>Description:</strong> {issue.description}
                </p>
              </div>
              {/* Button to open modal and find solution */}
              <button
                onClick={() => logIssueData(issue)}
                className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Find Solution
              </button>
            </div>
          ))
        )}
      </div>

      {/* Modal for showing solution */}
      {isModalOpen && selectedIssue && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative max-h-[80vh] overflow-y-auto"> {/* Add max height and overflow styles */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedIssue.title}</h2>
            <p className="text-sm text-gray-600 mb-2"><strong>Type:</strong> {selectedIssue.issueType}</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Suggested Solution</h3>
            <div className="prose prose-sm text-gray-700">
              {solution ? (
                <ReactMarkdown>{solution}</ReactMarkdown>
              ) : (
                <p>Loading solution...</p>
              )}
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-4 focus:ring-red-300 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssuesComponent;
