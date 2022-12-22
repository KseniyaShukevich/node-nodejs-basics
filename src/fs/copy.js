import { cp } from 'fs';

import { checkExists } from './helpers.js';
import { errorMessage } from './constants.js';

const urlOriginFolder = 'src/fs/files';
const urlCopyFolder = 'src/fs/files_copy';

const copy = async (urlOriginFolder, urlCopyFolder) => {
    const isOriginFolderExists = await checkExists(urlOriginFolder);
    const isCopyFolderExists = await checkExists(urlCopyFolder);

    if (!isOriginFolderExists || isCopyFolderExists) {
        throw new Error(errorMessage)
    }

    cp(urlOriginFolder, urlCopyFolder, { recursive: true }, (err) => {
        if (err) throw err;
    });
};

copy(urlOriginFolder, urlCopyFolder);