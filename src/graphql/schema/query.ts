/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:41:59
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 15:39:23
 * @Description: All queries for graphql schema
 */

import { gql } from 'apollo-server';

const querySchema = gql`
	type Query {
		users: [User!]!
	}
`;

export { querySchema };
