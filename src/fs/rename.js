import fs from 'fs';

import { checkExists } from './helpers.js';
import { ERROR_MESSAGE } from './constants.js';

const URL_WRONG_FILE_NAME = './files/wrongFilename.txt';
const URL_CORRECT_FILE_NAME = './files/properFilename.md';

const rename = async (urlWrongFileName, urlCorrectFileName) => {
    const wrongFileNamePath = new URL(urlWrongFileName, import.meta.url);
    const correctFileNamePath = new URL(urlCorrectFileName, import.meta.url);
    const isWrongFileExists = await checkExists(wrongFileNamePath);
    const isCorrectFileExists = await checkExists(correctFileNamePath);

    if (!isWrongFileExists || isCorrectFileExists) {
        throw new Error(ERROR_MESSAGE);
    }

    fs.rename(wrongFileNamePath, correctFileNamePath, (err) => {
        if (err) throw err;
    });
};

await rename(URL_WRONG_FILE_NAME, URL_CORRECT_FILE_NAME);
