"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
var discord_js_1 = require("discord.js");
var sendMessage = function (url, message) {
    var client = new discord_js_1.WebhookClient({ url: url });
    return client.send(message);
};
exports.sendMessage = sendMessage;
