import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Jobdetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    description,
    company,
    company_logo,
    requirements,
  } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-white shadow-lg rounded-2xl border border-gray-200">
      <div className="flex items-center gap-6 mb-6">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-20 h-20 object-contain rounded-md border"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-500">{company}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-6">
        <div>
          <span className="font-semibold text-gray-700">Location:</span> {location}
        </div>
        <div>
          <span className="font-semibold text-gray-700">Type:</span> {jobType}
        </div>
        <div>
          <span className="font-semibold text-gray-700">Category:</span> {category}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h3>
        <p className="text-gray-700">{description}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {requirements?.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-right">
        <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Jobdetails;
