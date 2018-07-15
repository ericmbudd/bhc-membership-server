exports.seed = function( knex, Promise ) {
  // Deletes ALL existing entries
  return knex( 'applications_contacts' ).del().then( function() {
    // Inserts seed entries
    return knex( 'applications_contacts' ).insert( [
      {
        applications_id: 1,
        contacts_id: 1,
        last_contact: "2018-07-01T00:00:00Z"
      }
    ] );
  } );
};
