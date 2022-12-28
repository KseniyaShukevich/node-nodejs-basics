import { cp } from 'fs';

import { checkExists } from './helpers.js';
import { ERROR_MESSAGE } from './constants.js';

const URL_ORIGIN_FOLDER = './files';
const URL_COPY_FOLDER = './files_copy';

const copy = async (urlOriginFolder, urlCopyFolder) => {
    const originFilePath = new URL(urlOriginFolder, import.meta.url);
    const copyFilePath = new URL(urlCopyFolder, import.meta.url);
    const isOriginFolderExists = await checkExists(originFilePath);
    const isCopyFolderExists = await checkExists(copyFilePath);

    if (!isOriginFolderExists || isCopyFolderExists) {
        throw new Error(ERROR_MESSAGE)
    }

    cp(originFilePath, copyFilePath, { recursive: true }, (err) => {
        if (err) throw err;
    });
};

copy(URL_ORIGIN_FOLDER, URL_COPY_FOLDER);