import React from "react";
import { motion } from "framer-motion";

const TimelineTile = ({ data, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
    onClick={onClick}
  >
    <img src={data.image} alt={data.title} className="w-full h-40 object-cover rounded-md mb-2" />
    <h3 className="text-lg font-bold">{data.title}</h3>
    <p className="text-sm text-gray-600">{data.shortDesc}</p>
    <span className="text-blue-500 mt-2 inline-block">Read more</span>
  </motion.div>
);

export default TimelineTile;