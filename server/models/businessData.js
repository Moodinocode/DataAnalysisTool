import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import { User } from './users.js';

const BusinessData = sequelize.define('BusinessData', {
    dataId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userId'
        }
    },
    fileName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    uploadedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    data: {
        type: DataTypes.JSON,
        allowNull: true
    }
}, {
    tableName: 'BusinessData',
    timestamps: true
});

export { BusinessData };
