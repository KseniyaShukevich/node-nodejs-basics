import { readFile } from 'fs';

import { checkExists } from './helpers.js';
import { errorMessage } from './constants.js';

const urlFileToPrint = './files/fileToRead.txt';

const read = async (urlFileToPrint) => {
    const filePath = new URL(urlFileToPrint, import.meta.url);
    const isFileExists = await checkExists(filePath);

    if (!isFileExists) {
        throw new Error(errorMessage);
    }

    readFile(filePath, { encoding: 'utf8' }, (err, data) => {
        if (err) throw err;

        console.log(data);
    });
};

await read(urlFileToPrint);
