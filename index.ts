import inquirer from "inquirer";
import { sendMessage } from "./helpers/sendMessage";

inquirer
  .prompt([{ type: "input", name: "url", message: "Webhook url:" }])
  .then(({ url }) => {
    prompt(url);
  });

const prompt = (url: string) => {
  inquirer
    .prompt([{ type: "input", name: "message", message: "Message:" }])
    .then(({ message }) => sendMessage(url, message))
    .finally(() => prompt(url));
};
