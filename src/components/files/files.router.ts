import { csv2jsonM } from './../../middlewares/csv2json.middleware';
import express from 'express';

import * as constroller from './controllers/index';


const router = express.Router();

router.post('/', csv2jsonM, constroller.saveFileController);

export default router;
