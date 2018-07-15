exports.seed = function( knex, Promise ) {
  // Deletes ALL existing entries
  return knex( 'applications_houses' ).del().then( function() {
    // Inserts seed entries
    return knex( 'applications_houses' ).insert( [
      {
        applications_id: 1,
        houses_id: 1,
        state: "visit"
      }
    ] );
  } );
};