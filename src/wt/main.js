import { Worker } from 'worker_threads';
import os from 'os';

const URL_FILE = './worker.js';
const MIN_NUMBER = 10;
const STATUS_RESOLVED = 'resolved';
const STATUS_ERROR = 'error';

const createPromiseWorker = (filePath, n) => {
    const workerPromise = new Promise((resolve) => {
        const worker = new Worker(filePath, {
            workerData: n,
        }); 

        worker.on('message', (data) => resolve({ status: STATUS_RESOLVED, data }));
        worker.on('error', () => resolve({ status: STATUS_ERROR, data: null }));
    });

    return workerPromise;
};

const performCalculations = async (URL_FILE) => {
    const filePath = new URL(URL_FILE, import.meta.url);
    const countWorkers = os.cpus().length;
    const allPromises = [];

    for(let n = MIN_NUMBER; n < MIN_NUMBER + countWorkers; n++) {
        const workerPromise = createPromiseWorker(filePath, n);

        allPromises.push(workerPromise);
    }

    const result = await Promise.all(allPromises);
    
    console.log(result);
};

await performCalculations(URL_FILE);
