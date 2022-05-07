const User = require('../models');


const resolvers = {
    // Query: {
    //     me: async (parent, args, context) => {
    //         if (context.user) {
    //             const userData = await User.findOne({ _id: context.user._id })
    //             .select('-__v -password');
    //         }
    //     }
    // }

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOneJ({ email });
            // check if user exists with email and credentials
            if (!user) {
                throw new AuthenticationError("Incorrect credentials");
            }
            const correctPassword = await user.isCorrectPassword(password);

            // check password
            if (!correctPassword) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        placeOrder: async (parent, { input }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { orderHistory: input } },
                    { new: true, runValidators: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError("You need too be logged in!");
        },
        removeOrder: async (parent, { bookId }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { orderHistory: { foodId: foodId } } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
    },
};

module.exports = resolvers;