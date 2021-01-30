/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 12:53:34
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 14:05:07
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

userSchema.statics.checkEmailExists = async (email: string): Promise<void> => {
	const user: IUser | null = await User.findOne({ email });

	if (user) {
		throw new HttpError(status.badRequest, null, message.emailExists);
	}
};

const User: IUserModel = model<IUser, IUserModel>('User', userSchema);

export { User };
