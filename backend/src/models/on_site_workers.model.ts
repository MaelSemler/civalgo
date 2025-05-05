import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const OnSiteWorkers = sequelize.define('OnSiteWorkers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        },
    },
}, {
    timestamps: true,
});

export default OnSiteWorkers;
