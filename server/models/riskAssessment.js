import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import { BusinessData } from './businessData.js';

const RiskAssessment = sequelize.define('RiskAssessment', {
    assessmentId: {
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
    riskLevel: {
        type: DataTypes.ENUM('High', 'Medium', 'Low'),
        allowNull: false
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'RiskAssessment',
    timestamps: true
});

export { RiskAssessment }; 