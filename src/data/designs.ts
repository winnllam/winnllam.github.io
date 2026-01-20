export interface DesignPiece {
  title: string;
  description?: string;
  image: string;
  category?: string; // e.g., "UI/UX", "Branding", "Graphic Design"
}

export const designPieces: DesignPiece[] = [
  {
    title: "Design 1",
    description: "Description of this design.",
    image: "",
    category: "UI/UX",
  },
  {
    title: "Design 2",
    description: "Description of this design.",
    image: "",
    category: "Branding",
  },
  {
    title: "Design 3",
    description: "Description of this design.",
    image: "",
    category: "Graphic Design",
  },
];
