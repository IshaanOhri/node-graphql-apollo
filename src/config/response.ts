/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-29 23:21:26
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 14:04:00
 * @Description: Exports all response codes and response messages
 */

const status = {
	ok: 200,
	created: 201,
	badRequest: 400,
	unauthorized: 401,
	forbidden: 403,
	notFound: 404,
	serverError: 500,
};

const message = {
	homeRoute: 'Hello World. Welcome to NodeJS Apollo Server!',
	healthRoute: 'Node.js backend running successfully!',
	notFound: 'The requested route does not exist.',
	serverError: 'An internal server error occurred. Please try again.',
	emailExists: 'The entered email id already exists.',
};

export { status, message };
