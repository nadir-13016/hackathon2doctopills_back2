'use strict';

module.exports = (sequelize, DataTypes) => {
    const DataPatient = sequelize.define('DataPatient',{
        dataPatient_exam_type : {
            type: DataTypes.STRING
        },
        dataPatient_exam_date:{ 
            type: DataTypes.DATEONLY
        },
        dataPatient_prescribed_by:{ 
            type: DataTypes.STRING
          },
        dataPatient_exam_file: { 
            type: DataTypes.BLOB
          },
    })   
    
    DataPatient.associate = models => {
        DataPatient.belongsTo(models.InfoPatient)
    }
    
    return DataPatient;
}
