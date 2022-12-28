import { createReadStream } from 'fs';

const URL_FILE_TO_READ = './files/fileToRead.txt';

const read = async (urlFileToRead) => {
    const filePath = new URL(urlFileToRead, import.meta.url);
    const fileStream = createReadStream(filePath);

    fileStream.on('readable', () => {
        const data = fileStream.read();

        if (data) {
            console.log(`${data}`);
        }
    });
};

await read(URL_FILE_TO_READ);
