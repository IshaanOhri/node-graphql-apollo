/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:41:30
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 13:00:54
 * @Description: All mutations for graphql schema
 */

import { gql } from 'apollo-server';

const mutationSchema = gql`
	type Mutation {
		# Enter mutation here
		signUp(signUpInput: SignUpInput!): User!
	}
`;

export { mutationSchema };
