"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ORM = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
const dbUrl = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course';
const dados = new sequelize_1.Sequelize(dbUrl);
const CourseModel = dados.define('Courses', { description: ORM.STRING,
    url: ORM.STRING,
    longDescription: ORM.STRING,
    iconUrl: ORM.STRING,
    courseListicon: ORM.STRING,
    seqNo: ORM.INTEGER,
    commingSoon: ORM.BOOLEAN,
    isOngoing: ORM.BOOLEAN });
