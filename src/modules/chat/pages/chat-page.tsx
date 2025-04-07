import { useMessageBoxes } from "../hooks/use-message-boxes";
import { useChat } from "../hooks/use-chat";
import { MessageList } from "../components/message-list";
import { Spinner } from "@telegram-apps/telegram-ui";
import { ChatForm } from "../components/chat-form";
import { ChatHeader } from "../components/chat-header";
import { useMessages } from "../stores/use-messages";

export const ChatPage = () => {
  const { isFetchingMessages, messages } = useMessages();

  const {
    onCloseLimitMessageBox,
    openLimitMessageBox,
  } = useMessageBoxes();

  const {
    messageValue,
    setMessageValue,
    chatEndRef,
    scrollToBottom,
    animationCompleteHandler,
    isAwaitingAnswer,
    sendMessage,
  } = useChat();


  return (
      <div className="fixed h-full bg-gradient-to-b from-[#032340] to-[#085076] flex flex-col w-full">
          <ChatHeader/>

          <section className="sticky p-2 flex flex-col overflow-hidden gap-4 h-screen" style={{
              position: '-webkit-sticky',
              overflowY: 'auto',
              transform: 'translateZ(0)',
          }}>

              {isFetchingMessages ? (
                  <div className="flex items-center justify-center h-full">
                      <Spinner size="l" className="text-[#55B146]"/>
                  </div>
              ) : (
                  <MessageList
                      messages={messages}
                      scrollToBottom={scrollToBottom}
                      animationCompleteHandler={animationCompleteHandler}
                  >
                      <div ref={chatEndRef}/>
                  </MessageList>
              )}
          </section>

          <div className="sticky flex flex-col w-full gap-4 p-2 pt-0 mb-[env(safe-area-inset-bottom,0)]" style={{
              position: '-webkit-sticky',
              willChange: 'transform',
          }}>
              <ChatForm
                  messageValue={messageValue}
                  isAwaitingAnswer={isAwaitingAnswer}
                  setMessageValue={setMessageValue}
                  openLimitMessageBox={openLimitMessageBox}
                  closeLimitMessageBox={onCloseLimitMessageBox}
                  sendMessage={sendMessage}
              />
          </div>
      </div>
  );
};
