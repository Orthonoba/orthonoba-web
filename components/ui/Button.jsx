export default function Button({ children }) {
  return (
    <button className="bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600 transition">
      {children}
    </button>
  );
}