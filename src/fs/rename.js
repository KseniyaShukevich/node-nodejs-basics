import fs from 'fs';

import { checkExists } from './helpers.js';
import { errorMessage } from './constants.js';

const urlWrongFile = 'src/fs/files/wrongFilename.txt';
const urlCorrectFile = 'src/fs/files/properFilename.md';

const rename = async (urlWrongFile, urlCorrectFile) => {
    const isWrongFileExists = await checkExists(urlWrongFile);
    const isCorrectFileExists = await checkExists(urlCorrectFile);

    if (!isWrongFileExists || isCorrectFileExists) {
        throw new Error(errorMessage);
    }

    fs.rename(urlWrongFile, urlCorrectFile, (err) => {
        if (err) throw err;
    });
};

await rename(urlWrongFile, urlCorrectFile);
