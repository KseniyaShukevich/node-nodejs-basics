import { readdir } from 'fs';

import { checkExists } from './helpers.js';
import { errorMessage } from './constants.js';

const urlFolderToPrint = './files';

const list = async (urlFolderToPrint) => {
    const filePath = new URL(urlFolderToPrint, import.meta.url);
    const isFolderExists = checkExists(filePath);

    if (!isFolderExists) {
        throw new Error(errorMessage);
    }

    readdir(filePath, (err, files) => {
        if (err) throw err;

        console.log(files);
      });
};

await list(urlFolderToPrint);
