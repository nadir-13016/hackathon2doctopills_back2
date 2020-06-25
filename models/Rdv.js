'use strict';

module.exports = (sequelize, DataTypes) => {
    const Rdv = sequelize.define('Rdv',{
       rdv_date:  {
            type: DataTypes.DATEONLY
        },
       rdv_heure: {
        type: DataTypes.TIME
    },
       rdv_docteur: {
        type: DataTypes.STRING
    },
    rdv_speciality: {
        type: DataTypes.STRING
    },
        rdv_adress: {
        type: DataTypes.STRING
    },
    rdv_reccurence: {
        type: DataTypes.INTEGER
    },

       rdv_confirmed: {
        type: DataTypes.BOOLEAN
    }
    }) 
    Rdv.associate = models => {
        Rdv.belongsTo(models.User)
    }
     ;
    return Rdv;
}
