//any script used in the html should be written here

// File upload handling
const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
        const response = await fetch('/data/upload', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        if (response.ok) {
            // Store the dataId for later use
            sessionStorage.setItem('currentDataId', result.dataId);
            return result;
        } else {
            throw new Error(result.message);
        }
    } catch (error) {
        console.error('Upload failed:', error);
        throw error;
    }
};

// Analysis handling
const analyzeData = async (dataId) => {
    try {
        const response = await fetch(`/data/analyze/${dataId}`, {
            method: 'POST'
        });
        
        const result = await response.json();
        if (response.ok) {
            return result;
        } else {
            throw new Error(result.message);
        }
    } catch (error) {
        console.error('Analysis failed:', error);
        throw error;
    }
};
