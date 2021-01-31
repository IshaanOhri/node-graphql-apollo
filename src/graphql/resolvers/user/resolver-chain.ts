/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-31 16:22:25
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 16:24:59
 * @Description: Resolver chains related to User
 */

// Provide information related to all events of a user
const userResolverChain = {
	User: {
		events: async (parent: any) => {
			await parent
				.populate({
					path: 'events',
				})
				.execPopulate();

			return parent.events;
		},
	},
};

export { userResolverChain };
