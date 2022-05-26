import { WebhookClient } from "discord.js";

export const sendMessage = (url: string, message: string) => {
  const client = new WebhookClient({ url });

  return client.send(message);
};
