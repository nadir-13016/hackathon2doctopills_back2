'use strict';

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order',{
        order_date:{ 
            type: DataTypes.DATEONLY
          },
        order_medecin:{ 
            type: DataTypes.STRING
          },
        order_duration:{ 
            type: DataTypes.INTEGER
          },
        order_renew:{ 
            type: DataTypes.BOOLEAN
          },
    }, {} );
    return Order;
}
