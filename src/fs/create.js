import { writeFile } from 'fs';

import { checkFileExists } from './helpers.js';
import { errorMessage } from './constants.js';

const url = 'src/fs/files/fresh.txt';
const text = 'I am fresh and young';

const create = async (url, text) => {
    const isFileExist = await checkFileExists(url)

    if (isFileExist) {
        throw Error(errorMessage);
    }

    writeFile(url, text, (err) => {
        if (err) throw err;
    })
};

await create(url, text);