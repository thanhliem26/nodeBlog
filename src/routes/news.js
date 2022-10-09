import express from 'express';
const router = express.Router();
import newController from '../app/controlleres/NewControlleres';

router.use('/', newController.index)

module.exports = router;

