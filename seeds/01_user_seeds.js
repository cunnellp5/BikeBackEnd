var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user').insert({
          id: 1,
          firstName: 'Philthy',
          lastName: 'Phil',
          password: bcrypt.hashSync('123', 10),
          phone: '123-123-1234',
          isActive: false,

          image: 'https://media.licdn.com/media/AAEAAQAAAAAAAAg5AAAAJGI1YzY4NTg0LTAzNWQtNDdkNC1iMjMzLWFmNzdjMzY0YTJkZQ.jpg',
          type: 1,
          email: 'biketest@test.com'
        }),
        knex('user').insert({
          id: 2,
          firstName: 'Hot Wheels Bike Store',
          lastName: '',
          password: bcrypt.hashSync('123', 10),
          phone: '123-123-1234',
          isActive: false,

          image: 'http://www.thebikeshopauburn.com/images/The%20Bike%20Shop%20Storefront.jpg',
          type: 0,
          email: 'storetest@test.com'
        }),
      ]);
    });
};
