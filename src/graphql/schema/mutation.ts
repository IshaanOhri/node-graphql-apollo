/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:41:30
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 02:41:50
 * @Description: All mutations for graphql schema
 */

import { gql } from 'apollo-server';

const mutationSchema = gql`
	type Mutation {
		# Enter mutation here
		user: [User!]!
	}
`;

export { mutationSchema };
