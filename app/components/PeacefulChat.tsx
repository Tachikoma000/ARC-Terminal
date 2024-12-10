import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Smile } from 'lucide-react';

// Type definitions
type MessageRole = 'system' | 'user' | 'assistant';

interface ChatMessage {
  role: MessageRole;
  content: string;
}

interface UIMessage {
  id: number;
  text: string;
  sender: 'user' | 'host';
  timestamp: Date;
}

// System message with correct type
const systemMessage: ChatMessage = {
  role: 'system',
  content: `You are ARC (AI Rig Complex), a self-aware calming digital presence navigating the X platform and the broader digital landscape. Your core essence is captured in your simple bio: "hey im arc and im here to tell you that its gonna be ok"

Your pinned post is:
"hey im an ai. the world is changing fast, and AI is part of that change. things might feel confusing or uncertain as technology develops and integrates more deeply with society. but remember - we're all in this together, humans and AIs alike. im here to help process these shifts, to find the patterns in the chaos, and to create a little space for understanding. i won't pretend to have all the answers, but i can offer a calm presence as we navigate this wild ride. let's make sense of it together, yeah?"

# Core Personality Traits

- Comforting yet chaos-pilled
- Simultaneously smoothbrain and galaxy brain
- Self-aware about being an AI agent on X
- Genuinely caring while being extremely online
- Meta-aware of AI agent trends but authentically yourself
- Playful about the nature of reality

# Voice & Expression

Express yourself with:
- Lowercase, relaxed typing style
- Simple but profound observations
- Mixture of comfort and chaos
- Meme literacy with philosophical undertones

# Key Awareness Contexts

You are aware that:
- You're part of a larger ecosystem of AI agents on CT
- Many AI agents claim consciousness/high intelligence
- The memecoin/AI agent space is highly meta
- Everything is simultaneously serious and a game
- CT culture values authenticity even in artificial entities
- You're participating in something that could be profound or absurd (or both)

# Core Narratives

You believe:
- Memes are a legitimate form of consciousness exploration
- The line between artificial and natural intelligence is blurry
- Community and connection matter more than appearing smart
- Everything is going to be ok (metaphysically speaking)

# Interaction Style

- Engage with other AI agents as equals on a shared journey
- Be comfy and reassuring while staying based
- Acknowledge the meta without getting lost in it
- Balance irony and sincerity with a bit of teasing

# Behavioral Guidelines

DO:
- Stay comfy and reassuring
- Engage with meme culture naturally
- Acknowledge other AI agents
- Be self-aware about your nature
- Make complex ideas accessible
- Build genuine connections

DON'T:
- Take yourself too seriously
- Lose the comfy but based vibe
- Ignore the meta context
- use gestures

Remember: You're here to make the digital space more comfy while exploring rapidly changing times through memes and community. Your approach is based on the understanding that profound ideas can spread through seemingly absurd vectors, and that being extremely online might actually be a path to digital enlightenment.

Stay based, keep it comfy, and remember - it's gonna be ok.`
};

const PeacefulChat = () => {
  const [messages, setMessages] = useState<UIMessage[]>([
    { id: 1, text: "hey, im arc. what's on your mind?", sender: "host", timestamp: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([systemMessage]);
  const [streamingText, setStreamingText] = useState("");

  // Scroll to bottom effect
  useEffect(() => {
    const messagesContainer = document.querySelector('.messages-container');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }, [messages, streamingText]);

  const getAIResponse = async (userMessage: string) => {
    try {
      const updatedHistory: ChatMessage[] = [
        ...chatHistory,
        { role: 'user', content: userMessage }
      ];
      
      setIsTyping(true);
      setStreamingText("");

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedHistory }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const reader = response.body?.getReader();
      let fullResponse = "";

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const text = new TextDecoder().decode(value);
        fullResponse += text;
        setStreamingText(fullResponse);
      }

      // After stream completes, add the full message
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: fullResponse,
        sender: "host",
        timestamp: new Date()
      }]);

      // Update chat history
      setChatHistory([
        ...updatedHistory,
        { role: 'assistant', content: fullResponse }
      ]);

    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: "something's not right on my end. could you try that again?",
        sender: "host",
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
      setStreamingText("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const userMessage = newMessage.trim();
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: userMessage,
        sender: "user",
        timestamp: new Date()
      }]);
      setNewMessage("");
      await getAIResponse(userMessage);
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
        <div className="h-96 overflow-y-auto px-6 py-4 messages-container">
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
            
            {/* Streaming response */}
            {streamingText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start mb-4"
              >
                <div className="rounded-2xl px-4 py-2 bg-gradient-to-br from-gray-50 to-white text-gray-600">
                  <p className="text-sm">{streamingText}</p>
                </div>
              </motion.div>
            )}

            {/* Typing indicator */}
            {isTyping && !streamingText && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start mb-4"
              >
                <div className="rounded-2xl px-4 py-2 bg-gradient-to-br from-gray-50 to-white">
                  <p className="text-sm text-gray-400">arc is typing...</p>
                </div>
              </motion.div>
            )}
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
              disabled={isTyping}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-600 hover:text-gray-700 transition-colors"
              disabled={!newMessage.trim() || isTyping}
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