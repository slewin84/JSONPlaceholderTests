// JavaScript source code
/// <reference types="Cypress" />

it('Post a new user and test status', function () {
    var result = cy.request('POST', 'https://jsonplaceholder.typicode.com/users', {
        "id": 100,
        "name": "Stephan Lewin",
        "username": "Cypress Newbie",
        "email": "cypress@newbie.com",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "null.org",
        "company": {
            "name": "Testing Business",
            "catchPhrase": "Goodness",
            "bs": "harness real-time e-markets"
        }
    })

   result.its('status').should('equal', 201)    
})

it('Get the new users name', function () {
    cy.request('https://jsonplaceholder.typicode.com/users/100').then((response) => {
        expect(response.body).to.have.property('name', 'Stephan Lewin')
    })
})

it('Ensure user appears in the complete list of users', function () {
    cy.request('https://jsonplaceholder.typicode.com/users/').then((response) => {
        expect(response.body).to.have.property('id', 100)
    })
})

it('Delete the user', function () {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/users/100') 

    //Confirm we've deleted the resource:
    var result = cy.request('https://jsonplaceholder.typicode.com/users/100');
    result.its('status').should('equa', 404);
})

