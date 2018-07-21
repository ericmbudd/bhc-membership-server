exports.seed = function( knex, Promise ) {
  // Deletes ALL existing entries
  return knex( 'applications_houses' ).del().then( function() {
    // Inserts seed entries
    return knex( 'applications_houses' ).insert( [
      {
        applications_id: 1,
        houses_id: 1,
        state: "fail"
      },
      {
        applications_id: 2,
        houses_id: 1,
        state: "visit"
      },
      {
        applications_id: 3,
        houses_id: 1,
        state: "references"
      },
      {
        applications_id: 4,
        houses_id: 1,
        state: "interview"
      },
      {
        applications_id: 5,
        houses_id: 1,
        state: "accepted"
      },
    ] );
  } );
};
