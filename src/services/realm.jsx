import Realm from 'realm';

class FavouritesSchema extends Realm.Object { }

FavouritesSchema.schema = {
  name: 'FavouritesSchema',
  properties: {
    restaurentId: 'string',
    name: 'string?',
  },
  primaryKey: 'restaurentId',
};

export default new Realm({ schema: [FavouritesSchema] });
