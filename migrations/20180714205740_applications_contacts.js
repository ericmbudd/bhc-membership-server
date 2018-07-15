exports.up = function( knex, Promise ) {
  return knex.schema.createTable( 'applications_contacts', function( table ) {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer( 'applications_id' ).notNullable().references( 'applications.id' ).onDelete( 'CASCADE' );
    table.integer( 'contacts_id' ).notNullable().references( 'contacts.id' ).onDelete( 'CASCADE' );
    //table.timestamps(true, true)
    // OR
    table.dateTime( 'created_at' ).notNullable().defaultTo( knex.raw( 'now()' ) )
    table.dateTime( 'updated_at' ).notNullable().defaultTo( knex.raw( 'now()' ) )
  } )
}
exports.down = function( knex, Promise ) {
  return knex.schema.dropTableIfExists( 'applications_contacts' )
}
