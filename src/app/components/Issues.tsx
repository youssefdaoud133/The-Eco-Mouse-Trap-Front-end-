import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface Issue {
  _id: string;
  issueType: string;
  title: string;
  description: string;
}

const IssuesComponent: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  // Fetch issues from the backend
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('http://localhost:5000/issues'); // Replace with your actual endpoint
        const data = await response.json();
        setIssues(data);
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">All Issues</h2>
      <div className="space-y-6">
        {issues.map((issue) => (
          <div key={issue._id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">{issue.title}</h3>
            <p className="text-sm text-gray-600 mb-4">Type: {issue.issueType}</p>
            <button
              onClick={() => setSelectedIssue(issue)}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal for showing issue details */}
      {selectedIssue && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedIssue.title}</h2>
            <p className="text-sm text-gray-600 mb-2">Type: {selectedIssue.issueType}</p>
            <p className="text-gray-700">{selectedIssue.description}</p>
            <button
              onClick={() => setSelectedIssue(null)}
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
