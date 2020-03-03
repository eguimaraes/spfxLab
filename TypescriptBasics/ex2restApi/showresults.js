"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShowResults_Base_1 = require("./ShowResults.Base");
//"Courses" ["seqNo"] '/api/courses' ShowResultsCourse
function ShowResultsCourse() {
    ShowResults_Base_1.ShowResults({ model: "Courses", order: ["seqNo"], route: '/api/courses' });
}
exports.ShowResultsCourse = ShowResultsCourse;
