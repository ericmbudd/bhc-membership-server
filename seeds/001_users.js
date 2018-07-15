exports.seed = function( knex, Promise ) {
  // Deletes ALL existing entries
  return knex( 'users' ).del().then( function() {
    // Inserts seed entries
    return knex( 'users' ).insert( [
      {
        id: 1,
        name: 'Eric Budd',
        image_url: "https://pbs.twimg.com/profile_images/1246613390/eric_mt_massive_crop2_400x400.png",
        email: "ericbudd@gmail.com"
      }
    ] );
  } );
};
