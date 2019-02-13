const Router = require('koa-router');
const axios = require('axios');

const router = new Router();

const API_DOG = 'https://dog.ceo/api/breeds/image/random';
const API_CAT = 'https://aws.random.cat/meow';
const API_FOX = 'https://randomfox.ca/floof/';

const getDog = async () => {
    const response = await axios.get(API_DOG);
    return response.data.message;
};

const getCat = async () => {
    const response = await axios.get(API_CAT);
    return response.data.file;
};

const getFox = async () => {
    const response = await axios.get(API_FOX);
    return response.data.image;
};

const getAnimals = async () => {
    const result = await Promise.all([
        getDog(),
        getCat(),
        getFox(),
    ]);

    return [
        {
            name: 'Dog',
            img: result[0],
        },
        {
            name: 'Cat',
            img: result[1],
        },
        {
            name: 'Fox',
            img: result[2],
        },
    ];
};

router.get('/animals', async (ctx) => {
    ctx.body = await getAnimals();
});

module.exports = router.routes();
