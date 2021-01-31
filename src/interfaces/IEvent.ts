/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 21:01:37
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 20:02:00
 * @Description: Definition of Event Interface
 */

import { Document, Model, Schema } from 'mongoose';

interface IEvent extends Document {
	title: string;
	description: string;
	price: number;
	date: string;
	creator: Schema.Types.ObjectId;
}

interface IEventModel extends Model<IEvent> {}

export { IEvent, IEventModel };
