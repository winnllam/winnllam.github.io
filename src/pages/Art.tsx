import { Link } from "react-router-dom";
import BrowserWindow from "../components/BrowserWindow";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { artPieces } from "../data/art";

export default function Art() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="text-purple-600 hover:text-purple-800 transition-colors inline-flex items-center gap-2"
          >
            <HiOutlineChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          All Artwork
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artPieces.map((piece, index) => (
            <BrowserWindow key={index}>
              <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center overflow-hidden">
                {piece.image ? (
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-purple-400">Preview</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {piece.title}
                </h3>
                {piece.medium && (
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">
                    {piece.medium}
                  </span>
                )}
                {piece.description && (
                  <p className="text-gray-600 text-sm mt-2">{piece.description}</p>
                )}
              </div>
            </BrowserWindow>
          ))}
        </div>
      </div>
    </section>
  );
}
