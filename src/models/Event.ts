/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 20:58:22
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 21:03:34
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
	},
	{
		timestamps: true,
	}
);

const Event: IEventModel = model<IEvent, IEventModel>('Event', eventSchema);

export { Event };
