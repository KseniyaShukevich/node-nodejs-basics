import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

const URL_FILE_TO_COMPRESS = './files/fileToCompress.txt';
const URL_FILE_TO_READ = './files/archive.gz';

const compress = async (urlFileToCompress, urlFileToWrite) => {
    const fileToReadPath = new URL(urlFileToCompress, import.meta.url);
    const fileToWritePath = new URL(urlFileToWrite, import.meta.url);
    const fileReadStream = createReadStream(fileToReadPath);
    const fileWriteStream = createWriteStream(fileToWritePath);

    fileReadStream.pipe(zlib.createGzip()).pipe(fileWriteStream);
};

await compress(URL_FILE_TO_COMPRESS, URL_FILE_TO_READ);
