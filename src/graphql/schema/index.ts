/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 01:15:59
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 20:01:34
 * @Description: Indexing file for graphql schema
 */

import { bookingSchema } from './booking';
import { eventSchema } from './event';
import { mutationSchema } from './mutation';
import { querySchema } from './query';
import { userSchema } from './user';

const typeDefs = [userSchema, eventSchema, bookingSchema, querySchema, mutationSchema];

export { typeDefs };
