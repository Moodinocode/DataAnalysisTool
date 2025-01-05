import { BusinessData } from '../models/businessData';
import { ProcessedData } from '../models/processedData';
import { RiskAssessment } from '../models/riskAssessment';

const uploadBusinessData = async (req, res) => {
    try {
        const { userId, fileName, data } = req.body;
        
        const businessData = await BusinessData.create({
            userId,
            fileName,
            data: JSON.stringify(data)
        });

        return res.status(201).json({
            message: "Data uploaded successfully",
            dataId: businessData.dataId
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error uploading data",
            error: error.message
        });
    }
};

const analyzeData = async (req, res) => {
    try {
        const { dataId } = req.params;
        const businessData = await BusinessData.findByPk(dataId);
        
        if (!businessData) {
            return res.status(404).json({ message: "Data not found" });
        }

        // Process the data and create metrics
        // This is where you'll implement your business logic
        const processedResults = await processData(businessData.data);
        
        // Save processed results
        await ProcessedData.create({
            dataId,
            metricName: processedResults.metricName,
            metricValue: processedResults.value
        });

        // Perform risk assessment
        const riskAssessment = await assessRisk(processedResults);
        
        await RiskAssessment.create({
            dataId,
            riskLevel: riskAssessment.level,
            details: riskAssessment.details
        });

        return res.status(200).json({
            message: "Analysis completed",
            results: processedResults,
            risk: riskAssessment
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error analyzing data",
            error: error.message
        });
    }
};

export { uploadBusinessData, analyzeData };
