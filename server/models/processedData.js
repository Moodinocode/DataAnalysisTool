import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import { BusinessData } from './businessData.js';

const ProcessedData = sequelize.define('ProcessedData', {
    entryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dataId: {
        type: DataTypes.INTEGER,
        references: {
            model: BusinessData,
            key: 'dataId'
        }
    },
    metricName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    metricValue: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    calculatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'ProcessedData',
    timestamps: true
});

export { ProcessedData }; 