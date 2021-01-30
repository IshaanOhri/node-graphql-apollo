/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 17:39:43
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 19:49:46
 * @Description: Mutation resolvers for all Event related operations
 */

const eventMutation = {
	createEvent: async (
		parent: any,
		{ eventInput: { title, description, price, date } }: any,
		context: any,
		info: any
	) => {
		console.log(title, description, price, date);

		return new Date();
	},
};

export { eventMutation };
