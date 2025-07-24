import React from "react";

const YearSelector = ({ years, selectedYear, setSelectedYear }) => (
  <div className="flex flex-wrap justify-center gap-2">
    {years.map((year) => (
      <button
        key={year}
        onClick={() => setSelectedYear(year)}
        className={\`px-4 py-2 rounded-full border \${selectedYear === year ? "bg-blue-600 text-white" : "bg-white text-gray-700"}\`}
      >
        {year}
      </button>
    ))}
  </div>
);

export default YearSelector;