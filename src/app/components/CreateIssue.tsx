import React, { useState } from 'react';

const CreateIssueForm: React.FC = () => {
  const [issueType, setIssueType] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Reset error and success messages
    setError(null);
    setSuccess(null);

    // Check if all fields are filled
    if (!issueType || !title || !description) {
      setError('All fields are required.');
      return;
    }

    const issueData = {
      issueType,
      title,
      description,
    };

    try {
      const response = await fetch('http://localhost:5000/issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(issueData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess('Issue created successfully!');
        console.log('Issue created successfully:', data);

        // Clear the form
        setIssueType('');
        setTitle('');
        setDescription('');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to create issue. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting issue:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-12 mt-10 border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Create a New Issue</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Issue Type Select */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 mb-1">
              Issue Type
            </label>
            <select
              id="issueType"
              name="issueType"
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              required
            >
              <option value="">Select Issue Type</option>
              <option value="improvement">Improvement</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature Request</option>
            </select>
          </div>
          
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the issue title"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              required
            />
          </div>
        </div>
        
        {/* Description Textarea */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue in detail..."
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition h-40 resize-none"
            required
          />
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-4 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
        >
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default CreateIssueForm;
