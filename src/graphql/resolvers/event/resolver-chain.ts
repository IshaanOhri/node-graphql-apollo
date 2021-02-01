/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-31 16:22:25
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 20:01:40
 * @Description: Resolver chains related to Event
 */

// Provide information related to creator of an event
import { IResolvers } from 'apollo-server';
import { IEvent, IUser } from '../../../interfaces';
import { User } from '../../../models';

const eventResolverChain: IResolvers = {
	Event: {
		creator: async (parent: IEvent): Promise<IUser | null> => {
			const user: IUser | null = await User.findById(parent.creator);

			return user;
		},
	},
};

export { eventResolverChain };
