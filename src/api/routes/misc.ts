/*
 * @Author: Ishaan Ohri
 * @Date: 2020-11-29 01:38:51
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2021-01-30 00:56:17
 * @Description: Contains all miscellaneous routes
 */

import { Router } from 'express';
import { health, home } from '../controllers';

const miscRouter: Router = Router();

// @desc	Home Route
// @route	GET /
miscRouter.get('/', home);

// @desc	Health Route
// @route	GET /health
miscRouter.get('/health', health);

export { miscRouter };
