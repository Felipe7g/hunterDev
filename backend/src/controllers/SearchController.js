const Dev = require('../models/Dev');
const ParseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {
    async index(request, response) {
        const {longitude, latitude, techs } = request.query;
        //busca todos os devs em um raio de  10KM
        //filtrar por tecnologias

        const techArray = ParseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
              $in: techArray,
            },
            location: {
                $near: {
                    $geometry: {
                    type: 'Point',
                    coordinates: [longitude, latitude],
                },
                $maxDistance: 10000,
            },
        },
      });

        return response.json({ devs });
    }
}