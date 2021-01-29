/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-29 23:18:37
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-29 23:19:18
 * @Description: Configuration file for the log4js logger
 */

import { configure, getLogger } from 'log4js';
import path from 'path';

configure({
	appenders: {
		fileAppender: {
			type: 'file',
			filename: path.join(__dirname, './logs.log'),
		},
		console: {
			type: 'console',
		},
	},
	categories: {
		default: {
			appenders: ['fileAppender', 'console'],
			level: 'info',
		},
	},
});

const logger = getLogger();

export default logger;
