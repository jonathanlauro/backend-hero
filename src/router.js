const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/incidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const router = express.Router();

router.post('/session',SessionController.create);

router.get('/ongs', OngController.index);
router.post('/ongs',OngController.create);

router.get('/incidents',IncidentsController.index);
router.post('/incidents',IncidentsController.create);
router.delete('/incidents/:id',IncidentsController.delete);

router.get('/profile',ProfileController.index);

module.exports = router;