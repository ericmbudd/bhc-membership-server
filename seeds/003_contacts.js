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
      },
      {
        id: 2,
        type: 'rental',
        first_name: "Renty",
        last_name: "Budd",
        email: "eric@ericmbudd.com",
        phone: "7202951122"
      },
      {
        id: 3,
        type: 'personal',
        first_name: "Peronsal1",
        last_name: "Budd",
        email: "eric@electericbudd.org",
        phone: "7202951122"
      }, 
      {
        id: 4,
        type: 'personal',
        first_name: "Peronsal2",
        last_name: "Budd",
        email: "eric@electericbudd.org",
        phone: "7202951122"
      }
    ] );
  } );
};
