import { Message } from "../stores/use-messages";
import { ReactNode } from "react";
import { ChatMessage } from "./chat-message";

export const MessageList = ({
  messages,
  children,
  scrollToBottom,
  animationCompleteHandler,
}: {
  messages: Message[];
  children: ReactNode;
  scrollToBottom: () => void;
  animationCompleteHandler: () => void;
}) => {
  return (
    <div className="flex flex-col h-full overflow-y-auto overflow-hidden gap-4 mt-10">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`${
            (message.from === "user"
              ? "self-end text-white text-right mr-2"
              : "self-start text-left ml-2 font-courier") + " max-w-[80%] break-words "
          }`}
          style={{
            filter:
              message.from === "user"
                ? "drop-shadow(0 0 8px #55B146)"
                : "none",
            color:
              message.from === "user"
                ? "white"
                : "#DEF249",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "16px",
          }}
        >
          <ChatMessage
            message={message}
            scrollToBottom={scrollToBottom}
            animationCompleteHandler={animationCompleteHandler}
          />
        </div>
      ))}
      {children}
    </div>
  );
};
