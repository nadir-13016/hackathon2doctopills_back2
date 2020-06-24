
'use strict';

module.exports = (sequelize, DataTypes) => {
    const InfoPatient = sequelize.define('InfoPatient',{

        infoPatient_adress: {
            type : DataTypes.STRING
        },
        infoPatient_postal_code: {
            type: DataTypes.INTEGER
        },
        infoPatient_size: {
            type: DataTypes.INTEGER
        },
        infoPatient_wheight: {
            type: DataTypes.INTEGER
        },
        infoPatient_allergy: {
            type: DataTypes.BOOLEAN
        },
        infoPatient_allergy1: {
            type: DataTypes.INTEGER
        },
        infoPatient_allergy2: {
            type: DataTypes.INTEGER
        },
        infoPatient_allergy3: {
            type: DataTypes.INTEGER
        },
        infoPatient_chronic_condition: {
            type: DataTypes.BOOLEAN
        },
        infoPatient_chronic_condition1: {
            type: DataTypes.INTEGER
        },
        infoPatient_chronic_condition2: {
            type: DataTypes.INTEGER
        },
        infoPatient_chronic_condition3: {
            type: DataTypes.INTEGER
        },
        infoPatient_been_surgered:{ 
            type: DataTypes.BOOLEAN
          },
        infoPatient_blood_type:{ 
            type: DataTypes.STRING
          }
    }, 
    // InfoPatient.associate = models => {
    //     InfoPatient.belongsTo(models.User)
    // }
    );

    return InfoPatient;
}