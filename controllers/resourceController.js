
const getResource = (req, res) => {
    res.status(200).send('Public resource, you can see this');
};

const getPrivateResource = (req, res) => {
    res.status(200).send('Secret resource, you should be logged in see this');
};

export { getResource, getPrivateResource };