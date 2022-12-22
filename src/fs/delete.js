import { rm } from 'fs';

import { checkExists } from './helpers.js';
import { errorMessage } from './constants.js';

const urlFileToDelete = './files/fileToRemove.txt';

const remove = async (urlFileToDelete) => {
    const filePath = new URL(urlFileToDelete, import.meta.url);
    const isFileToDeleteExists = await checkExists(filePath);

    if (!isFileToDeleteExists) {
        throw new Error(errorMessage);
    }

    rm(filePath, (err) => {
        if (err) throw err;
    });
};

await remove(urlFileToDelete);
