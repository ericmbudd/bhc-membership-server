exports.seed = function( knex, Promise ) {
  // Deletes ALL existing entries
  return knex( 'houses' ).del().then( function() {
    // Inserts seed entries
    return knex( 'houses' ).insert( [
      {
        id: 1,
        name: 'Ingram Co-op',
        income_cap: 38000,
        email: "ingram-mc@boulderhousingcoalition.org"
      }
    ] );
  } );
};
