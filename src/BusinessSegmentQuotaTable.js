import React from 'react';

const BusinessSegmentQuotaTable = () => {
  const tableData = [
    { brand: '1-Day Acuvue Moist (1DM)', baseline: 392591, quota: 381402, growthRate: -2.85 },
    { brand: '1-Day Acuvue Moist for Astigmatism (1MA)', baseline: 205350, quota: 225504, growthRate: 9.81 },
    { brand: '1-Day Acuvue Moist Multifocal (1MM)', baseline: 64776, quota: 68153, growthRate: 5.21 },
    { brand: 'Acuvue Oasys with Hydraluxe Astigmatism (TAS)', baseline: 336454, quota: 392526, growthRate: 16.67 },
    { brand: 'Acuvue Oasys with Hydraluxe (TSP)', baseline: 760208, quota: 829894, growthRate: 9.17 },
    { brand: 'Acuvue Vita Astigmatism (AAS)', baseline: 9971, quota: 12496, growthRate: 25.33 },
    { brand: 'Acuvue Vita (ATL)', baseline: 37511, quota: 42119, growthRate: 12.28 },
    { brand: 'Acuvue Oasys for Astigmatism (CYP)', baseline: 146000, quota: 157955, growthRate: 8.19 },
    { brand: 'Acuvue Oasys with Transitions (OWT)', baseline: 2973, quota: 3257, growthRate: 9.56 },
    { brand: 'Acuvue Oasys Multifocal (FAL)', baseline: 5371, quota: 10580, growthRate: 96.98 },
    { brand: 'Acuvue Oasys (PH)', baseline: 285546, quota: 293618, growthRate: 2.83 },
    { brand: '1-Day Acuvue Oasys Max (TRP)', baseline: 0, quota: 122300, growthRate: null },
    { brand: '1-Day Acuvue Max Multifocal (AUP)', baseline: 0, quota: 40641, growthRate: null },
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
  };

  const totalPortfolioBrands = tableData.reduce(
    (acc, row) => ({
      baseline: acc.baseline + row.baseline,
      quota: acc.quota + row.quota,
    }),
    { baseline: 0, quota: 0 }
  );

  const totalGrowthRate = ((totalPortfolioBrands.quota - totalPortfolioBrands.baseline) / totalPortfolioBrands.baseline) * 100;

  const handleDownloadPDF = () => {
    // Placeholder function for PDF download
    alert('PDF download functionality would be implemented here.');
    // In a real application, this function would generate and download a PDF
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-900">Q4 2022 Territory Level Business Segment Quota</h2>
        <button 
          onClick={handleDownloadPDF}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
          </svg>
          <span>Download PDF</span>
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">WWID:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">TERRITORY ACCOUNT MANAGER:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">TERRITORY:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Total Portfolio Brands</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Baseline Sales</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Q4 Quota</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Final Growth Rate</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.brand}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(row.baseline)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(row.quota)}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${row.growthRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {row.growthRate !== null ? `${row.growthRate.toFixed(2)}%` : '-'}
                </td>
              </tr>
            ))}
            <tr className="bg-green-100 font-bold">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Total Portfolio Brands</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(totalPortfolioBrands.baseline)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(totalPortfolioBrands.quota)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{totalGrowthRate.toFixed(2)}%</td>
            </tr>
            <tr className="bg-purple-100 font-bold">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Strategic Qualifier Brands - Max 1-Day</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$0</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$162,941</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessSegmentQuotaTable;