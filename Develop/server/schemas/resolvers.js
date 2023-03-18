const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      Book: async () => {
        return Book.find({});
      },
      Users: async (parent, { _id }) => {
        const params = _id ? { _id } : {};
        return User.find(params);
      },
    },
    Mutation: {
   
    },
  };
  
  module.exports = resolvers;
  