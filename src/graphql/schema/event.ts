/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:42:56
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 02:42:56
 * @Description: Definition of Event for graphql schema
 */

import { gql } from 'apollo-server';

const eventSchema = gql`
	type Event {
		# Enter event here
		name: String!
	}
`;

export { eventSchema };
