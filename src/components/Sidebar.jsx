import React, { useState } from 'react';

export default function Sidebar({
  categories,
  frequentData,           // we'll pass the current frequent list
  onCategoryChange,       // new callback
  onChangeDataset
}) {
  const [selectedCategory, setSelectedCategory] = useState(null); // null = show all

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat === selectedCategory ? null : cat);
    onCategoryChange(cat === selectedCategory ? null : cat);
  };

  return (
    <div className="w-64 bg-gray-800 text-white p-4 overflow-y-auto">
      <h3 className="text-lg font-bold mb-4">Categories</h3>

      <div className="mb-6">
        <button
          onClick={() => handleCategoryClick(null)}
          className={`w-full text-left py-2 px-3 rounded mb-1 text-sm ${
            selectedCategory === null
              ? 'bg-blue-600 text-white'
              : 'hover:bg-gray-700'
          }`}
        >
          All Datasets
        </button>

        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`w-full text-left py-2 px-3 rounded mb-1 text-sm ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-2 border-t border-gray-700 pt-4">
        <h4 className="text-sm font-semibold mb-2">Data Source</h4>
        <button
          onClick={() => onChangeDataset("IND")}
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-sm"
        >
          India Dataset
        </button>
        <button
          onClick={() => onChangeDataset("IMF")}
          className="w-full bg-green-600 hover:bg-green-700 py-2 rounded text-sm"
        >
          IMF Dataset
        </button>
      </div>
    </div>
  );
}