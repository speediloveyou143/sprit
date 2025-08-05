import { useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';

function StudentAttendance() {
  const { batchId, memberId } = useParams();
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: 1, date: '2025-07-01', status: 'Present' },
    { id: 2, date: '2025-07-02', status: 'Absent' },
    { id: 3, date: '2025-07-03', status: 'Holiday' },
  ]);

  // Dummy data for member (replace with backend fetch)
  const members = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  const member = members.find((m) => m.id === parseInt(memberId)) || { name: 'Unknown' };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Attendance for {member.name}</h2>
          <button
            onClick={() => window.history.back()}
            className="btn btn-ghost text-gray-400 hover:text-gray-200 flex items-center space-x-2"
          >
            <FiArrowLeft />
            <span>Back</span>
          </button>
        </div>
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full text-white">
              <thead>
                <tr className="bg-gray-700 text-gray-300 text-left">
                  <th className="p-2">S.no</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.length > 0 ? (
                  attendanceRecords.map((record, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-700 hover:bg-gray-600 transition-colors duration-200"
                    >
                      <td className="p-2">{index + 1}</td>
                      <td className="p-2">{record.date}</td>
                      <td className="p-2">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            record.status === 'Present'
                              ? 'bg-green-600 text-white'
                              : record.status === 'Absent'
                              ? 'bg-red-600 text-white'
                              : 'bg-yellow-600 text-white'
                          }`}
                        >
                          {record.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-2 text-center text-gray-400">
                      No attendance records available.
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

export default StudentAttendance;