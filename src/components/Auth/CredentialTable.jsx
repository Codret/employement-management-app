import React from 'react';

const CredentialTable = () => {
  const credentials = [
    { name: "Admin", email: "admin@me.com", password: "123" },
    { name: "Rahul", email: "1@me.com", password: "123" },
    { name: "Priya", email: "priya.verma@example.com", password: "123" },
    { name: "Amit", email: "amit.kumar@example.com", password: "123" },
    { name: "Neha", email: "neha.mehta@example.com", password: "123" },
    { name: "Ravi", email: "ravi.singh@example.com", password: "123" }
  ];

  return (
    <div className="p-6 mb-8">
      <h3 className='text-white'>This is for preview login Credentials are given below . you can login by using following data.</h3>
      <h1 className="text-2xl font-bold mb-4">Employee Credentials</h1>
      <table className="w-full table-auto border-collapse border border-gray-400 ">
        <thead>
          <tr className="bg-gray-200 text-black">
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Password</th>
          </tr>
        </thead>
        <tbody>
          {credentials.map((cred, index) => (
            <tr key={index} className="text-white bg-[#1c1c1c] mb-4">
              <td className="border border-gray-400 px-4 py-2">{cred.name}</td>
              <td className="border border-gray-400 px-4 py-2">{cred.email}</td>
              <td className="border border-gray-400 px-4 py-2">{cred.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CredentialTable;
