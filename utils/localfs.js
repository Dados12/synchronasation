const os = require('node:os');
const path = require('node:path');
const fs = require('node:fs');
const { createHash } = require('node:crypto');

const excluded = ['node_modules', 'vendor', '.vscode']


const SEPARATOR = path.sep;
const username = path.basename(os.homedir())
const dirName = '.config' + SEPARATOR + 'akondro'
const fullDir = os.homedir() + SEPARATOR + dirName;
const configFileName = 'config.json'
const filePathComplete = fullDir+SEPARATOR+configFileName

// Verify if file exists
const verifyFileExist = (filePath) => {
    
}

// Hash the file for better perfs
const hashFiles = (filePath) => {

    return createHash('sha256').update(filePath, 'utf8').digest().toString('base64url');
}

// Expanded directory
const expandingDir = (directory) => {

}

// Get local configuration file
const getLocalConfigFile = () => {
    try {
        fs.mkdirSync(fullDir, { recursive: true });
        
        let content,
            configContent;
        if (fs.existsSync(filePathComplete)) {
            content = fs.readFileSync(filePathComplete, {'encoding': 'utf8'})
            configContent = JSON.parse(content)
        } else {
            const firstVersion = { version: Date.now(), username, files: {} }
            configContent = firstVersion
            updateLocalConfigFile(configContent)
        }

        return configContent;

    } catch (error) {

        console.log(error)
    }
}

// Update local config files
const updateLocalConfigFile = (updatedConfig) => {

    fs.writeFileSync(filePathComplete, JSON.stringify(updatedConfig, null, "\t"))

}



module.exports = {
    verifyFileExist,
    hashFiles,
    getLocalConfigFile,
    updateLocalConfigFile,
    expandingDir,
}