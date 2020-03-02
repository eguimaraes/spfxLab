import * as ORM from "sequelize";
import {Sequelize} from 'sequelize';
import sequelize from 'sequelize';
export const dados:Sequelize= new Sequelize(
    'complete-typescript-course', 
    'postgres',
    '20121993',
    {host: 'localhost',
     port:5432, 
     dialect: 'postgres'}
     );

     
     
     
     