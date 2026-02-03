export async function generateProductDescription(data: {
  name: string;
  category: string;
  features: string;
  tone: string;
}) {
  const { name, category, features, tone } = data;

  const hash =
    name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0) % 3;

  if (hash === 0) {
    return `
${name} is a modern ${category} designed to meet everyday needs.
${features ? `It includes features such as ${features}.` : ""}
With a ${tone.toLowerCase()} tone, this product focuses on usability and reliability.
`;
  }

  if (hash === 1) {
    return `
Built for today’s users, ${name} stands out in the ${category} space.
${features ? `Core highlights include ${features}.` : ""}
The overall experience follows a ${tone.toLowerCase()} and user-friendly approach.
`;
  }

  return `
${name} brings a fresh approach to the ${category} category.
${features ? `Key capabilities include ${features}.` : ""}
Its ${tone.toLowerCase()} tone makes it suitable for both beginners and advanced users.
`;
}
