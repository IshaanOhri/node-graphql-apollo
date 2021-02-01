/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:42:14
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 01:48:27
 * @Description: Definition of User for graphql schema
 */

import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

const userSchema: DocumentNode = gql`
	type User {
		_id: ID!
		name: String!
		email: String!
		password: String!
		events: [Event!]!
	}

	type LoginResponse {
		_id: ID!
		name: String!
		email: String!
		password: String!
		token: String
		events: [Event!]!
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
