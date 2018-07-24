exports.seed = function( knex, Promise ) {
  // Deletes ALL existing entries
  return knex( 'applications' ).del().then( function() {
    // Inserts seed entries
    return knex( 'applications' ).insert( [
      {
        id: 1,
        contacts_id: 1,
        active: true,
        move_in_date: '2018-08-01T00:00:00Z',
        current_city: "Boulder",
        current_state: "CO",
        student: "No",
        children: 0,
        pronouns: "he, him, his",
        birth_date: "1981-10-06",
        wait_list: true,
        vehicle: false,
        bhc_questions: {
          "1": {
            question: "How did you find out about this co-op?",
            answer: "Craigslist"
          },
          "2": {
            question: "What is it about cooperative living that interests you?",
            answer: "I really like people!"
          },
          "3": {
            question: "What skills, abilities, and interests do you have that would contribute to the co-op?",
            answer: "I wrote this mobile application using Javascript and React Native on the Front-end, and an Express Server with a PostGres Database for the back-end"
          }
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
        contacts_id: 5,
        active: true,
        move_in_date: '2018-08-01T00:00:00Z',
        current_city: "Superior",
        current_state: "CO",
        student: "No",
        children: 0,
        pronouns: "he, him, his",
        birth_date: "1981-10-06",
        wait_list: true,
        vehicle: true,
        bhc_questions: {
          "1": {
            question: "How did you find out about this co-op?",
            answer: "Craigslist"
          },
          "2": {
            question: "What is it about cooperative living that interests you?",
            answer: "I really like people!"
          },
          "3": {
            question: "What skills, abilities, and interests do you have that would contribute to the co-op?",
            answer: "I wrote this mobile application using Javascript and React Native on the Front-end, and an Express Server with a PostGres Database for the back-end"
          }
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
        id: 3,
        contacts_id: 9,
        active: true,
        move_in_date: '2018-08-01T00:00:00Z',
        current_city: "Superior",
        current_state: "CO",
        student: "No",
        children: 0,
        pronouns: "he, him, his",
        birth_date: "1981-10-06",
        wait_list: true,
        vehicle: true,
        bhc_questions: {
          "1": {
            question: "How did you find out about this co-op?",
            answer: "Craigslist"
          },
          "2": {
            question: "What is it about cooperative living that interests you?",
            answer: "I really like people!"
          },
          "3": {
            question: "What skills, abilities, and interests do you have that would contribute to the co-op?",
            answer: "I wrote this mobile application using Javascript and React Native on the Front-end, and an Express Server with a PostGres Database for the back-end"
          }
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
        id: 4,
        contacts_id: 10,
        active: true,
        move_in_date: '2018-08-01T00:00:00Z',
        current_city: "Superior",
        current_state: "CO",
        student: "No",
        children: 0,
        pronouns: "he, him, his",
        birth_date: "1981-10-06",
        wait_list: true,
        vehicle: true,
        bhc_questions: {
          "1": {
            question: "How did you find out about this co-op?",
            answer: "Craigslist"
          },
          "2": {
            question: "What is it about cooperative living that interests you?",
            answer: "I really like people!"
          },
          "3": {
            question: "What skills, abilities, and interests do you have that would contribute to the co-op?",
            answer: "I wrote this mobile application using Javascript and React Native on the Front-end, and an Express Server with a PostGres Database for the back-end"
          }
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
        id: 5,
        contacts_id: 11,
        active: true,
        move_in_date: '2018-08-01T00:00:00Z',
        current_city: "Superior",
        current_state: "CO",
        student: "No",
        children: 0,
        pronouns: "he, him, his",
        birth_date: "1981-10-06",
        wait_list: true,
        vehicle: true,
        bhc_questions: {
          "1": {
            question: "How did you find out about this co-op?",
            answer: "Craigslist"
          },
          "2": {
            question: "What is it about cooperative living that interests you?",
            answer: "I really like people!"
          },
          "3": {
            question: "What skills, abilities, and interests do you have that would contribute to the co-op?",
            answer: "I wrote this mobile application using Javascript and React Native on the front-end, and an Express Server with a PostGres Database for the back-end"
          }
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
