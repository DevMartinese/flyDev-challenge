const { getPokemonByName } = require('../services/getPokemonByName');

exports.getPokemons = async (req, res) => {
    try {
        const { name } = req.params;
        const response = await getPokemonByName(name);
        res.status(200).json(response.data);
    } catch (error) {
        const { response } = error;
        res.status(404).json({ message: response.statusText });
    }
};