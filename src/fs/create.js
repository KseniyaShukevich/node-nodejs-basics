import { writeFile } from 'fs';

import { checkExists } from './helpers.js';
import { errorMessage } from './constants.js';

const url = 'src/fs/files/fresh.txt';
const text = 'I am fresh and young';

const create = async (url, text) => {
    const isFileExist = await checkExists(url)

    if (isFileExist) {
        throw new Error(errorMessage);
    }

    writeFile(url, text, (err) => {
        if (err) throw err;
    })
};

await create(url, text);