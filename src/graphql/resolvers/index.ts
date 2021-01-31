/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 01:16:32
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 16:24:18
 * @Description: Indexing file for graphql resolvers
 */

import { eventMutation } from './event/mutation';
import { eventResolverChain } from './event/resolver-chain';
import { userMutation } from './user/mutation';
import { userQuery } from './user/query';
import { userResolverChain } from './user/resolver-chain';

const resolvers = {
	Mutation: {
		...userMutation,
		...eventMutation,
	},
	Query: {
		...userQuery,
	},
	...eventResolverChain,
	...userResolverChain,
};

export { resolvers };
