const START_STRING = 'RSS_';

const parseEnv = (startString) => {
    const arrayOfEnvironments = Object.entries(process.env);

    const rssEnvironments = arrayOfEnvironments.filter((item) => {
        const [name, _] = item;

        return name.startsWith(startString)
    });

    rssEnvironments.forEach((item) => {
        const [name, value] = item;

        console.log(`${name}=${value}`);
    })
};

parseEnv(START_STRING);
