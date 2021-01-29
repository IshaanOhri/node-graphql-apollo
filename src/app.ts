/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-29 23:22:48
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 02:30:54
 * @Description: Main driver file for the server
 */

import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schema/index';
import logger from './log/config';
import { HOST, PORT } from './config';
import { router } from './api/routes';
import { notFound, responseHandler } from './middleware';

// Initializing Express App
const app: Application = express();

// Connect to Database
require('./database/database');

// Initializing Apollo Server
const server = new ApolloServer({
	typeDefs,
});

// Apple Express App as middleware to Apollo Server
server.applyMiddleware({ app });

// Import routers
app.use('/api/v1', router);

// Not found handler
app.use(notFound);

// All response handlers
app.use(responseHandler);

// Start Express App
app.listen(PORT, HOST, () => {
	logger.info(`🚀 Server running on http://${HOST}:${PORT}${server.graphqlPath} 🚀`);
});
