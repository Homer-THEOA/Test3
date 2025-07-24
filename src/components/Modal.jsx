import React from "react";

const Modal = ({ data, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
      <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>✕</button>
      <img src={data.image} alt={data.title} className="w-full h-48 object-cover rounded mb-4" />
      <h2 className="text-xl font-bold mb-2">{data.title}</h2>
      <p>{data.longDesc}</p>
    </div>
  </div>
);

export default Modal;