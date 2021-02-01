/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:42:56
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-02-01 22:29:34
 * @Description: Definition of Event for graphql schema
 */

import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

const eventSchema: DocumentNode = gql`
	type Event {
		_id: ID!
		title: String!
		description: String!
		price: Float!
		date: String!
		creator: User!
		bookings: [Booking!]!
	}

	input EventInput {
		title: String!
		description: String!
		price: Float!
		date: String!
	}
`;

export { eventSchema };
