"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = require("./conexao");
function setModel(model) {
    conexao_1.dados.define(model.nome, model.opcoes);
}
exports.setModel = setModel;
