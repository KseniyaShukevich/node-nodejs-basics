import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

const urlFileToCompress = './files/fileToCompress.txt';
const urlFileToWrite = './files/archive.gz';

const compress = async (urlFileToCompress, urlFileToWrite) => {
    const fileToReadPath = new URL(urlFileToCompress, import.meta.url);
    const fileToWritePath = new URL(urlFileToWrite, import.meta.url);
    const fileReadStream = createReadStream(fileToReadPath);
    const fileWriteStream = createWriteStream(fileToWritePath);

    fileReadStream.pipe(zlib.createGzip()).pipe(fileWriteStream);
};

await compress(urlFileToCompress, urlFileToWrite);
