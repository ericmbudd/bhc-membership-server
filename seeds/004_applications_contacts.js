exports.seed = function( knex, Promise ) {
  // Deletes ALL existing entries
  return knex( 'applications_contacts' ).del().then( function() {
    // Inserts seed entries
    return knex( 'applications_contacts' ).insert( [
      {
        id: 1,
        applications_id: 1,
        contacts_id: 1,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 2,
        applications_id: 1,
        contacts_id: 2,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 3,
        applications_id: 1,
        contacts_id: 3,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 4,
        applications_id: 1,
        contacts_id: 4,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 5,
        applications_id: 2,
        contacts_id: 5,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 6,
        applications_id: 2,
        contacts_id: 6,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 7,
        applications_id: 2,
        contacts_id: 7,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 8,
        applications_id: 2,
        contacts_id: 8,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 9,
        applications_id: 3,
        contacts_id: 5,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 10,
        applications_id: 3,
        contacts_id: 6,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 11,
        applications_id: 3,
        contacts_id: 7,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 12,
        applications_id: 3,
        contacts_id: 8,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 13,
        applications_id: 4,
        contacts_id: 5,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 14,
        applications_id: 4,
        contacts_id: 6,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 15,
        applications_id: 4,
        contacts_id: 7,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 16,
        applications_id: 4,
        contacts_id: 8,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 17,
        applications_id: 5,
        contacts_id: 5,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 18,
        applications_id: 5,
        contacts_id: 6,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 19,
        applications_id: 5,
        contacts_id: 7,
        last_contact: "2018-07-01T00:00:00Z"
      },
      {
        id: 20,
        applications_id: 5,
        contacts_id: 8,
        last_contact: "2018-07-01T00:00:00Z"
      },
    ] );
  } );
};
