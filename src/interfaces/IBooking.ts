/*
 * @Author: Ishaan Ohri
 * @Date: 2021-02-01 20:10:34
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-02-01 23:56:10
 * @Description: Definition of Booking Interface
 */

import { Document, Model, Schema } from 'mongoose';

interface IBooking extends Document {
	bookingId: String;
	event: Schema.Types.ObjectId;
	user: Schema.Types.ObjectId;
}

interface IBookingModel extends Model<IBooking> {
	checkBookingExists(bookingId: string): Promise<boolean>;
}

export { IBooking, IBookingModel };
