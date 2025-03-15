import React from "react";

export default function dashBoardLayout({ children }) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 h-screen bg-gray-800 text-white p-6">
        <div className="text-center text-2xl font-semibold mb-8">
          MyDashboard
        </div>
        <ul>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Dashboard</a>
          </li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Profile</a>
          </li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Services</a>
          </li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Messages</a>
          </li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Settings</a>
          </li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
      <div className="col-end-10">{children}</div>
    </div>
  );
}
