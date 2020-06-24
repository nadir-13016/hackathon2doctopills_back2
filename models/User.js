'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        user_lastname:{
            type: DataTypes.STRING,
            max: 80
        },
        user_firstname:{
            type: DataTypes.STRING,
            max: 80
        }, 
        user_mail: {
            type : DataTypes.STRING,
            allowNull: false,
            validate : {
                isEmail: true,
                max: 80
            }
        },
        user_password:{
            type: DataTypes.STRING,
            unique: true,
            max: 80
        },
        user_number:{ 
            type: DataTypes.INTEGER
          },
        user_num_secu:{ 
            type: DataTypes.INTEGER
          },
        user_birthdate: { 
            type: DataTypes.DATEONLY
          },
        user_accept_CGV : {
            type : DataTypes.BOOLEAN,
            allowNull: false
        },


    } , 
    // User.associate = models => {
    //     User.hasMany(models.Medecin)
    // }
);
    return User;
}