/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 01:15:59
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 01:16:22
 * @Description: Indexing file for graphql schema
 */
import { gql } from 'apollo-server';

const typeDefs = gql`
	# A book has a title and an author
	type Book {
		title: String
		author: Author
	}

	# An author has a name and a list of books
	type Author {
		name: String
		books: [Book]
	}

	type Query {
		books: Book
	}
`;

export { typeDefs };
