import { Request, Response } from "express";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response) {
  res.send({result: 'is working'})
});

export default router;
