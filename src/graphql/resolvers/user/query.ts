/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 16:16:01
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-02-01 23:04:52
 * @Description: Query resolvers for all User related operations
 */

import { message, status } from '../../../config';
import { HttpError } from '../../../handlers';
import { IUser } from '../../../interfaces';
import { User } from '../../../models';

const userQuery = {
	users: async (parent: any, args: any, context: any, info: any): Promise<Array<IUser>> => {
		// if (!context.loggedIn) {
		// 	throw new HttpError(status.unauthorized, null, message.unauthorized);
		// }

		const users: IUser[] = await User.find();

		// await Promise.all(
		// 	user.map(async (single) => {
		// 		await single
		// 			.populate({
		// 				path: 'events',
		// 			})
		// 			.execPopulate();
		// 	})
		// );

		return users;
	},
};

export { userQuery };
