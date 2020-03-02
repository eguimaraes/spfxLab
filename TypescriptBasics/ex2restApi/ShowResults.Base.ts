import { dados } from "./conexao";
import { setModelCourse } from './SeModelCourse';
import { Request, Response } from 'express';
import{Application} from "express";
import { startApp } from "./startApp";
const app: Application = startApp(8090);


export function ShowResults({ model, order, route }: { model: string; order: Array<string>; route: string; }) {
    setModelCourse();
    const CourseModel = dados.model(model);
    CourseModel.findAll({ order: order })
        .then(results => {
            app.route(route).get((_req: Request, res: Response) => {
                res.status(200).json(results);
            })
        })
}
;
