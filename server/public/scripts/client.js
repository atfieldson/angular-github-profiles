var app = angular.module('GithubListApp', []);

app.controller('GithubUserController', function(){
  console.log('GithubUserController loaded');

  var self = this; // holds the value of this

  self.people = [
    {
      "firstName": "Luke",
      "lastName": "Schlangen",
      "git_username": "LukeSchlangen",
      "shoutout": "Thanks for being awesome during the angular lecture today."
    },
    {
      "firstName": "Luka",
      "lastName": "Schlangen",
      "git_username": "LukeSchlangen",
      "shoutout": "Thanks for being awesome during the angular lecture today."
    }
  ];

  self.newPerson = {};

  self.createPerson = function(){
    console.log(self.newPerson);
    self.people.push(angular.copy(self.newPerson));
  };

});
