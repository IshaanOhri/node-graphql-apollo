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
