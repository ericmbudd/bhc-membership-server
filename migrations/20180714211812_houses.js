exports.up = function( knex, Promise ) {
  return knex.schema.createTable( 'houses', function( table ) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string( 'name', 255 ).notNullable().defaultTo( '' )
    table.integer( 'income_cap', 255 ).notNullable().defaultTo( 0 )
    table.string( 'email', 255 ).notNullable().defaultTo( '' )
    table.timestamps( true, true )
    // OR
    // table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    // table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  } )
}
exports.down = function( knex, Promise ) {
  return knex.schema.dropTableIfExists( 'houses' )
}
