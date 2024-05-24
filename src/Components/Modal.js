import React from 'react';
import { Link } from 'react-router-dom';

function Modal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Modal Title</h1>
        <p>Modal content goes here...</p>
        <Link to="/" className="text-blue-500 hover:underline">Close</Link>
      </div>
    </div>
  );
}

export default Modal;
