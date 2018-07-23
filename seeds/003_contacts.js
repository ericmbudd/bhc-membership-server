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
        type: 'rental1',
        first_name: "Renty",
        last_name: "Budd",
        email: "eric@ericmbudd.com",
        phone: "7202951122"
      },
      {
        id: 3,
        type: 'personal1',
        first_name: "Personal1",
        last_name: "Budd",
        email: "eric@electericbudd.org",
        phone: "7202951122"
      },
      {
        id: 4,
        type: 'personal2',
        first_name: "Personal2",
        last_name: "Budd",
        email: "eric@electericbudd.org",
        phone: "7202951122"
      },
      {
        id: 5,
        type: 'applicant',
        first_name: "Angie",
        last_name: "Budd",
        email: "angiebudd@gmail.com",
        phone: "3149419370"
      },
      {
        id: 6,
        type: 'rental1',
        first_name: "Renty",
        last_name: "Budd",
        email: "eric@ericmbudd.com",
        phone: "7202951122"
      },
      {
        id: 7,
        type: 'personal1',
        first_name: "Personal1",
        last_name: "Budd",
        email: "eric@electericbudd.org",
        phone: "7202951122"
      },
      {
        id: 8,
        type: 'personal2',
        first_name: "Personal2",
        last_name: "Budd",
        email: "eric@electericbudd.org",
        phone: "7202951122"
      },
    ] );
  } );
};
