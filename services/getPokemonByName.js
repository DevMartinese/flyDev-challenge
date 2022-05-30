const axios = require('axios');
const config = require('../config/pokeMS.json');

exports.getPokemonByName = (name) => {
    let url = config.pokeApi;
    let pokemon = axios.get(`${url}/${name}`);
    return pokemon;
};