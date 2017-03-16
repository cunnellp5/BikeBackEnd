exports.seed = function(knex, Promise) {
 return knex.raw('TRUNCATE issues RESTART IDENTITY CASCADE;')
   .then(() => {
     const issue = [{
       message: 'i need a bike tube',
       biketube: '26 x 22 fat tire',
       bikechain: false,
       location: '55th and Federal',
       cash: false,
       isActive: false,
       issuer: 1,
       responder: 2
     }, {
       message: '',
       biketube: '',
       bikechain: false,
       location: '',
       cash: false,
       isActive: false,
       issuer: 1,
       responder: 2
     }];
     return knex('issues').insert(issue);
   })
};
