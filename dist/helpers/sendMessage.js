"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const discord_js_1 = require("discord.js");
const sendMessage = (url, message) => {
    const client = new discord_js_1.WebhookClient({ url });
    return client.send(message);
};
exports.sendMessage = sendMessage;
