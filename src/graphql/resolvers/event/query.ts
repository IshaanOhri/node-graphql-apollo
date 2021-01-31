/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-31 19:56:53
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 20:40:04
 * @Description: Query resolvers for all Event related operations
 */

import { message, status } from '../../../config';
import { HttpError } from '../../../handlers';
import { IEvent, IUser } from '../../../interfaces';
import { Event } from '../../../models/Event';

const eventQuery = {
	myEvents: async (parent: any, args: any, context: any, info: any) => {
		if (!context.loggedIn) {
			throw new HttpError(status.unauthorized, null, message.unauthorized);
		}

		const { user }: { user: IUser } = context;

		await user
			.populate({
				path: 'events',
			})
			.execPopulate();

		return user.events;
	},
	allEvents: async (parent: any, args: any, context: any, info: any) => {
		if (!context.loggedIn) {
			throw new HttpError(status.unauthorized, null, message.unauthorized);
		}

		const events: IEvent[] = await Event.find();

		return events;
	},
	event: async (parent: any, { eventId }: any, context: any, info: any) => {
		if (!context.loggedIn) {
			throw new HttpError(status.unauthorized, null, message.unauthorized);
		}

		const event: IEvent | null = await Event.findById(eventId);

		if (!event) {
			throw new HttpError(status.badRequest, null, message.noEvent);
		}

		return event;
	},
};

export { eventQuery };
