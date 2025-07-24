import React, { useState } from "react";
import { timelineData } from "../data/timelineData";
import YearSelector from "./YearSelector";
import TimelineTile from "./TimelineTile";
import Modal from "./Modal";

const Timeline = () => {
  const years = Object.keys(timelineData);
  const [selectedYear, setSelectedYear] = useState("2011");
  const [selectedTile, setSelectedTile] = useState(null);

  const handleTileClick = (tile) => setSelectedTile(tile);
  const closeModal = () => setSelectedTile(null);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <YearSelector years={years} selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {timelineData[selectedYear]?.map((initiative, index) => (
          <TimelineTile key={index} data={initiative} onClick={() => handleTileClick(initiative)} />
        ))}
      </div>
      {selectedTile && <Modal data={selectedTile} onClose={closeModal} />}
    </div>
  );
};

export default Timeline;