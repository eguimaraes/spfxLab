import * as ORM from "sequelize";
import {Sequelize} from 'sequelize';
import sequelize from 'sequelize';
export const dados:Sequelize= new Sequelize(
    'complete-typescript-course', 
    'postgres',
    'senha',
    {host: 'localhost',
     port:5432, 
     dialect: 'postgres'}
     );

     
     
     
     