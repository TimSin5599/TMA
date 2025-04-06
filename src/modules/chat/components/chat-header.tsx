import { useTranslation } from "react-i18next";
import { Button } from "@telegram-apps/telegram-ui";

export const ChatHeader = () => {
  const { t } = useTranslation();

  // const lang = i18n.language === "en" ? "en" : "ru";

  // const sureSolvedHandler = () => {
  //   const message =
  //     lang == "en"
  //       ? "Did I solve the riddle completely?"
  //       : "Я отгадал загадку полностью?";
  //
  //   setMessageValue(message);
  // };

  return (
    <div>
      <div
          className="text-center py-2 px-1 mx-1 text-white flex flex-row items-center justify-between">
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M37.8 22.5C37.8 30.96 30.96 37.8 22.5 37.8C14.04 37.8 7.2 30.96 7.2 22.5C7.2 14.04 14.04 7.2 22.5 7.2C30.96 7.2 37.8 14.04 37.8 22.5ZM9 22.5C9 29.97 15.03 36 22.5 36C29.97 36 36 29.97 36 22.5C36 15.03 29.97 9 22.5 9C15.03 9 9 15.03 9 22.5Z"
              fill="#0D719E"/>
          <path d="M24.03 15.03L16.56 22.5L24.03 29.97L22.77 31.23L14.04 22.5L22.77 13.77L24.03 15.03Z" fill="#0D719E"/>
          <path d="M15.3 23.4L15.3 21.6L30.6 21.6L30.6 23.4L15.3 23.4Z" fill="#0D719E"/>
        </svg>

        <p className="font-thin text-[#DEF249] ml-2 rounded-full p-2"
           style={{border: "1px solid #DEF249", minWidth: "103px", height: "37px",  color: "#DEF249", letterSpacing: "-0.3px", verticalAlign: "center", fontSize: "14px"}}
        >
          {t("chat.my_orders")}
        </p>

        <Button
            className="font-thin bg-[#0D719E] rounded-full p-3 flex items-center justify-center"
            style={{minWidth: "109px",height: "37px", paddingTop: "10px", paddingBottom: "10px", paddingRight: "12px", paddingLeft: "12px", letterSpacing: "-0.3px", alignItems: "center", verticalAlign: "center", fontSize: "14px"}}
        >
          UQ...xsq RU
        </Button>
      </div>
    </div>
  );
};
