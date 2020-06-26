'use strict';

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order',{
        order_date:{ 
            type: DataTypes.STRING
          },
        order_medecin:{ 
            type: DataTypes.STRING
          },
        order_duration:{ 
            type: DataTypes.INTEGER
          },
        order_pdf: {
          type : DataTypes.STRING
        },
        order_qrcode: {
          type : DataTypes.STRING
        },
        order_renew:{ 
            type: DataTypes.BOOLEAN
          },
    })
    Order.associate = models => {
        Order.belongsTo(models.User)
    }
     
    return Order;
}
