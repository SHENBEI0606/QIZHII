import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, ChatRole } from '../types';
import { SYSTEM_INSTRUCTION } from '../constants';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "你好！我是启智双创小助手。关于项目孵化、比赛流程或导师选择，有什么可以帮你的吗？" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setInputValue("");
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userMsg }]);
    setIsLoading(true);

    try {
      // Initialize Gemini Client
      // Note: In a real production app, API calls should be proxied through a backend
      // to protect the API key. We safely check for process.env availability to prevent
      // browser runtime crashes.
      const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) || '';
      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          ...messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      const responseText = response.text || "抱歉，我现在无法回答，请稍后再试。";

      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: responseText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: "网络连接似乎出了点问题，请检查您的API Key或稍后再试。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open AI Chat"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-[350px] md:max-w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-semibold">启智 AI 助手</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex w-full ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex gap-2 max-w-[85%] ${
                    msg.role === ChatRole.USER ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === ChatRole.USER ? 'bg-indigo-100 text-indigo-600' : 'bg-primary-100 text-primary-600'
                  }`}>
                    {msg.role === ChatRole.USER ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div
                    className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.role === ChatRole.USER
                        ? 'bg-primary-600 text-white rounded-tr-none'
                        : 'bg-white text-slate-700 border border-gray-100 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start w-full">
                <div className="flex gap-2 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center">
                    <Loader2 size={16} className="animate-spin text-primary-500" />
                    <span className="ml-2 text-xs text-gray-500">思考中...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-primary-100 transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="询问关于项目孵化的问题..."
                className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder-slate-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className={`p-2 rounded-full transition-colors ${
                  !inputValue.trim() || isLoading 
                    ? 'text-slate-400 cursor-not-allowed' 
                    : 'text-primary-600 hover:bg-white shadow-sm'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;