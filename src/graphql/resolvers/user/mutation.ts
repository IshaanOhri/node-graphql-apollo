/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 12:26:40
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 20:27:51
 * @Description: Mutation resolvers for all User related operations
 */

import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { IUser } from '../../../interfaces';
import { User } from '../../../models';
import { HttpError } from '../../../handlers';
import { JWT_SECRET, message, status } from '../../../config';

const userMutation = {
	signUp: async (
		parent: any,
		{ signUpInput: { name, email, password } }: { signUpInput: { name: string; email: string; password: string } },
		context: any,
		info: any
	): Promise<IUser> => {
		const check: boolean = await User.checkEmailExists(email);

		if (check) {
			throw new HttpError(status.badRequest, null, message.emailExists);
		}

		const hashedPassword: string = await bcrypt.hash(password, 12);

		const user: IUser = new User({
			name,
			email,
			password: hashedPassword,
		});

		await user.save();

		return user;
	},
	login: async (
		parent: any,
		{ loginInput: { email, password } }: { loginInput: { email: string; password: string } },
		context: any,
		info: any
	): Promise<IUser> => {
		const user: IUser | null = await User.findOne({ email });

		if (!user) {
			throw new HttpError(status.badRequest, null, message.emailNotExist);
		}

		const validPassword: boolean = await bcrypt.compare(password, user.password);

		if (!validPassword) {
			throw new HttpError(status.badRequest, null, message.incorrectPassword);
		}

		const token: string = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '1h' });

		user.token = token;

		return user;
	},
};

export { userMutation };
