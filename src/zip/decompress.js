import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

const URL_FILE_TO_DECOMPRESS = './files/archive.gz';
const URL_FILE_TO_WRITE = './files/fileToCompress.txt';

const decompress = async (urlFileToDecompress, urlFileToWrite) => {
    const fileToReadPath = new URL(urlFileToDecompress, import.meta.url);
    const fileToWritePath = new URL(urlFileToWrite, import.meta.url);
    const fileReadStream = createReadStream(fileToReadPath);
    const fileWriteStream = createWriteStream(fileToWritePath);

    fileReadStream.pipe(zlib.createGunzip()).pipe(fileWriteStream);
};

await decompress(URL_FILE_TO_DECOMPRESS, URL_FILE_TO_WRITE);
