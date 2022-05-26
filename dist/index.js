"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const sendMessage_1 = require("./helpers/sendMessage");
inquirer_1.default
    .prompt([{ type: "input", name: "url", message: "Webhook url:" }])
    .then(({ url }) => {
    prompt(url);
});
const prompt = (url) => {
    inquirer_1.default
        .prompt([{ type: "input", name: "message", message: "Message:" }])
        .then(({ message }) => (0, sendMessage_1.sendMessage)(url, message))
        .finally(() => prompt(url));
};
