/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:41:30
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 22:44:23
 * @Description: All mutations for graphql schema
 */

import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

const mutationSchema: DocumentNode = gql`
	type Mutation {
		# User Mutations
		signUp(signUpInput: SignUpInput!): User!
		login(loginInput: LoginInput!): LoginResponse!

		# Event Mutations
		createEvent(eventInput: EventInput): Event!
	}
`;

export { mutationSchema };
