/*
 * @Author: Ishaan Ohri
 * @Date: 2021-02-01 20:38:42
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-02-01 22:45:32
 * @Description: Resolver chains related to Event
 */

// Provide information related to creator of an event
import { IResolvers } from 'apollo-server';
import { IBooking, IEvent, IUser } from '../../../interfaces';
import { Event, User } from '../../../models';

const bookingUser = {
	user: async (parent: IBooking): Promise<IUser | null> => {
		const user: IUser | null = await User.findById(parent.user);

		return user;
	},
};

const bookingEvent = {
	event: async (parent: IBooking): Promise<IEvent | null> => {
		const event: IEvent | null = await Event.findById(parent.event);

		return event;
	},
};

const bookingResolverChain: IResolvers = {
	Booking: { ...bookingUser, ...bookingEvent },
};

export { bookingResolverChain };
