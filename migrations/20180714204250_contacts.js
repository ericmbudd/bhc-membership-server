exports.up = function( knex, Promise ) {
  return knex.schema.createTable( 'contacts', function( table ) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string( 'type', 255 ).notNullable().defaultTo( '' )
    table.string( 'first_name', 255 ).notNullable().defaultTo( '' )
    table.string( 'last_name', 255 ).notNullable().defaultTo( '' )
    table.string( 'email', 255 ).notNullable().defaultTo( '' )
    table.string( 'phone', 10 ).notNullable().defaultTo( '' )
    table.timestamps( true, true )
    // OR
    // table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    // table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  } )
}
exports.down = function( knex, Promise ) {
  return knex.schema.dropTableIfExists( 'contacts' )
}
