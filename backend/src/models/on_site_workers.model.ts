import {DataTypes} from 'sequelize';
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
        // Would add the references here but no time to create all the relations
        // references: {
        //     model: 'User',
        //     key: 'id'
        // },
    },
}, {
    timestamps: true,
});


export default OnSiteWorkers;
