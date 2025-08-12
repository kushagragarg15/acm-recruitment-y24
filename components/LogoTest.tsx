export function LogoTest() {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">Logo Display Test</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Header Style (Large)</h3>
          <div className="flex items-center space-x-3 p-4 border rounded-lg">
            <div className="flex items-center space-x-2">
              <img
                src="/images/acm-logo.png"
                alt="ACM Logo"
                className="h-12 w-12 object-contain"
              />
              <img
                src="https://lnmiit.ac.in/wp-content/uploads/2023/07/LNMIIT-Logo-Transperant-Background.png"
                alt="LNMIIT Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#023047]">ACM LNMIIT</span>
              <span className="font-medium text-sm text-[#023047]/70">Y24 Recruitment</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Footer Style (Medium)</h3>
          <div className="flex items-center space-x-3 p-4 border rounded-lg bg-gray-900 text-white">
            <div className="flex items-center space-x-2">
              <img
                src="/images/acm-logo.png"
                alt="ACM Logo"
                className="h-8 w-8 object-contain"
              />
              <img
                src="https://lnmiit.ac.in/wp-content/uploads/2023/07/LNMIIT-Logo-Transperant-Background.png"
                alt="LNMIIT Logo"
                className="h-9 w-auto object-contain"
              />
            </div>
            <span className="font-semibold text-sm">ACM Student Chapter LNMIIT</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Mobile Style (Small)</h3>
          <div className="flex items-center space-x-2 p-4 border rounded-lg">
            <div className="flex items-center space-x-1">
              <img
                src="/images/acm-logo.png"
                alt="ACM Logo"
                className="h-7 w-7 object-contain"
              />
              <img
                src="https://lnmiit.ac.in/wp-content/uploads/2023/07/LNMIIT-Logo-Transperant-Background.png"
                alt="LNMIIT Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xs text-[#023047]">ACM LNMIIT</span>
              <span className="font-medium text-[10px] text-[#023047]/70">Y24 Recruitment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}