const env = process.env;

const verifyEnvFile = () => {
    Object.keys(env).forEach(elmnt => {

        console.log(elmnt)
    })
}

// Sort filepath
const sortFilePath = (filepath) => {
    const sortedArray = filepath.split('').map(s => s.charCodeAt(0))
    return sortedArray.join('');
}

module.exports = {
    verifyEnvFile,
    sortFilePath
}