exports.up = function( knex, Promise ) {
  return knex.schema.createTable( 'applications', function( table ) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.integer( 'contacts_id' ).notNullable()
    table.boolean( 'active' ).notNullable().defaultTo( true )
    table.dateTime( 'move_in_date', 255 ).notNullable().defaultTo( knex.raw( 'now()' ) )
    table.string( 'current_city', 255 ).notNullable().defaultTo( '' )
    table.string( 'current_state', 255 ).notNullable().defaultTo( '' )
    table.string( 'student', 255 ).notNullable().defaultTo( '' )
    table.integer( 'children' ).notNullable().defaultTo( 0 )
    table.string( 'pronouns', 25 ).notNullable().defaultTo( '' )
    table.boolean( 'wait_list' ).notNullable().defaultTo( true )
    table.boolean( 'vehicle' ).notNullable().defaultTo( true )
    table.json( 'bhc_questions' )
    table.json( 'house_questions' )
    table.timestamps( true, true )
    // OR
    // table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    // table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  } )
}
exports.down = function( knex, Promise ) {
  return knex.schema.dropTableIfExists( 'applications' )
}
