import { TypingText } from "@/modules/common/ui/typing-text";
import { Message } from "../stores/use-messages";

export const ChatMessage = ({
  message,
  scrollToBottom,
  animationCompleteHandler,
}: {
  message: Message;
  scrollToBottom: () => void;
  animationCompleteHandler: () => void;
}) => {

  if (message.from === "bot" && message.isNew && message.type == "message") {
    return (
      <ScrollableTypeAnimation
        text={message.text}
        onWordTyped={scrollToBottom}
        onAnimationComplete={animationCompleteHandler}
      />
    );
  }
  if (message.from === "bot" && message.isNew && message.type == "img") {
    return (
        <div className="flex justify-center">
          <img
              src={message.text}
              alt="Image from bot"
              className="max-w-full max-h-[400px] object-contain rounded-lg" />
        </div>
    );
  }

  return message.text;
};

const ScrollableTypeAnimation = ({
  text,
  onWordTyped,
  onAnimationComplete,
}: {
  text: string;
  onWordTyped: () => void;
  onAnimationComplete?: () => void;
}) => {
  return (
    <TypingText
      text={text}
      onWordTyped={onWordTyped}
      wrapperClassName="!justify-start"
      onAnimationComplete={onAnimationComplete}
    />
  );
};
