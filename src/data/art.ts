export interface ArtPiece {
  title: string;
  description?: string;
  image: string;
  medium?: string; // e.g., "Digital", "Watercolor", "Pencil"
}

export const artPieces: ArtPiece[] = [
  {
    title: "Art Piece 1",
    description: "Description of this artwork.",
    image: "",
    medium: "Digital",
  },
  {
    title: "Art Piece 2",
    description: "Description of this artwork.",
    image: "",
    medium: "Watercolor",
  },
  {
    title: "Art Piece 3",
    description: "Description of this artwork.",
    image: "",
    medium: "Pencil",
  },
];
