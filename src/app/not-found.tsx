export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a14] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-[family-name:var(--font-bebas)] text-[#B49938] text-8xl mb-4">404</p>
        <h1 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wider text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8">The page you are looking for does not exist.</p>
        <a href="/" className="inline-block px-8 py-4 bg-[#B49938] hover:bg-[#c9a84c] text-black font-semibold rounded transition-colors">
          Back to Home
        </a>
      </div>
    </div>
  );
}
