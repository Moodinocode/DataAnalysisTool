import { User } from './users.js';
import { BusinessData } from './businessData.js';
import { ProcessedData } from './processedData.js';
import { RiskAssessment } from './riskAssessment.js';

// User -> BusinessData (one-to-many)
User.hasMany(BusinessData, { foreignKey: 'userId' });
BusinessData.belongsTo(User, { foreignKey: 'userId' });

// BusinessData -> ProcessedData (one-to-many)
BusinessData.hasMany(ProcessedData, { foreignKey: 'dataId' });
ProcessedData.belongsTo(BusinessData, { foreignKey: 'dataId' });

// BusinessData -> RiskAssessment (one-to-one)
BusinessData.hasOne(RiskAssessment, { foreignKey: 'dataId' });
RiskAssessment.belongsTo(BusinessData, { foreignKey: 'dataId' });

export { User, BusinessData, ProcessedData, RiskAssessment }; 