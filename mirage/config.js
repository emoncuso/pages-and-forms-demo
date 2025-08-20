import {
  discoverEmberDataModels,
  // applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer, Response } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models,
    },
    // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

let index = 2;

const users = {
  1: {
    id: 1,
    name: 'alice',
    favoriteColor: '#dd0000',
  },
  2: {
    id: 2,
    name: 'bob',
    favoriteColor: '#0000ee',
  }
}

function routes() {
  this.get('/users', function () {
    return {
      users: Object.values(users),
    }
  });

  this.post('/users', function (_s, request) {
    let { user } = JSON.parse(request.requestBody);
    index += 1;
    
    users[index] = {
      id: index,
      name: user.name,
      favoriteColor: user.favoriteColor,
    }

    return {
      user
    }
  });

  this.get('/users/:id', function (_s, request) {
    let id = request.params.id;

    const user = users[id];

    if (!user) {
      return new Response(404, {}, 'no user with that id')
    }

    return {
      user
    }
  });

  this.put('/users/:id', function (_s, request) {
    let { user } = JSON.parse(request.requestBody);
    
    const id = user.id;

    users[id] = {
      id,
      name: user.name,
      favoriteColor: user.favoriteColor
    }

    return {
      user
    }
  })


}
