const { User, Station } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      //args = body, context = params
      if (context.user) {
        const user = await User.findById(context.user._id).populate(
          "favStations"
        );

        return user;
      }

      throw AuthenticationError;
    },
    users: async () => {
      return await User.find().populate("favStations");
    },
    stations: async (parent, { city }) => {
      const query = city ? { city } : {};
      return await Station.find(query);
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },

    updateFavStation: async (parent, { stationId }, context) => {
      console.log("User", context.user, "station Id", stationId);
      if (context.user) {
        return User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { favStations: stationId },
          },
          { new: true }
        ).populate("favStations");
      }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }
      console.log("User found:", user);
      const correctPw = await user.isCorrectPassword(password);
      console.log("Correct Password:", correctPw);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
