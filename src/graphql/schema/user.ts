/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:42:14
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 02:42:35
 * @Description: Definition of User for graphql schema
 */

import { gql } from 'apollo-server';

const userSchema = gql`
	type User {
		# Enter user here
		name: String!
	}
`;

export { userSchema };
