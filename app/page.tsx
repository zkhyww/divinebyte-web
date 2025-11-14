"use client";

import { useChat } from "ai/react";
import { ChatInput } from "../components/chat-input";
import { MessageBubble } from "../components/message-bubble";
import { LoadingIndicator } from "../components/loading-indicator";
import { GlassCard } from "../components/ui/glass-card";
import { ThemeToggle } from "../components/theme-toggle";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: { userId: "00000000-0000-0000-0000-000000000000" }, // 注意：这只是一个临时的占位符
  });

  return (
    <div className="flex h-screen">
      {/* 左侧导航栏 (Sidebar) */}
      <aside className="w-64 p-4 flex flex-col bg-black/30">
        <h1 className="text-2xl font-bold mb-8">divinebyte</h1>
        <nav className="flex flex-col space-y-2">
          <a href="#" className="p-2 rounded-md bg-white/10">对话历史</a>
          <a href="#" className="p-2 rounded-md">学习路径</a>
          <a href="#" className="p-2 rounded-md">2.5D 动画占位</a>
        </nav>
        <div className="mt-auto">
          <ThemeToggle />
        </div>
      </aside>

      {/* 主聊天窗口 */}
      <main className="flex-1 flex flex-col p-4 h-full">
        <GlassCard className="flex-1 flex flex-col p-6">
          <div className="flex-1 overflow-y-auto pr-4 space-y-4">
            {messages.map((m) => (
              <MessageBubble key={m.id} role={m.role as any} content={m.content} />
            ))}
            {isLoading && <LoadingIndicator />}
          </div>
          <div className="mt-4">
            <ChatInput
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
        </GlassCard>
      </main>
    </div>
  );
}