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
       rdv_confirmed: {
        type: DataTypes.BOOLEAN
    }
    }, {} );
    return Rdv;
}
