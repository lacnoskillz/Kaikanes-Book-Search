const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      Book: async () => {
        return Book.find({});
      },
      User: async (parent, { _id }) => {
        const params = _id ? { _id } : {};
        return User.findOne(params);
      },
    },
    Mutation: {
      createUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(User);
  
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No profile with this email found!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(user);
        return { token, user };
      },
  
      saveBook: async (parent, { User_Id, book }) => {
        return User.findOneAndUpdate(
          { _id: User_Id },
          {
            $addToSet: { savedBook: book },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      },
      removeBook: async (parent, { User_Id, book }) => {
        return User.findOneAndUpdate(
          { _id: User_Id },
          { $pull: { savedBook: book } },
          { new: true }
        );
      },
    },
  };
  
  module.exports = resolvers;
  