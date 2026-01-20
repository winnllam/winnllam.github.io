interface BrowserWindowProps {
  children: React.ReactNode
  className?: string
  tab?: string
  fillHeight?: boolean
}

export default function BrowserWindow({
  children,
  className = "",
  tab,
  fillHeight = false
}: BrowserWindowProps) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg border border-purple-100 bg-white ${fillHeight ? 'h-full flex flex-col' : ''} ${className}`}>
      {/* Browser Top Bar */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-b border-purple-100 px-3 py-2 flex items-center gap-3">
        {/* Traffic Light Buttons */}
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-pink-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-purple-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
        </div>

        {/* Optional Tab */}
        {tab && (
          <div className="flex items-center flex-1">
            <div className="bg-white px-4 py-1.5 rounded-md text-sm font-medium text-purple-600 shadow-sm border border-purple-100/50">
              {tab}
            </div>
          </div>
        )}
      </div>

      {/* Browser Content */}
      <div className={`bg-white ${fillHeight ? 'flex-1 flex flex-col' : ''}`}>
        {children}
      </div>
    </div>
  )
}
