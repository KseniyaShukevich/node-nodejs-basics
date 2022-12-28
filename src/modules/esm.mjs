import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url'
import './files/c.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const random = Math.random();
const BORDER_NUMBER = 0.5;
const URL_DATA_A = './files/a.json';
const URL_DATA_B = './files/b.json';
const urlData = random > BORDER_NUMBER ? URL_DATA_A : URL_DATA_B;

export const unknownObject = await import(urlData, { assert: { type: 'json' } });

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
