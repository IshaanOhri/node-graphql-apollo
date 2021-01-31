/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 01:16:32
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 19:58:35
 * @Description: Indexing file for graphql resolvers
 */

import { eventMutation } from './event/mutation';
import { eventQuery } from './event/query';
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
		...eventQuery,
	},
	...eventResolverChain,
	...userResolverChain,
};

export { resolvers };
