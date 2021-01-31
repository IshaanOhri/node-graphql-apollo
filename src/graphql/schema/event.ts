/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:42:56
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 20:39:08
 * @Description: Definition of Event for graphql schema
 */

import { gql } from 'apollo-server';

const eventSchema = gql`
	type Event {
		_id: ID!
		title: String!
		description: String!
		price: Float!
		date: String!
		creator: User!
	}

	input EventInput {
		title: String!
		description: String!
		price: Float!
		date: String!
	}
`;

export { eventSchema };
