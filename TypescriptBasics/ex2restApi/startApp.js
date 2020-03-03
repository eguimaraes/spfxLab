"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function startApp(port) {
    const app = express_1.default();
    app.listen(port, () => { console.log("Servidor em watch funcionando na porta " + port); });
    return app;
}
exports.startApp = startApp;
