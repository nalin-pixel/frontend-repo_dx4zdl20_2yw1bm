export default function Footer() {
  return (
    <footer className="py-12 border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} YourName. All rights reserved.</p>
        <div className="flex items-center gap-4 text-gray-600">
          <a href="#" className="hover:text-gray-900">Twitter</a>
          <a href="#" className="hover:text-gray-900">LinkedIn</a>
          <a href="#" className="hover:text-gray-900">Dribbble</a>
        </div>
      </div>
    </footer>
  )
}
