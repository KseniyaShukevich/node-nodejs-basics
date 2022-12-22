import { writeFile } from 'fs';

import { checkExists } from './helpers.js';
import { errorMessage } from './constants.js';

const url = './files/fresh.txt';
const text = 'I am fresh and young';

const create = async (url, text) => {
    const filePath = new URL(url, import.meta.url);
    const isFileExist = await checkExists(filePath)

    if (isFileExist) {
        throw new Error(errorMessage);
    }

    writeFile(filePath, text, (err) => {
        if (err) throw err;
    })
};

await create(url, text);