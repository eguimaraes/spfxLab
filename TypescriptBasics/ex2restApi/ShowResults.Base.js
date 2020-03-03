"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = require("./conexao");
const SeModelCourse_1 = require("./SeModelCourse");
const startApp_1 = require("./startApp");
const app = startApp_1.startApp(8090);
function ShowResults({ model, order, route }) {
    SeModelCourse_1.setModelCourse();
    const CourseModel = conexao_1.dados.model(model);
    CourseModel.findAll({ order: order })
        .then(results => {
        app.route(route).get((_req, res) => {
            res.status(200).json(results);
        });
    });
}
exports.ShowResults = ShowResults;
;
