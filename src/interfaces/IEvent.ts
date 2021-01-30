/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 21:01:37
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 21:02:56
 * @Description: Definition of Event Interface
 */

import { Document, Model } from 'mongoose';

interface IEvent extends Document {
	title: string;
	description: string;
	price: number;
	date: string;
}

interface IEventModel extends Model<IEvent> {}

export { IEvent, IEventModel };
