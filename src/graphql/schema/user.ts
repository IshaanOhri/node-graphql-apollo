/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:42:14
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 17:30:33
 * @Description: Definition of User for graphql schema
 */

import { gql } from 'apollo-server';

const userSchema = gql`
	type User {
		_id: ID!
		name: String!
		email: String!
		password: String!
	}

	type LoginResponse {
		_id: ID!
		name: String!
		email: String!
		password: String!
		token: String!
	}

	input SignUpInput {
		name: String!
		email: String!
		password: String!
	}

	input LoginInput {
		email: String!
		password: String!
	}
`;

export { userSchema };
