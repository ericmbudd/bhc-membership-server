exports.up = function( knex, Promise ) {
  return knex.schema.createTable( 'users', function( table ) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string( 'name', 255 ).notNullable().defaultTo( '' )
    table.string( 'image_url', 255 ).notNullable().defaultTo( '' )
    table.string( 'email', 255 ).notNullable().defaultTo( '' )
    table.timestamps( true, true )
    // OR
    // table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    // table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  } )
}
exports.down = function( knex, Promise ) {
  return knex.schema.dropTableIfExists( 'users' )
}
