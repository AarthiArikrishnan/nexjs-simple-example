// "use client";

// import { useState } from "react";

// export default function ProductForm({
//   onGenerate,
// }: {
//   onGenerate: (data: any) => void;
// }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     features: "",
//     tone: "Professional",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="space-y-4">
//       <input
//         name="name"
//         placeholder="Product Name"
//         className="input"
//         onChange={handleChange}
//       />
//       <input
//         name="category"
//         placeholder="Category"
//         className="input"
//         onChange={handleChange}
//       />
//       <input
//         name="features"
//         placeholder="Key Features"
//         className="input"
//         onChange={handleChange}
//       />

//       <select name="tone" className="input" onChange={handleChange}>
//         <option>Professional</option>
//         <option>Casual</option>
//         <option>Marketing</option>
//       </select>

//       <button
//         onClick={() => onGenerate(formData)}
//         className="w-full bg-black text-white py-2 rounded"
//       >
//         Generate Description
//       </button>
//     </div>
//   );
// }














"use client";

import { useState } from "react";

export default function ProductForm({
  onGenerate,
}: {
  onGenerate: (data: any) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    features: "",
    tone: "Professional",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.category) {
      alert("Please fill required fields");
      return;
    }
    onGenerate(formData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        Enter Product Details
      </h2>

      <input
        name="name"
        placeholder="Product Name (e.g. Smart Watch)"
        className="input"
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category (e.g. Electronics, Fitness)"
        className="input"
        onChange={handleChange}
      />

      <input
        name="features"
        placeholder="Key Features (e.g. GPS, Heart Rate)"
        className="input"
        onChange={handleChange}
      />

      <select
        name="tone"
        className="input"
        onChange={handleChange}
      >
        <option>Professional</option>
        <option>Casual</option>
        <option>Marketing</option>
      </select>

      <button
        onClick={handleSubmit}
        className="w-full py-3 rounded-lg text-white font-semibold
                   bg-gradient-to-r from-indigo-600 to-purple-600
                   hover:from-indigo-700 hover:to-purple-700
                   transition"
      >
        ✨ Generate Description
      </button>
    </div>
  );
}

