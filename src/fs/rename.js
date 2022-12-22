import fs from 'fs';

import { checkExists } from './helpers.js';
import { errorMessage } from './constants.js';

const urlWrongFileName = './files/wrongFilename.txt';
const urlCorrectFileName = './files/properFilename.md';

const rename = async (urlWrongFileName, urlCorrectFileName) => {
    const wrongFileNamePath = new URL(urlWrongFileName, import.meta.url);
    const correctFileNamePath = new URL(urlCorrectFileName, import.meta.url);
    const isWrongFileExists = await checkExists(wrongFileNamePath);
    const isCorrectFileExists = await checkExists(correctFileNamePath);

    if (!isWrongFileExists || isCorrectFileExists) {
        throw new Error(errorMessage);
    }

    fs.rename(wrongFileNamePath, correctFileNamePath, (err) => {
        if (err) throw err;
    });
};

await rename(urlWrongFileName, urlCorrectFileName);
