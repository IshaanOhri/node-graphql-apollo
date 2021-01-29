/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-29 23:22:48
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-29 23:32:10
 * @Description: Main driver file for the server
 */

import express from 'express';
import { HOST, PORT } from './config';
import logger from './log/config';

const app = express();

app.listen(PORT, HOST, () => {
	logger.info(`🚀 Server running on http://${HOST}:${PORT} 🚀`);
});
