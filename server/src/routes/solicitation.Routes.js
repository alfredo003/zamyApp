const express= require('express')
const solicitation = require('./../controllers/solicitation.controller')
const router = express.Router();

router.route('/')
.get(solicitation.getAllSolicitations)
.post(solicitation.registerSolicitation);

router.route('/:id')
.get(solicitation.getSolicitation)

router.route('/:id')
.put(solicitation.AcceptSolicitation)
module.exports = router;