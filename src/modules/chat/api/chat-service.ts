import { api } from "@/modules/common/api";
import { Message } from "../stores/use-messages";

export const chatService = {
  sendMessage: async ({
    message,
    userId,
    taskId,
  }: {
    message: string;
    userId: number;
    taskId: number;
  }) => {
    const { data } = await api.post<{
      response: string;
      solved: boolean;
      solved_word: string;
      type: "message" | "img";
    }>(
      "/ask_question",
      { question: message, task_id: taskId },
      {
        headers: {
          userid: userId,
        },
      }
    );

    return {response: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJCKnlaqTdeGYFclEH4rjYzQtpmKEpeCskQ&s", solved: data.solved, solved_word: data.solved_word, type: "img"};
  },

  getMessages: async ({
    userId,
    taskId,
  }: {
    userId: number;
    taskId: number;
  }): Promise<{ messages: Message[]; messagesLimit: number }> => {
    try {
      const response = await api.get<{
        msgs: (
          | {
              user: string;
              id: number;
            }
          | { system: string; id: number }
        )[];
        free_msgs: number;
        won: boolean;
      }>(`/riddle_history/${taskId}`, {
        headers: { userid: userId },
      });

      const messages: Message[] = [];

      response.data.msgs.forEach((message) => {


        if ("system" in message) {
          const isImage = message.system.startsWith("http") && /\.(png|jpe?g|gif|bmp|webp)$/i.test(message.system);
          messages.push({
            from: "bot",
            id: message.id,
            isNew: false,
            text: message.system,
            type: isImage ? "img" : "message",
          });
        }

        if ("user" in message) {
          const isImage = message.user.startsWith("http") && /\.(png|jpe?g|gif|bmp|webp)$/i.test(message.user);
          messages.push({
            from: "user",
            id: message.id,
            isNew: false,
            text: message.user,
            type: isImage ? "img" : "message",
          });
        }
      });

      return {
        messages,
        messagesLimit: response.data.free_msgs,
      };
    } catch (error) {
      return {
        messages: [],
        messagesLimit: 0,
      };
    }
  },
};
