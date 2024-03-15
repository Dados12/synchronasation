const fs = require('node:fs');
const os = require('node:os')
const { getLocalConfigFile } = require('../utils/localfs')

const addAction = (fileOrPath) => {

    // if ()
    console.log("Adding file to this command.", fileOrPath);

    console.log(getLocalConfigFile());
}

module.exports = {
    addAction
}