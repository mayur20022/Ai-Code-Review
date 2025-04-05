import { SendHorizontal } from 'lucide-react';
import React from 'react'

export default function AiCodeSend() {
      const [code, setCode] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsVerdict(true);
        // Handle code submission here
    };
    
  return (
      <div className="space-y-6 arise" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold text-[#E891DF]">Summon Your Code</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#E891DF]/50 to-transparent"></div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                  <textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full h-[500px] p-6 rounded-lg bg-[#49207A]/10 
                              text-white placeholder-gray-400 transition-all duration-300
                              glass-effect magic-border focus:outline-none"
                      placeholder="Let the shadows analyze your code..."
                  />
              </div>
              <button
                  type="submit"
                  className="flex items-center gap-3 px-8 py-4 
                           bg-gradient-to-r from-[#49207A] via-[#8A2BE2] to-[#E891DF]
                           text-white font-bold rounded-lg transition-all duration-300
                           hover:scale-105 hover-aura group text-lg"
              >
                  <SendHorizontal className="w-6 h-6 group-hover:transform group-hover:translate-x-2 transition-transform" />
                  Arise
              </button>
          </form>
      </div>
  )
}
