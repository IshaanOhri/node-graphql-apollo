/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-29 23:22:48
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 00:49:47
 * @Description: Main driver file for the server
 */

import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schema/index';
import logger from './log/config';

import { HOST, PORT } from './config';

const app: Application = express();

const server = new ApolloServer({
	typeDefs,
});

server.applyMiddleware({ app });

// Import routers
app.use('/api/v1', router);

// Not found handler
app.use(notFound);

// All response handlers
app.use(responseHandler);

app.listen(PORT, HOST, () => {
	logger.info(`🚀 Server running on http://${HOST}:${PORT}${server.graphqlPath} 🚀`);
});
