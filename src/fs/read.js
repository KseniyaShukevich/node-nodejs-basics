import { readFile } from 'fs';

import { checkExists } from './helpers.js';
import { ERROR_MESSAGE } from './constants.js';

const URL_FILE_TO_READ = './files/fileToRead.txt';

const read = async (urlFileToRead) => {
    const filePath = new URL(urlFileToRead, import.meta.url);
    const isFileExists = await checkExists(filePath);

    if (!isFileExists) {
        throw new Error(ERROR_MESSAGE);
    }

    readFile(filePath, { encoding: 'utf8' }, (err, data) => {
        if (err) throw err;

        console.log(data);
    });
};

await read(URL_FILE_TO_READ);
