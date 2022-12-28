import { fork } from 'child_process';

const URL_FILE_CHILD_PROCESS = './files/script.js';

const spawnChildProcess = async (urlFileChildProcess, args) => {
    const filePathChildProcess = new URL(urlFileChildProcess, import.meta.url);
    const childProcess = fork(filePathChildProcess, args, { silent: true });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(URL_FILE_CHILD_PROCESS);
