/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 01:16:32
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 16:17:36
 * @Description: Indexing file for graphql resolvers
 */

import { userMutation } from './user/mutation';
import { userQuery } from './user/query';

const resolvers = {
	Mutation: {
		...userMutation,
	},
	Query: {
		...userQuery,
	},
};

export { resolvers };
