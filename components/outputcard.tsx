// export default function OutputCard({ text }: { text: string }) {
//   if (!text) return null;

//   return (
//     <div className="mt-6 p-4 border rounded bg-gray-50">
//       <h2 className="font-semibold mb-2">Generated Description</h2>
//       <p className="text-sm whitespace-pre-line">{text}</p>
//     </div>
//   );
// }
















// "use client";

// export default function OutputCard({
//   text,
//   onClose,
// }: {
//   text: string;
//   onClose: () => void;
// }) {
//   if (!text) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg">
//         <h2 className="text-lg font-semibold mb-3">
//           Generated Description
//         </h2>

//         <p className="text-gray-700 whitespace-pre-line mb-4">
//           {text}
//         </p>

//         <button
//           onClick={onClose}
//           className="btn-primary"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }























// "use client";

// export default function OutputCard({
//   text,
//   onClose,
// }: {
//   text: string;
//   onClose: () => void;
// }) {
//   if (!text) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg">
//         <h2 className="text-lg font-semibold mb-3">
//           Generated Description
//         </h2>

//         <p className="text-gray-700 whitespace-pre-line mb-6">
//           {text}
//         </p>

//         <button
//           onClick={onClose}
//           className="w-full rounded-lg bg-gray-800 text-white py-2 hover:bg-gray-900 transition"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }












"use client";

export default function OutputCard({
  text,
  onClose,
}: {
  text: string;
  onClose: () => void;
}) {
  if (!text) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Generated Description
        </h2>

        <p className="text-gray-700 whitespace-pre-line mb-6 leading-relaxed">
          {text}
        </p>

        <button
          onClick={onClose}
          className="w-full mt-4 py-3 rounded-lg text-white font-semibold
                     bg-gray-900 hover:bg-gray-800 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
