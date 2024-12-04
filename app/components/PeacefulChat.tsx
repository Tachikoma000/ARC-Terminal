import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Smile } from 'lucide-react';

const PeacefulChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "hi, arc here, what's on your mind?", sender: "host", timestamp: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
        timestamp: new Date()
      }]);
      setNewMessage("");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden"
      >
        {/* Chat header */}
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-serif text-gray-700">arc chat</h3>
        </div>

        {/* Messages area */}
        <div className="h-96 overflow-y-auto px-6 py-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-2xl px-4 py-2 max-w-xs ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-br from-blue-50 to-cyan-50 text-gray-700'
                      : 'bg-gradient-to-br from-gray-50 to-white text-gray-600'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Message input */}
        <form onSubmit={handleSubmit} className="px-6 py-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Smile size={20} />
            </motion.button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="i'm feeling a bit overwhelmed..."
              className="flex-1 bg-gray-50/50 rounded-full px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-shadow"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-600 hover:text-gray-700 transition-colors"
              disabled={!newMessage.trim()}
            >
              <Send size={20} />
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PeacefulChat;