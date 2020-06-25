
'use strict';

module.exports = (sequelize, DataTypes) => {
    const Medecin = sequelize.define('Medecin',{
        medecin_firstname : {
            type: DataTypes.STRING
        },
        medecin_lastname : {
            type : DataTypes.STRING
        },
        medecin_adress: {
            type : DataTypes.STRING
        },
        medecin_postal_code: {
            type: DataTypes.INTEGER
        },
        medecin_specialty: {
            type: DataTypes.STRING
        },
        medecin_number: {
            type: DataTypes.INTEGER
        }

    })

    Medecin.associate = models =>{
        Medecin.belongsTo(models.User)
    }

    return Medecin;
}