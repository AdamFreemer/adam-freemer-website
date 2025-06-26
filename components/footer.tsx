export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Adam Freemer. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">
              Home
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
              Projects
            </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </a>
              <a href="https://www.dropbox.com/scl/fi/6hy7m5jmorbc7g18z2ojh/AdamFreemerResumeJune2025.pdf?rlkey=ke76emgq80qjmv35x9ryh98fw&st=0e52wvms&dl=0" className="text-gray-400 hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
