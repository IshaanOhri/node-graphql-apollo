/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 02:43:04
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-02-01 08:15:30
 * @Description: Definition of Booking for graphql schema
 */

import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

const bookingSchema: DocumentNode = gql`
	type Booking {
		# Enter booking here
		name: String!
	}
`;

export { bookingSchema };
