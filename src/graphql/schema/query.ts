/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:41:59
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 23:19:17
 * @Description: All queries for graphql schema
 */

import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

const querySchema: DocumentNode = gql`
	type Query {
		# User Queries
		users: [User!]!

		# Event Queries
		myEvents: [Event!]!
		allEvents: [Event!]!
		event(eventId: String!): Event!
	}
`;

export { querySchema };
