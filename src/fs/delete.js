import { rm } from 'fs';

import { checkExists } from './helpers.js';
import { errorMessage } from './constants.js';

const urlFileToDelete = 'src/fs/files/fileToRemove.txt';

const remove = async (urlFileToDelete) => {
    const isFileToDeleteExists = await checkExists(urlFileToDelete);

    if (!isFileToDeleteExists) {
        throw new Error(errorMessage);
    }

    rm(urlFileToDelete, (err) => {
        if (err) throw err;
    });
};

await remove(urlFileToDelete);
