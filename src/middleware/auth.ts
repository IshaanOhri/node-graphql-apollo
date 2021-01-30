/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 22:35:37
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 22:38:09
 * @Description: Auth middleware for context in Apollo Server
 */

import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
import { User } from '../models';

const context = async ({ req }: any) => {
	try {
		const authHeader: string = req.header('Authorization');
		const token: string = authHeader.replace('Bearer ', '');

		const decoded: any = jwt.verify(token, JWT_SECRET);

		const user = await User.findById({ _id: decoded._id });

		if (!user) {
			// throw new HttpError(status.unauthorized, null, message.unauthorized);
			return { loggedIn: false };
		}

		return { loggedIn: true, user };
	} catch (err) {
		// throw new HttpError(status.unauthorized, null, message.unauthorized);
		// throw new AuthenticationError('you must be logged in');
		return { loggedIn: false };
	}
};

export { context };
