import React, { useState } from "react";

export default function Table({ data }) {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const totalPages = Math.ceil(data.length / perPage);
  const startIndex = (page - 1) * perPage;
  const paginatedData = data.slice(startIndex, startIndex + perPage);

  // Calculate which page numbers to show (centered around current page)
  const getPageNumbers = () => {
    const pages = [];

    // Always try to show 3 pages when possible
    let startPage = Math.max(1, page - 1);
    let endPage = Math.min(totalPages, page + 1);

    // Adjust if we're near the start
    if (startPage === 1) {
      endPage = Math.min(3, totalPages);
    }

    // Adjust if we're near the end
    if (endPage === totalPages) {
      startPage = Math.max(1, totalPages - 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const goToPage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="flex-1 p-6 overflow-auto">
      <h3 className="text-xl font-bold mb-4">Datasets</h3>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Source</th>
            <th className="border p-2">Frequency</th>
            <th className="border p-2">Unit</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border p-2">{item.title}</td>
              <td className="border p-2">{item.src}</td>
              <td className="border p-2">{item.freq}</td>
              <td className="border p-2">{item.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
          {/* Previous */}
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className={`px-4 py-2 border rounded-md text-sm font-medium
              ${page === 1 
                ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                : "bg-white hover:bg-gray-50 border-gray-300"}`}
          >
            Previous
          </button>

          {/* Page numbers (only 3 shown) */}
          {pageNumbers.map((num) => (
            <button
              key={num}
              onClick={() => goToPage(num)}
              className={`px-4 py-2 border rounded-md text-sm font-medium min-w-[40px]
                ${page === num 
                  ? "bg-blue-600 text-white border-blue-600" 
                  : "bg-white hover:bg-gray-50 border-gray-300"}`}
            >
              {num}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            className={`px-4 py-2 border rounded-md text-sm font-medium
              ${page === totalPages 
                ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                : "bg-white hover:bg-gray-50 border-gray-300"}`}
          >
            Next
          </button>
        </div>
      )}

      {/* Optional: show current page info */}
      <div className="mt-3 text-center text-sm text-gray-600">
        Page {page} of {totalPages}
      </div>
    </div>
  );
}