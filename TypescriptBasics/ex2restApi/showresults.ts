import { json } from "sequelize/types";
import { fromCallback } from "bluebird";
import{ShowResults} from "./ShowResults.Base";
    
//"Courses" ["seqNo"] '/api/courses' ShowResultsCourse
export function ShowResultsCourse(){

    ShowResults({ model: "Courses", order: ["seqNo"], route: '/api/courses' });

}
