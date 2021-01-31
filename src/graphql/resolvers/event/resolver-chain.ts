/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-31 16:22:25
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 16:25:06
 * @Description: Resolver chains related to Event
 */

// Provide information related to creator of an event
import { IUser } from '../../../interfaces';
import { User } from '../../../models';

const eventResolverChain = {
	Event: {
		creator: async (parent: any) => {
			const user: IUser | null = await User.findById(parent.creator);

			return user;
		},
	},
};

export { eventResolverChain };
