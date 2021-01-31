/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:41:59
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 20:39:08
 * @Description: All queries for graphql schema
 */

import { gql } from 'apollo-server';

const querySchema = gql`
	type Query {
		users: [User!]!
		myEvents: [Event!]!
		allEvents: [Event!]!
		event(eventId: String!): Event!
	}
`;

export { querySchema };
