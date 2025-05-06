import {DataTypes} from 'sequelize';
import sequelize from '../config/database';

const CheckInOutHistory = sequelize.define('CheckInOutHistory', {
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
    event: {
        type: DataTypes.ENUM('check_in', 'check_out'),
        allowNull: false,
    }
}, {
    timestamps: true,
});

export default CheckInOutHistory;
