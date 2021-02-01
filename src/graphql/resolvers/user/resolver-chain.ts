/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-31 16:22:25
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-02-01 22:39:21
 * @Description: Resolver chains related to User
 */

import { IResolvers } from 'apollo-server';
import { IBooking, IEvent, IUser } from '../../../interfaces';

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

const userBookings = {
	bookings: async (parent: IUser): Promise<Array<IBooking>> => {
		await parent
			.populate({
				path: 'bookings',
			})
			.execPopulate();

		return parent.bookings;
	},
};

// Provide information related to all events of a user
const userResolverChain: IResolvers = {
	User: { ...userEvents, ...userBookings },
	LoginResponse: { ...userEvents, ...userBookings },
};

export { userResolverChain };
