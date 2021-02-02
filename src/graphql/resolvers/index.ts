/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 01:16:32
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-02-02 13:00:41
 * @Description: Indexing file for graphql resolvers
 */

import { IResolvers } from 'apollo-server';
import { bookingQuery } from './booking/query';
import { bookingResolverChain } from './booking/resolver-chain';
import { eventMutation } from './event/mutation';
import { eventQuery } from './event/query';
import { eventResolverChain } from './event/resolver-chain';
import { userMutation } from './user/mutation';
import { userQuery } from './user/query';
import { userResolverChain } from './user/resolver-chain';

const resolvers: IResolvers = {
	Mutation: {
		...userMutation,
		...eventMutation,
	},
	Query: {
		...userQuery,
		...eventQuery,
		...bookingQuery,
	},
	...eventResolverChain,
	...userResolverChain,
	...bookingResolverChain,
};

export { resolvers };
