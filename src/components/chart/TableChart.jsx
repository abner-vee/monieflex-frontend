import React, { useState } from 'react';

const TableChart = ({ data }) => {
  const [selectedFilter, setSelectedFilter] = useState('all'); // State to track selected filter

  // Filter data based on selected filter
  const filteredData = data.filter(item =>
    selectedFilter === 'all' || item.type === selectedFilter
  );

  // Handler for filter change
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className='relative'>
      <div className='flex justify-between mb-4'>
        <div className='flex gap-4'>
          <p
            onClick={() => handleFilterChange('all')}
            className={`cursor-pointer ${selectedFilter === 'all' ? 'font-bold text-blue-500' : 'text-gray-500'}`}
          >
            All Transactions
          </p>
          <p
            onClick={() => handleFilterChange('credit')}
            className={`cursor-pointer ${selectedFilter === 'credit' ? 'font-bold text-blue-500' : 'text-gray-500'}`}
          >
            Credits
          </p>
          <p
            onClick={() => handleFilterChange('debit')}
            className={`cursor-pointer ${selectedFilter === 'debit' ? 'font-bold text-blue-500' : 'text-gray-500'}`}
          >
            Debits
          </p>
        </div>
        <div>
          <p className='font-semibold'>Account Statement</p>
        </div>
      </div>
      <table className='min-w-full font-Urbanist bg-white border border-gray-200 table-fixed'>
        <thead className='font-semibold text-base text-[#2E2E2E] bg-gray-100 border-b'>
          <tr>
            <th className='px-4 py-2 border-r'>Name</th>
            <th className='px-4 py-2 border-r'>Description</th>
            <th className='px-4 py-2 border-r'>Amount</th>
            <th className='px-4 py-2 border-r'>Date</th>
            <th className='px-4 py-2'>Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((d) => (
            <tr
              key={d.id}
              className={d.id % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              <td className='px-4 py-2 border-r'>{d.name}</td>
              <td className='px-4 py-2 border-r'>{d.description}</td>
              <td className='px-4 py-2 border-r'>{d.amount}</td>
              <td className='px-4 py-2 border-r'>{d.date}</td>
              <td className='px-4 py-2'>{d.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableChart;
