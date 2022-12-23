import { createWriteStream } from 'fs';

const urlFileToWrite = './files/fileToWrite.txt';

const write = async (urlFileToWrite) => {
    const filePathToWrite = new URL(urlFileToWrite, import.meta.url);
    const fileWriteStream = createWriteStream(filePathToWrite, {
        flags: 'a',
      });

    process.stdin.pipe(fileWriteStream);
};

await write(urlFileToWrite);
