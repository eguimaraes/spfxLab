"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.dados = new sequelize_1.Sequelize('complete-typescript-course', 'postgres', 'senha', { host: 'localhost',
    port: 5432,
    dialect: 'postgres' });
