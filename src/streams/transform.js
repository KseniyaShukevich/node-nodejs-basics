import { Transform } from 'stream';

const reverseString = (str) => {
    const reversedString = str.split('').reverse().join('');

    return reversedString;
};

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, reverseString(chunk.toString()));
        },
      });

    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
