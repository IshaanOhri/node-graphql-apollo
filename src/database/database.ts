/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-29 23:20:06
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 02:26:51
 * @Description: Connection to database
 */

import mongoose from 'mongoose';
import { MONGO_DB_URL } from '../config';
import logger from '../log/config';

(async (): Promise<void> => {
	try {
		await mongoose.connect(MONGO_DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});

		logger.info('Database connection successful');
	} catch (error) {
		logger.error(`Database connection failed\n\n${error}`);
	}
})();
