/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:41:30
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 22:38:37
 * @Description: All mutations for graphql schema
 */

import { gql } from 'apollo-server';

const mutationSchema = gql`
	type Mutation {
		# User Mutations
		signUp(signUpInput: SignUpInput!): User!
		login(loginInput: LoginInput!): LoginResponse!

		# Event Mutations
		createEvent(eventInput: EventInput): Event!
	}
`;

export { mutationSchema };
