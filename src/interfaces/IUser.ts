/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 12:59:53
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 16:21:33
 * @Description: Definition of User Interface
 */

import { Document, Model } from 'mongoose';

interface IUser extends Document {
	_doc: any;
	name: string;
	email: string;
	password: string;
}

interface IUserModel extends Model<IUser> {
	checkEmailExists(email: string): Promise<boolean>;
	findUserByEmail(email: string): Promise<IUser | null>;
	findAllUsers(): Promise<IUser[]>;
}

export { IUser, IUserModel };
