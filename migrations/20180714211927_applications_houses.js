exports.up = function( knex, Promise ) {
  return knex.schema.createTable( 'applications_houses', function( table ) {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer( 'applications_id' ).notNullable().references( 'applications.id' ).onDelete( 'CASCADE' );
    table.integer( 'houses_id' ).notNullable().references( 'houses.id' ).onDelete( 'CASCADE' );
    table.string( 'state', 255 ).notNullable().defaultTo( '' )
    //table.timestamps(true, true)
    // OR
    table.dateTime( 'created_at' ).notNullable().defaultTo( knex.raw( 'now()' ) )
    table.dateTime( 'updated_at' ).notNullable().defaultTo( knex.raw( 'now()' ) )
  } )
}
exports.down = function( knex, Promise ) {
  return knex.schema.dropTableIfExists( 'applications_houses' )
}
