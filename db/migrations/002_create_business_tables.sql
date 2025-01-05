-- Create BusinessData Table
CREATE TABLE BusinessData (
    dataId INT IDENTITY(1,1) PRIMARY KEY,
    userId INT FOREIGN KEY REFERENCES Users(userId),
    fileName NVARCHAR(255) NOT NULL,
    uploadedAt DATETIME DEFAULT GETDATE(),
    data NVARCHAR(MAX)
);

-- Create ProcessedData Table
CREATE TABLE ProcessedData (
    entryId INT IDENTITY(1,1) PRIMARY KEY,
    dataId INT FOREIGN KEY REFERENCES BusinessData(dataId),
    metricName NVARCHAR(100) NOT NULL,
    metricValue FLOAT NOT NULL,
    calculatedAt DATETIME DEFAULT GETDATE()
);

-- Create RiskAssessment Table
CREATE TABLE RiskAssessment (
    assessmentId INT IDENTITY(1,1) PRIMARY KEY,
    dataId INT FOREIGN KEY REFERENCES BusinessData(dataId),
    riskLevel NVARCHAR(10) CHECK (riskLevel IN ('High', 'Medium', 'Low')),
    details NVARCHAR(MAX),
    createdAt DATETIME DEFAULT GETDATE()
); 