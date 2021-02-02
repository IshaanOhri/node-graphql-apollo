/*
 * @Author: Ishaan Ohri
 * @Date: 2021-02-01 20:07:57
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-02-02 13:10:20
 * @Description: Query resolvers for all Booking related operations
 */

import { ObjectId, Schema, Types } from 'mongoose';
import { message, status } from '../../../config';
import { HttpError } from '../../../handlers';
import { IBooking, IEvent } from '../../../interfaces';
import { Booking, Event } from '../../../models';

const cryptoRandomString = require('crypto-random-string');

const bookingQuery = {
	bookEvent: async (parent: any, { eventId }: { eventId: ObjectId }, context: any, info: any): Promise<IBooking> => {
		if (!context.loggedIn) {
			throw new HttpError(status.unauthorized, null, message.unauthorized);
		}

		const event: IEvent | null = await Event.findById(eventId);

		if (!event) {
			throw new HttpError(status.badRequest, null, message.noEvent);
		}
		// console.log(Types.ObjectId(eventId));

		const oldBooking: IBooking | null = await Booking.findOne({ event: eventId, user: context.user._id });

		if (oldBooking) {
			throw new HttpError(status.badRequest, null, message.alreadyBooked);
		}

		if (String(event.creator) === String(context.user._id)) {
			throw new HttpError(status.badRequest, null, message.alreadyBooked);
		}

		let bookingId: string;
		// eslint-disable-next-line no-constant-condition
		while (true) {
			bookingId = cryptoRandomString({ length: 10, type: 'numeric' });

			// eslint-disable-next-line no-await-in-loop
			const check: boolean = await Booking.checkBookingExists(bookingId);

			if (!check) {
				break;
			}
		}

		const booking: IBooking = new Booking({
			bookingId,
			user: context.user._id,
			event: eventId,
		});

		await booking.save();

		return booking;
	},
};

export { bookingQuery };
