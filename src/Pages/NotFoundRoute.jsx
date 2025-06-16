import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen flex items-center justify-center bg-gray-100 px-6"
    >
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-blue-600">404</h1>
        <p className="text-2xl mt-4 font-semibold text-gray-800">Page Not Found</p>
        <p className="text-gray-600 mt-2">Sorry, the page you're looking for doesn't exist.</p>
        
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
