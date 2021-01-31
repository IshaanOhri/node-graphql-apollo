/*
 * @Author: Ishaan Ohri
 * @Date: 2021-01-30 01:15:59
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-31 23:19:55
 * @Description: Indexing file for graphql schema
 */

import { DocumentNode } from 'graphql';
import { bookingSchema } from './booking';
import { eventSchema } from './event';
import { mutationSchema } from './mutation';
import { querySchema } from './query';
import { userSchema } from './user';

const typeDefs: Array<DocumentNode> = [userSchema, eventSchema, bookingSchema, querySchema, mutationSchema];

export { typeDefs };
