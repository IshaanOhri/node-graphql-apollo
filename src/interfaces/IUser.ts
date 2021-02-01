/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 12:59:53
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 20:01:22
 * @Description: Definition of User Interface
 */

import { Document, Model } from 'mongoose';
import { IEvent } from './IEvent';

interface IUser extends Document {
	_doc: any;
	name: string;
	email: string;
	password: string;
	events: [IEvent];
	token: string;
}

interface IUserModel extends Model<IUser> {
	checkEmailExists(email: string): Promise<boolean>;
	findUserByEmail(email: string): Promise<IUser | null>;
	findAllUsers(): Promise<IUser[]>;
}

export { IUser, IUserModel };
