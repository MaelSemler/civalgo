import {DataTypes} from 'sequelize';
import sequelize from '../config/database';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
    },
    siteId: {
        type: DataTypes.INTEGER,
    },
    role: {
        type: DataTypes.ENUM('worker', 'supervisor'),
        allowNull: false,
        defaultValue: 'worker',
    }
}, {
    timestamps: true,
});

export default User;
