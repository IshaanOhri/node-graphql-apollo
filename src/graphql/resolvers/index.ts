/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 01:16:32
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 20:01:20
 * @Description: Indexing file for graphql resolvers
 */

import { eventMutation } from './event/mutation';
import { userMutation } from './user/mutation';
import { userQuery } from './user/query';

const resolvers = {
	Mutation: {
		...userMutation,
		...eventMutation,
	},
	Query: {
		...userQuery,
	},
};

export { resolvers };
