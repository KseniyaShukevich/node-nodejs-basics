import { cp } from 'fs';

import { checkExists } from './helpers.js';
import { errorMessage } from './constants.js';

const urlOriginFolder = './files';
const urlCopyFolder = './files_copy';

const copy = async (urlOriginFolder, urlCopyFolder) => {
    const originFilePath = new URL(urlOriginFolder, import.meta.url);
    const copyFilePath = new URL(urlCopyFolder, import.meta.url);
    const isOriginFolderExists = await checkExists(originFilePath);
    const isCopyFolderExists = await checkExists(copyFilePath);

    if (!isOriginFolderExists || isCopyFolderExists) {
        throw new Error(errorMessage)
    }

    cp(originFilePath, copyFilePath, { recursive: true }, (err) => {
        if (err) throw err;
    });
};

copy(urlOriginFolder, urlCopyFolder);