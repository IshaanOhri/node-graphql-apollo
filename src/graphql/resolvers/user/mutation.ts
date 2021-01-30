/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 12:26:40
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 14:29:45
 * @Description: Mutation resolvers for all User related operations
 */

import { IUser } from '../../../interfaces';
import logger from '../../../log/config';
import { User } from '../../../models';
import bcrypt from 'bcrypt';
import { catchAsync } from '../../../middleware';

const userMutation = {
	signUp: async (parent: any, { signUpInput: { name, email, password } }: any, context: any, info: any) => {
		await User.checkEmailExists(email);

		const hashedPassword: string = await bcrypt.hash(password, 12);

		const user: IUser = new User({
			name,
			email,
			password: hashedPassword,
		});

		await user.save();

		return user;
	},
};

export { userMutation };
