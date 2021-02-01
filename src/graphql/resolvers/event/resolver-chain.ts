/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-31 16:22:25
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-02-01 22:41:49
 * @Description: Resolver chains related to Event
 */

// Provide information related to creator of an event
import { IResolvers } from 'apollo-server';
import { IBooking, IEvent, IUser } from '../../../interfaces';
import { User } from '../../../models';

const eventCreator = {
	creator: async (parent: IEvent): Promise<IUser | null> => {
		const user: IUser | null = await User.findById(parent.creator);

		return user;
	},
};

const eventBookings = {
	bookings: async (parent: IEvent): Promise<Array<IBooking>> => {
		await parent
			.populate({
				path: 'bookings',
			})
			.execPopulate();

		return parent.bookings;
	},
};
const eventResolverChain: IResolvers = {
	Event: { ...eventBookings, ...eventCreator },
};

export { eventResolverChain };
