import { createReadStream } from 'fs';

const urlFileToRead = './files/fileToRead.txt';

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

await read(urlFileToRead);
