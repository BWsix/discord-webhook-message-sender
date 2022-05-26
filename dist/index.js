"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var sendMessage_1 = require("./helpers/sendMessage");
inquirer_1.default
    .prompt([{ type: "input", name: "url", message: "Webhook url:" }])
    .then(function (_a) {
    var url = _a.url;
    prompt(url);
});
var prompt = function (url) {
    inquirer_1.default
        .prompt([{ type: "input", name: "message", message: "Message:" }])
        .then(function (_a) {
        var message = _a.message;
        return (0, sendMessage_1.sendMessage)(url, message);
    })
        .finally(function () { return prompt(url); });
};
