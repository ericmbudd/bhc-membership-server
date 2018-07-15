exports.seed = function( knex, Promise ) {
  // Deletes ALL existing entries
  return knex( 'applications' ).del().then( function() {
    // Inserts seed entries
    return knex( 'applications' ).insert( [
      {
        id: 1,
        active: true,
        move_in_date: '2018-08-01T00:00:00Z',
        current_city: "Boulder",
        current_state: "CO",
        student: "No",
        children: 0,
        pronouns: "he, him, his",
        wait_list: true,
        vehicle: false,
        bhc_questions: {
          "do you like co-ops?": "Yes"
        },
        house_questions: {
          1: {
            "do you like Ingram co-op?": "Yes"
          },
          2: {
            "do you like Masala co-op?": "Yes"
          }
        }
      },
      {
        id: 2,
        active: true,
        move_in_date: '2018-08-01T00:00:00Z',
        current_city: "Superior",
        current_state: "CO",
        student: "No",
        children: 0,
        pronouns: "he, him, his",
        wait_list: true,
        vehicle: true,
        bhc_questions: {
          "do you like co-ops?": "Yes"
        },
        house_questions: {
          1: {
            "do you like Ingram co-op?": "Yes"
          },
          2: {
            "do you like Masala co-op?": "Yes"
          }
        }
      }
    ] );
  } );
};
