const indexStartArguments = 2;

const parseArgs = () => {
    const argumetns = process.argv.slice(indexStartArguments);

    for (let i = 0; i < argumetns.length; i += 2) {
        console.log(`${argumetns[i]} is ${argumetns[i + 1]}`);
    }
};

parseArgs();
