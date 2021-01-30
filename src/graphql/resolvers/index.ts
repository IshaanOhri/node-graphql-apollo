/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 01:16:32
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 12:51:24
 * @Description: Indexing file for graphql resolvers
 */

import { userMutation } from './user/mutation';

const resolvers = {
	Mutation: {
		...userMutation,
	},
};

export { resolvers };
