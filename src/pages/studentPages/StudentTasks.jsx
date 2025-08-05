import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BatchList() {
  const navigate = useNavigate();
  const [batches, setBatches] = useState([
    {
      id: 1,
      name: 'Web Development 2023',
      type: 'Java',
      startDate: '2023-01-15',
      endDate: '2023-12-15',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Data Science 2024',
      type: 'Python',
      startDate: '2024-02-01',
      endDate: '2024-11-30',
      status: 'Active',
    },
  ]);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">All Batches</h2>
        </div>
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full text-white">
              <thead>
                <tr className="bg-gray-700 text-gray-300 text-left">
                  <th className="p-2">S.no</th>
                  <th className="p-2">Batch Name</th>
                  <th className="p-2">Batch Type</th>
                  <th className="p-2">Start Date</th>
                  <th className="p-2">End Date</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Access</th>
                </tr>
              </thead>
              <tbody>
                {batches.length > 0 ? (
                  batches.map((batch, index) => (
                    <tr
                      key={batch.id}
                      className="border-b border-gray-700 hover:bg-gray-600 transition-colors duration-200"
                    >
                      <td className="p-2">{index + 1}</td>
                      <td className="p-2">{batch.name}</td>
                      <td className="p-2">{batch.type}</td>
                      <td className="p-2">{batch.startDate}</td>
                      <td className="p-2">{batch.endDate}</td>
                      <td className="p-2">{batch.status}</td>
                      <td className="p-2">
                        <button
                          onClick={() => navigate(`/batches/${batch.id}/member/1`)} // Hardcoding memberId=1
                          className="btn btn-primary bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-4"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center text-gray-400 p-2">
                      No batches available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BatchList;