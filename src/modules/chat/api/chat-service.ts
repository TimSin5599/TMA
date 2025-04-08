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
    const data = await api.post<{
      response: string;
      solved: boolean;
      solved_word: string;
    }>(
      "/ask_question",
      { question: message, task_id: taskId },
      {
        headers: {
          userid: userId,
        },
      }
    );

    // const contentType = data.headers['content-type'];
    // console.log(contentType);

    return {response: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJCKnlaqTdeGYFclEH4rjYzQtpmKEpeCskQ&s", solved: data.data.solved, solved_word: data.data.solved_word, type: "img"};
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
          const isImage = message.system.startsWith("http") && message.system.includes("images");
          console.log(isImage);
          messages.push({
            from: "bot",
            id: message.id,
            isNew: false,
            text: message.system,
            type: isImage ? "img" : "message",
          });
        }

        if ("user" in message) {
          const isImage = message.user.startsWith("http") && message.user.includes("images");
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
