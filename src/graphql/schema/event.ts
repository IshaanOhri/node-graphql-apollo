/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:42:56
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 20:02:19
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
	}

	input EventInput {
		title: String!
		description: String!
		price: Float!
		date: String!
	}
`;

export { eventSchema };
