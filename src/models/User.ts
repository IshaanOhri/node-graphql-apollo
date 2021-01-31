/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 12:53:34
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 23:23:14
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

userSchema.virtual('events', {
	ref: 'Event',
	localField: '_id',
	foreignField: 'creator',
});

userSchema.set('toObject', { virtuals: true });
// userSchema.set('toJSON', { virtuals: true });

userSchema.statics.checkEmailExists = async (email: string): Promise<boolean> => {
	const user: IUser | null = await User.findOne({ email });

	if (user) {
		return true;
	}
	return false;
};

const User: IUserModel = model<IUser, IUserModel>('User', userSchema);

export { User };
