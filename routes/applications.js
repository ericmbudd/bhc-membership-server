let express = require('express');
let knex = require('../knex');

let router = express.Router();

/* GET applications listing. */
const getApplications = (req, res, next) => {
  const { id } = req.params

  console.log('req.params', req.params)

  if (id) {
    knex('applications')
      .select('*', 'applications.id')
      .innerJoin('contacts', 'contacts.id', 'applications.contacts_id')
      .where('applications.id', id)
      .select('*')
      .first()
      .then(application => {
        res.status(200)
          .send(application)
      })
      .catch(err => {
        next(err)
      })
  } else {
    knex('applications')
      .select('*', 'applications.id')
      .innerJoin('contacts', 'contacts.id', 'applications.contacts_id')
      .then(applications => {
        res.status(200)
          .send(applications)
      })
      .catch(err => {
        next(err)
      })
  }
}

router.get('/', getApplications)
router.get('/:id', getApplications)

module.exports = router;
