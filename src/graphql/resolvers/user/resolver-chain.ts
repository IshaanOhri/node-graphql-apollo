/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-31 16:22:25
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 23:21:20
 * @Description: Resolver chains related to User
 */

import { IResolvers } from 'apollo-server';
import { IUser } from '../../../interfaces';

// Provide information related to all events of a user
const userResolverChain: IResolvers = {
	User: {
		events: async (parent: IUser) => {
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
