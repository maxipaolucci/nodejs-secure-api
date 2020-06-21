
const home = (req, res) => {
    res.status(200).send(`Welcome to node test.`);
};

const status = (req, res) => {
    const localTime = (new Date()).toLocaleDateString();
    res.status(200).send(`Server time is ${localTime}.`);
};

export { home, status};