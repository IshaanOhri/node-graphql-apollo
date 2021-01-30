/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 12:26:40
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 15:34:01
 * @Description: Mutation resolvers for all User related operations
 */

import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { IUser } from '../../../interfaces';
import logger from '../../../log/config';
import { User } from '../../../models';
import { catchAsync } from '../../../middleware';
import { HttpError } from '../../../handlers';
import { JWT_SECRET, message, status } from '../../../config';

const userMutation = {
	signUp: async (parent: any, { signUpInput: { name, email, password } }: any, context: any, info: any) => {
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
	login: async (parent: any, { loginInput: { email, password } }: any, context: any, info: any) => {
		const user: IUser | null = await User.findUserByEmail(email);

		if (!user) {
			throw new HttpError(status.badRequest, null, message.emailNotExist);
		}

		const validPassword: boolean = await bcrypt.compare(password, user.password);

		if (!validPassword) {
			throw new HttpError(status.badRequest, null, message.incorrectPassword);
		}

		const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '1h' });

		return { ...user._doc, token };
	},
};

export { userMutation };
