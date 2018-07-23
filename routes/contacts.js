let express = require('express');
let knex = require('../knex');

let router = express.Router();

/* GET contacts listing. */
const getContacts = (req, res, next) => {
  const { id } = req.params

  console.log('req.params', req.params)

  if (id) {
    knex('contacts')
      .select('*', 'contacts.id')
      .innerJoin('contacts', 'contacts.id', 'contacts.contacts_id')
      .where('contacts.id', id)
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
    //'applications.id AS applications_id',
    knex('applications_contacts')
      .select('applications_contacts.id', 'applications.id AS applications_id', 'contacts.id AS contacts_id',  'contacts.type', 'contacts.first_name', 'contacts.last_name', 'contacts.email', 'contacts.phone')
      .innerJoin('contacts', 'applications_contacts.contacts_id', 'contacts.id')
      .innerJoin('applications', 'applications_contacts.applications_id', 'applications.id')
      .then(contacts => {
        res.status(200)
          .send(contacts)
      })
      .catch(err => {
        next(err)
      })
  }
}

router.get('/', getContacts)
router.get('/:id', getContacts)

module.exports = router;
