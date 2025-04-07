import { useTranslation } from "react-i18next";
import { RightArrowIcon } from "@/modules/common/icons/right-arrow-icon";
import { Button } from "@/modules/common/ui/button";
import { useMessages } from "../stores/use-messages";
import { FormEvent } from "react";
import { initData, useSignal } from "@telegram-apps/sdk-react";
import { toast } from "react-toastify";
import { api } from "@/modules/common/api";
import { useSettings } from "@/modules/settings/stores/use-settings";
import { SendTransactionRequest, useTonConnectUI } from "@tonconnect/ui-react";
import { toNano } from "@ton/ton";
import { useTasks } from "../stores/use-tasks";

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

export const ChatForm = ({
  messageValue,
  setMessageValue,
  closeLimitMessageBox,
}: {
  isAwaitingAnswer: boolean;
  messageValue: string;
  setMessageValue: (value: string) => void;
  openLimitMessageBox: () => void;
  closeLimitMessageBox: () => void;
  sendMessage: (message: string) => void;
}) => {
  const { t } = useTranslation();
  const { selectedPaymentType } = useSettings();
  const {
    incrementMessagesLimit,
  } = useMessages();

  const [tonConnectUI] = useTonConnectUI();
  const user = useSignal(initData.user);

  const { getCurrentTask } = useTasks();

  const tonPaymentHandler = async () => {
    const transaction: SendTransactionRequest = {
      validUntil: Date.now() + 5 * 60 * 1000,
      messages: [
        {
          address: import.meta.env.VITE_TON_ADDRESS,
          amount: toNano("0.1").toString(),
        },
      ],
    };

    try {
      await tonConnectUI.sendTransaction(transaction);

      const isOk = await checkTonPayment();

      if (isOk) {
        toast(t("payment.success"));
        incrementMessagesLimit();
        closeLimitMessageBox();
      } else {
        toast(t("payment.invoice_error"));
      }
    } catch {
      //
    }
  };

  const checkTonPayment = async (count = 0): Promise<boolean> => {
    if (count === 10) {
      return false;
    }

    const userId = user?.id || 0;

    try {
      await api.post<boolean>(
        "/check_payment",
        {
          adr: tonConnectUI.account?.address,
          task_id: getCurrentTask(),
        },
        {
          headers: {
            userid: userId,
          },
        }
      );
      return true;
    } catch (error) {
      await sleep(1000);
      return checkTonPayment(count + 1);
    }
  };

  const telegramStarsPaymentHandler = async () => {
    // toast(t("payment.success"));
    incrementMessagesLimit();
    setMessageValue("");
    // closeLimitMessageBox();
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (selectedPaymentType === "STARS") {
      telegramStarsPaymentHandler();
    }

    if (selectedPaymentType === "TON") {
      tonPaymentHandler();
    }
  };

  return (
    <form onSubmit={submitHandler} className="flex gap-4 sticky bottom-0">
      <input
        type="text"
        value={messageValue}
        onChange={(e) => {
          setMessageValue(e.target.value);
        }}
        className="bg-[#063D60] text-[#0E7EAE] placeholder-[#0E7EAE] w-full px-2 bg-transparent rounded border border-solid border-[#0E7EAE] disabled:cursor-default disabled:opacity-35"
        style={{fontFamily: "'Courier New', Courier, monospace", fontSize: "16px"}}
      />

      <Button
          type="submit"
          className="bg-[#063D60] h-12 w-12 text-[#0E7EAE]"
          style={{border: "1px solid #0E7EAE"}}
      >
        <RightArrowIcon className="text-[#0E7EAE]" />
      </Button>
    </form>
  );
};
