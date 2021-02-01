/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 20:58:22
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-02-01 22:34:00
 * @Description: Definition of the MongoDB Event Model
 */

import { model, Schema } from 'mongoose';
import { IEvent, IEventModel } from '../interfaces';

const eventSchema: Schema<IEvent, IEventModel> = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		price: {
			type: Number,
			required: true,
		},
		date: {
			type: String,
			required: true,
			trim: true,
		},
		creator: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
);

eventSchema.virtual('bookings', {
	ref: 'Booking',
	localField: '_id',
	foreignField: 'event',
});

eventSchema.set('toObject', { virtuals: true });
// userSchema.set('toJSON', { virtuals: true });

eventSchema.statics.checkEventExists = async (eventId: string): Promise<boolean> => {
	const event: IEvent | null = await Event.findById(eventId);

	if (event) {
		return true;
	}
	return false;
};

const Event: IEventModel = model<IEvent, IEventModel>('Event', eventSchema);

export { Event };
