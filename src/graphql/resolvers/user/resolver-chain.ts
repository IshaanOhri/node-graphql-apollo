/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-31 16:22:25
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 23:21:20
 * @Description: Resolver chains related to User
 */

import { IResolvers } from 'apollo-server';
import { IEvent, IUser } from '../../../interfaces';

const userEvents = {
	events: async (parent: IUser): Promise<Array<IEvent>> => {
		await parent
			.populate({
				path: 'events',
			})
			.execPopulate();

		return parent.events;
	},
};

// Provide information related to all events of a user
const userResolverChain: IResolvers = {
	User: userEvents,
	LoginResponse: userEvents,
};

export { userResolverChain };
