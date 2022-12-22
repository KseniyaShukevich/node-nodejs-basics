import { readdir } from 'fs';

import { checkExists } from './helpers.js';
import { errorMessage } from './constants.js';

const urlFolderToPrint = 'src/fs/files';

const list = async (urlFolderToPrint) => {
    const isFolderExists = checkExists(urlFolderToPrint);

    if (!isFolderExists) {
        throw new Error(errorMessage);
    }

    readdir(urlFolderToPrint, (err, files) => {
        if (err) throw err;

        console.log(files);
      });
};

await list(urlFolderToPrint);
