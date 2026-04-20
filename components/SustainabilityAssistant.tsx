'use client';


import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Zap, ShieldCheck, TrendingUp, Loader2, ThumbsUp, ThumbsDown } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
  feedback?: 'positive' | 'negative';
}

const SustainabilityAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { role: 'assistant', text: "Hello! I'm the AgAsset AI Assistant. How can I help you today with rural energy financing, PUE assets, or our impact methodology?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setMessage('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: `You are the AgAsset Co Sustainability Expert. Answer the user's question about rural energy, agricultural financing, or productive use of energy (PUE). Use a professional, premium, and helpful tone. Keep answers concise. Current question: ${userMessage}` }] }
        ],
        config: {
          systemInstruction: "You are an expert in the 'Productive Use of Energy' (PUE) sector in Africa. You help investors, mini-grid developers, and rural SMEs understand AgAsset Co's value proposition: bridging the gap between energy and economy through financing productive assets. Be authoritative yet accessible.",
          temperature: 0.7,
        },
      });

      const assistantText = response.text || "I'm sorry, I couldn't process that request at the moment. Please try again later.";
      setChatHistory(prev => [...prev, { role: 'assistant', text: assistantText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setChatHistory(prev => [...prev, { role: 'assistant', text: "There was an error connecting to my knowledge base. Please try again shortly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = (index: number, type: 'positive' | 'negative') => {
    setChatHistory(prev => prev.map((msg, i) => 
      i === index ? { ...msg, feedback: type } : msg
    ));
    // Simulation of storing feedback for future improvements
    console.debug(`Feedback recorded for message ${index}: ${type}`);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[1000] w-14 h-14 bg-ag-green-950 text-white rounded-full shadow-2xl flex items-center justify-center border border-ag-lime/30 group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} className="relative">
              <MessageSquare size={24} className="group-hover:text-ag-lime transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-ag-lime rounded-full border-2 border-ag-green-950 animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-[1000] w-[380px] h-[550px] bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-ag-green-950 p-6 text-white relative">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-lg bg-ag-lime flex items-center justify-center">
                  <Sparkles size={18} className="text-ag-green-950" />
                </div>
                <h3 className="font-bold text-lg tracking-tight">AgAsset AI</h3>
              </div>
              <p className="text-white/60 text-xs font-medium uppercase tracking-widest">Sustainability Advisor</p>
              
              {/* Decorative Pulse */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ag-lime animate-pulse" />
                <span className="text-[10px] font-bold text-white/40">ONLINE</span>
              </div>
            </div>

            {/* Chat Body */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-gray-50/30"
            >
              {chatHistory.map((chat, idx) => (
                <div key={idx} className={`flex flex-col ${chat.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div 
                    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm relative ${
                      chat.role === 'user' 
                        ? 'bg-ag-green-950 text-white rounded-tr-none' 
                        : 'bg-white text-ag-green-950 border border-gray-100 rounded-tl-none'
                    }`}
                  >
                    {chat.text}
                  </div>
                  
                  {/* Feedback UI for Assistant Messages */}
                  {chat.role === 'assistant' && (
                    <div className="flex items-center gap-2 mt-2 px-1">
                      <button
                        onClick={() => handleFeedback(idx, 'positive')}
                        className={`p-1 rounded-md transition-all ${
                          chat.feedback === 'positive' 
                            ? 'text-ag-lime' 
                            : 'text-gray-300 hover:text-ag-green-950 hover:bg-gray-100'
                        }`}
                      >
                        <ThumbsUp size={14} className={chat.feedback === 'positive' ? 'fill-ag-lime' : ''} />
                      </button>
                      <button
                        onClick={() => handleFeedback(idx, 'negative')}
                        className={`p-1 rounded-md transition-all ${
                          chat.feedback === 'negative' 
                            ? 'text-red-500' 
                            : 'text-gray-300 hover:text-red-500 hover:bg-gray-100'
                        }`}
                      >
                        <ThumbsDown size={14} className={chat.feedback === 'negative' ? 'fill-red-500' : ''} />
                      </button>
                      {chat.feedback && (
                        <motion.span 
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-[10px] text-gray-400 font-bold uppercase tracking-widest ml-1"
                        >
                          Thanks!
                        </motion.span>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none flex items-center gap-3">
                    <Loader2 size={16} className="text-ag-lime animate-spin" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest italic">Analyzing Impact...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Suggestions */}
            {!isLoading && chatHistory.length < 3 && (
              <div className="px-6 pb-2 flex flex-wrap gap-2">
                {[
                  { icon: Zap, text: "How does PUE financing work?" },
                  { icon: ShieldCheck, text: "Tell me about IoT security" },
                  { icon: TrendingUp, text: "What's the typical ROI?" }
                ].map((item, i) => (
                  <button 
                    key={i}
                    onClick={() => setMessage(item.text)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-[10px] font-bold text-gray-500 hover:border-ag-lime hover:text-ag-green-950 transition-all shadow-sm"
                  >
                    <item.icon size={12} className="text-ag-lime" />
                    {item.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="w-full bg-gray-50 border-none rounded-full px-6 py-3.5 pr-14 text-sm text-ag-green-950 focus:ring-2 focus:ring-ag-lime/20 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!message.trim() || isLoading}
                  className={`absolute right-1.5 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    message.trim() && !isLoading ? 'bg-ag-green-950 text-white shadow-lg' : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-widest mt-3">
                AgAsset Co AI • Enterprise Support
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SustainabilityAssistant;
