import express from 'express';
import { Application } from "express";
export function startApp(port: any) {
    const app: Application = express();
    app.listen(port, () => { console.log("Servidor em watch funcionando na porta " + port); });
    return app;
}
