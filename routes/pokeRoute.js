const router = require('express').Router();
const { getPokemons } = require('../controller/pokeController');

router.get('/:name', getPokemons);

module.exports = router;