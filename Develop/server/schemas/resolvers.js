const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, { _id }) => {
        const params = _id ? { _id } : {};
        return User.findOne(params);
      },
    },
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
  
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
  
      // saveBook: async (parent, {  input }, context) => {
      //   return User.findOneAndUpdate(
      //     { _id: context.user._id },
      //     {
      //       $addToSet: { savedBook: input },
      //     },
      //     {
      //       new: true,
      //       runValidators: true,
      //     }
      //   );
      // },
      saveBook: async (parent, { bookData }, context) => {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            {
                $push: { savedBooks: bookData },
            },
            {
                new: true,
            }
        );
        return updatedUser;
    },
      removeBook: async (parent, { bookId }, context) => {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: {bookId} } },
          { new: true }
        );
      },
    },
  };
  
  module.exports = resolvers;
  