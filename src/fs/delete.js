import { rm } from 'fs';

import { checkExists } from './helpers.js';
import { ERROR_MESSAGE } from './constants.js';

const URL_FILE_TO_DELETE = './files/fileToRemove.txt';

const remove = async (urlFileToDelete) => {
    const filePath = new URL(urlFileToDelete, import.meta.url);
    const isFileToDeleteExists = await checkExists(filePath);

    if (!isFileToDeleteExists) {
        throw new Error(ERROR_MESSAGE);
    }

    rm(filePath, (err) => {
        if (err) throw err;
    });
};

await remove(URL_FILE_TO_DELETE);
