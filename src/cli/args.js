const INDEX_START_ARGUMENTS = 2;

const parseArgs = () => {
    const argumetns = process.argv.slice(INDEX_START_ARGUMENTS);

    for (let i = 0; i < argumetns.length; i += 2) {
        console.log(`${argumetns[i]} is ${argumetns[i + 1]}`);
    }
};

parseArgs();
