
    const axios = require('axios');
    const Dev = require('../models/Dev'); 
    const ParseStringAsArray = require('../utils/ParseStringAsArray');
    const { findConnections, sendMessage } = require('../websocket');

//controllers(index, store, show, update, destroy)

    module.exports = {
      async index (request, response){
        const devs = await Dev.find();

        return response.json(devs)
      },
    
      async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({github_username});

        if(!dev){
    
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
        const { name = login, avatar_url, bio } = apiResponse.data;
    
        const techArray = ParseStringAsArray(techs);
    
        const location = {
          type: 'Point',
          coordinates: [ longitude, latitude ],
        };
    
          dev = await Dev.create({
          github_username,
          name,
          avatar_url,
          bio,
          techs: techArray,
          location,
        })

        const sendSocketMessageTo = findConnections(
          {latitude, longitude},
          techsArray,
        )
        sendMessage(sendSocketMessageTo, 'new-dev', dev);
      } 
    
        return response.json(dev);
      }
    };
