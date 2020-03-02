import * as ORM from "sequelize";
import sequelize from 'sequelize';

class courseModel{
   nome="Courses"; 
   opcoes={description:ORM.STRING,
            url:ORM.STRING,
            longDescription:ORM.STRING,
            iconUrl:ORM.STRING,
            courseListIcon:ORM.STRING,
            seqNo:ORM.INTEGER,
            comingSoon:ORM.BOOLEAN,
            isOngoing:ORM.BOOLEAN};

}

export const modelo:courseModel=new courseModel();