import { writeFile } from 'fs';

import { checkExists } from './helpers.js';
import { ERROR_MESSAGE } from './constants.js';

const URL = './files/fresh.txt';
const TEXT = 'I am fresh and young';

const create = async (url, text) => {
    const filePath = new URL(url, import.meta.url);
    const isFileExist = await checkExists(filePath)

    if (isFileExist) {
        throw new Error(ERROR_MESSAGE);
    }

    writeFile(filePath, text, (err) => {
        if (err) throw err;
    })
};

await create(URL, TEXT);