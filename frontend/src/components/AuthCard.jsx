export default function AuthCard({ title, children }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h1 className="text-center text-2xl mb-5">{title}</h1>
      {children}
    </div>
  );
}
