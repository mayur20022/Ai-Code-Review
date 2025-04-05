import { Code2, GithubIcon, Swords } from 'lucide-react'
import React from 'react'

export default function Header() {
  return (
      <header className="glass-effect border-b border-[#E891DF]/20 relative">
          <div className="container mx-auto px-6 py-6">
              <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                      <div className="relative">
                          <Swords className="w-10 h-10 text-[#E891DF]" />
                          <div className="absolute inset-0 bg-[#E891DF]/30 blur-xl"></div>
                      </div>
                      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#E891DF] via-[#8A2BE2] to-[#E891DF] text-transparent bg-clip-text">
                          Shadow Monarch's Code Review
                      </h1>
                  </div>
                  <div className="flex items-center gap-4">
                      <Code2 className="w-6 h-6 text-[#E891DF]" />
                      <GithubIcon className="w-6 h-6 text-[#E891DF] cursor-pointer hover:text-white transition-colors" />
                  </div>
              </div>
          </div>
      </header>
  )
}
