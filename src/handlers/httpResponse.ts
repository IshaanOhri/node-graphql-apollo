/*
 * @Author: Ishaan Ohri
 * @Date: 2020-12-09 14:25:19
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 01:11:20
 * @Description: Contains the HTTP Response Template and HTTP Response Handler
 */
import moment from 'moment';
import { Response } from 'express';
import { Metadata } from '../interfaces';

/*
  HTTP Response Template
*/

class HttpResponse {
	data: any;

	metadata: Metadata;

	constructor(status: number, data: any, message: string = '') {
		this.data = data;
		this.metadata = {
			success: true,
			status,
			message,
			timestamp: moment().format(),
		};
	}
}

/*
  HTTP Response Handler
*/

const HttpResponseHandler = (httpResponse: HttpResponse, res: Response) => {
	const { data, metadata } = httpResponse;

	res.status(metadata.status).send({ data, metadata });
};

export { HttpResponse, HttpResponseHandler };
