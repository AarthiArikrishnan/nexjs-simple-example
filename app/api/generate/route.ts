// import { NextResponse } from "next/server";
// import { generateProductDescription } from "@/lib/ai";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const result = await generateProductDescription(body);

//     return NextResponse.json({ result });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to generate description" },
//       { status: 500 }
//     );
//   }
// }









import { NextResponse } from "next/server";
import { generateProductDescription } from "../../../lib/ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await generateProductDescription(body);
    return NextResponse.json({ result });
  } catch {
    return NextResponse.json(
      { error: "Failed to generate description" },
      { status: 500 }
    );
  }
}
