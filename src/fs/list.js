import { readdir } from 'fs';

import { checkExists } from './helpers.js';
import { ERROR_MESSAGE } from './constants.js';

const URL_FOLDER_TO_PRINT = './files';

const list = async (urlFolderToPrint) => {
    const filePath = new URL(urlFolderToPrint, import.meta.url);
    const isFolderExists = checkExists(filePath);

    if (!isFolderExists) {
        throw new Error(ERROR_MESSAGE);
    }

    readdir(filePath, (err, files) => {
        if (err) throw err;

        console.log(files);
      });
};

await list(URL_FOLDER_TO_PRINT);
