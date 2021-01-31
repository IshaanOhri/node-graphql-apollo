/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 17:39:43
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 22:49:24
 * @Description: Mutation resolvers for all Event related operations
 */

import { message, status } from '../../../config';
import { HttpError } from '../../../handlers';
import { IEvent } from '../../../interfaces';
import { Event } from '../../../models/Event';

const eventMutation = {
	createEvent: async (
		parent: any,
		{ eventInput: { title, description, price, date } }: any,
		context: any,
		info: any
	) => {
		if (!context.loggedIn) {
			throw new HttpError(status.unauthorized, null, message.unauthorized);
		}

		const event: IEvent = new Event({
			title,
			description,
			price,
			date,
			creator: context.user._id,
		});

		await event.save();

		return event;
	},
};

export { eventMutation };
