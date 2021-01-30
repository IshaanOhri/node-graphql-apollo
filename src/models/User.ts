/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 12:53:34
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 16:21:50
 * @Description: Definition of the MongoDB User Model
 */

import { Schema, model } from 'mongoose';
import { message, status } from '../config';
import { HttpError } from '../handlers';
import { IUser, IUserModel } from '../interfaces';

const userSchema: Schema<IUser, IUserModel> = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.statics.checkEmailExists = async (email: string): Promise<boolean> => {
	const user: IUser | null = await User.findOne({ email });

	if (user) {
		return true;
	}
	return false;
};

userSchema.statics.findUserByEmail = async (email: string): Promise<IUser | null> => {
	const user: IUser | null = await User.findOne({ email });

	return user;
};

userSchema.statics.findAllUsers = async (): Promise<IUser[]> => {
	const user: IUser[] = await User.find();

	return user;
};

const User: IUserModel = model<IUser, IUserModel>('User', userSchema);

export { User };
