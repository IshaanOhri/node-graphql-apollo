/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 21:01:37
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-02-01 22:32:18
 * @Description: Definition of Event Interface
 */

import { Document, Model, Schema } from 'mongoose';
import { IBooking } from './IBooking';

interface IEvent extends Document {
	title: string;
	description: string;
	price: number;
	date: string;
	creator: Schema.Types.ObjectId;
	bookings: [IBooking];
}

interface IEventModel extends Model<IEvent> {
	checkEventExists(eventId: string): Promise<boolean>;
}

export { IEvent, IEventModel };
