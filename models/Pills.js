
'use strict';

module.exports = (sequelize, DataTypes) => {
    const Pills = sequelize.define('Pills',{
        pills_name: {
            type : DataTypes.STRING
        },
        pills_picture:{
            type: DataTypes.BLOB
        },
        pills_duration: {
            type : DataTypes.INTEGER
        },
        pills_quantity: {
            type : DataTypes.INTEGER
        },
        pills_morning: {
            type : DataTypes.BOOLEAN
        },
        pills_midday: {
            type : DataTypes.BOOLEAN
        },
        pills_evening: {
            type : DataTypes.BOOLEAN
        },
        pills_night: {
            type : DataTypes.BOOLEAN
        },
    }, {}

    );
    return Pills;
}