let express = require('express');
let knex = require('../knex');

let router = express.Router();

/* GET applications listing. */
const getApplications = (req, res, next) => {
  const { id } = req.params

  if (id) {
    knex('applications')
      .where('applications.id', id)
      .join('applications_contacts', 'applications_contacts.contacts_id', 'applications.id')
      .join('contacts', 'applications_contacts.contacts_id', 'contacts.id')
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
      .join('applications_contacts', 'applications_contacts.contacts_id', 'applications.id')
      .join('contacts', 'applications_contacts.contacts_id', 'contacts.id')
      .where('contacts.type', "applicant")
      .select('*')
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

module.exports = router;
