import React, { useState } from 'react';
import { Swords, SendHorizontal } from 'lucide-react';
import Header from './component/Header';
import axios from "axios";

function App() {
  const [code, setCode] = useState('');
  const [isVerdict, setIsVerdict] = useState(false);
  const [verdict, setVerdict] = useState('');
  const [animateKey, setAnimateKey] = useState(0); // 🔥 Key to retrigger animation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAnimateKey(prev => prev + 1); // 🔄 Trigger animation re-render
    setIsVerdict(true)
    setVerdict(undefined)

    
    try {
      const response = await axios.post("http://localhost:3000/ai/ai-review", { code });
      setVerdict(response.data);
    } catch (error) {
      console.error("AI review failed:", error.message);
      setVerdict(false);
    }
    
  };

  return (
    <div className="bg-black">
      <div className="min-h-screen bg-[#0E051F]/40 text-white overflow-hidden relative">
        {/* Background */}
        <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>

        <Header />

        <div className="relative z-10">
          <main className="max-w-[1500px] mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-2 gap-12">

              {/* Input Section */}
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
                      className="w-full h-[400px] p-6 rounded-lg bg-[#49207A]/10 
                                 text-white placeholder-gray-400 transition-all duration-300
                                 glass-effect magic-border focus:outline-none no-scrollbar"
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
                    <SendHorizontal className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    Arise
                  </button>
                </form>
              </div>

              {/* Output Section with animation key */}
              {isVerdict && (
                <div
                  key={animateKey}
                  className="space-y-6  arise arise-text"
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold text-[#E891DF]">Shadow's Verdict</h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#E891DF]/50 to-transparent"></div>
                  </div>

                  <div className="relative h-[500px] brightness-75  magic-border rounded-lg">
                    <div className="no-scrollbar h-full overflow-x-hidden overflow-y-auto p-4 rounded-lg">
                      {verdict ? (
                        <pre className="text-sm whitespace-pre-wrap">
                          <code>{verdict}</code>
                        </pre>
                      ) : (
                        <div className="h-full flex items-center justify-center text-white">
                          <div className="text-center space-y-4">
                            <Swords className="w-16 h-16 mx-auto text-[#E891DF]/30 animate-pulse" />
                            <span className="block text-lg">The shadows await your code...</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>

          <footer className="glass-effect border-t border-[#49207A]/30 py-8 mt-12">
            <div className="container mx-auto px-6 text-center">
              <p className="text-[#E891DF] text-lg font-medium">
                "I alone level up" - Powered by Shadow Monarch's Intelligence
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
