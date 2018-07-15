exports.seed = function( knex, Promise ) {
  // Deletes ALL existing entries
  return knex( 'contacts' ).del().then( function() {
    // Inserts seed entries
    return knex( 'contacts' ).insert( [
      {
        id: 1,
        type: 'applicant',
        first_name: "Eric",
        last_name: "Budd",
        email: "ericbudd@gmail.com",
        phone: "7202951122"
      }
    ] );
  } );
};
