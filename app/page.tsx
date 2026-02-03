








// "use client";

// import { useState } from "react";
// import ProductForm from "@/components/productform";
// import OutputCard from "@/components/outputcard";

// export default function Home() {
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const generate = async (data: any) => {
//     setLoading(true);
//     setResult("");

//     const res = await fetch("/api/generate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const json = await res.json();
//     setResult(json.result);
//     setLoading(false);
//   };

//   return (
//     <main className="max-w-xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">
//         AI Product Description Generator
//       </h1>

//       <ProductForm onGenerate={generate} />

//       {loading && <p className="mt-4">Generating...</p>}

//       <OutputCard text={result} />






//     </main>
//   );
// }
















// "use client";

// import { useState } from "react";
// import ProductForm from "@/components/productform";
// import OutputCard from "@/components/outputcard";

// export default function Home() {
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const generate = async (data: any) => {
//     setLoading(true);
//     setResult("");

//     const res = await fetch("/api/generate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const json = await res.json();
//     setResult(json.result);
//     setLoading(false);
//   };

//   return (
//     <main className="max-w-xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">
//         AI Product Description Generator
//       </h1>

//       <ProductForm onGenerate={generate} />

//       {loading && <p className="mt-4">Generating...</p>}

//       <OutputCard
//         text={result}
//         onClose={() => setResult("")}
//       />
//     </main>
//   );
// }
















// "use client";

// import { useState } from "react";
// import ProductForm from "@/components/productform";
// import OutputCard from "@/components/outputcard";

// export default function Home() {
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const generate = async (data: any) => {
//     setLoading(true);
//     setResult("");

//     const res = await fetch("/api/generate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const json = await res.json();
//     setResult(json.result);
//     setLoading(false);
//   };

//   return (
    // <main className="max-w-xl mx-auto p-6">
    //   <h1 className="text-2xl font-bold mb-6">
    //     AI Product Description Generator
    //   </h1>

    //   <ProductForm onGenerate={generate} />

    //   {loading && <p className="mt-4">Generating...</p>}

    //   <OutputCard
    //     text={result}
    //     onClose={() => setResult("")}
    //   />
    // </main>




//     <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-6">
//   <div className="w-full max-w-xl">
//     <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
//       AI Product Description Generator
//     </h1>

//     <ProductForm onGenerate={generate} />

//     {loading && (
//       <p className="mt-4 text-center text-gray-600">
//         Generating...
//       </p>
//     )}

//     <OutputCard
//       text={result}
//       onClose={() => setResult("")}
//     />
//   </div>
// </main>

//   );
// }





















"use client";

import { useState } from "react";
import ProductForm from "@/components/productform";
import OutputCard from "@/components/outputcard";

export default function Home() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async (data: any) => {
    setLoading(true);
    setResult("");

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    setResult(json.result);
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 p-6">

      {/* Card */}
      <div className="w-full max-w-xl bg-white/90 backdrop-blur-md 
        rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          AI Product Description Generator
        </h1>

        <ProductForm onGenerate={generate} />

        {loading && (
          <p className="mt-4 text-center text-gray-600">
            Generating...
          </p>
        )}

        <OutputCard
          text={result}
          onClose={() => setResult("")}
        />
      </div>

    </main>
  );
}
