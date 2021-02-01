/*
 * @Author: Ishaan Ohri
 * @Date: 2021-02-01 20:13:38
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-02-01 23:56:28
 * @Description: Definition of the MongoDB Event Model
 */

import { model, Schema } from 'mongoose';
import { IBooking, IBookingModel } from '../interfaces';

const bookingSchema: Schema<IBooking, IBookingModel> = new Schema(
	{
		bookingId: {
			type: String,
			required: true,
		},
		event: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Event',
		},
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
);

bookingSchema.statics.checkBookingExists = async (bookingId: string): Promise<boolean> => {
	const booking: IBooking | null = await Booking.findOne({ bookingId });

	if (booking) {
		return true;
	}
	return false;
};

const Booking: IBookingModel = model<IBooking, IBookingModel>('Booking', bookingSchema);

export { Booking };
