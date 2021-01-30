/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 16:16:01
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 22:41:31
 * @Description: Query resolvers for all User related operations
 */

import { message, status } from '../../../config';
import { HttpError } from '../../../handlers';
import { IUser } from '../../../interfaces';
import { User } from '../../../models';

const userQuery = {
	users: async (parent: any, args: any, context: any, info: any) => {
		if (!context.loggedIn) {
			throw new HttpError(status.unauthorized, null, message.unauthorized);
		}

		const user: IUser[] = await User.findAllUsers();

		return user;
	},
};

export { userQuery };
