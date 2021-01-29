/*
 * @Author: Ishaan Ohri
 * @Date: 2020-12-09 14:27:02
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 01:04:38
 * @Description: Definition for the Metadata interface used in HTTP Response
 */
export interface Metadata {
	success: boolean;
	status: number;
	message: string;
	timestamp: string;
}
