var tinder = require('tinder');
var client = new tinder.TinderClient();

client.authorize(
  "EAAGm0PX4ZCpsBAJ1pZBLgBF55Mv2ndYU5cqptrbr7pltUIlihXqvSLeyVnyJEjH9tzo5XgOXDQnTXTYkZBsRryyQB4aKSjBh3ZAzNEpGOEa0p2De86ZBZAJhG1JN2CS6Eyhe41xi1gk7uk0kZC5a36jAZBChX6900wckkZAnQEu4ZAHwZDZD",
  10152982194278478,
  function() {
  	var isAuth = client.isAuthorized();
  	console.log(isAuth)
    client.getRecommendations(10, function(error, data){
      if(data == null) {
      	console.log("bad auth")
      }
      else {
      	console.log("light my fire", data.results)
      }
  });
});

//fbid 10154237716728478
//https://www.facebook.com/connect/login_success.html#access_token=EAAGm0PX4ZCpsBAJ1pZBLgBF55Mv2ndYU5cqptrbr7pltUIlihXqvSLeyVnyJEjH9tzo5XgOXDQnTXTYkZBsRryyQB4aKSjBh3ZAzNEpGOEa0p2De86ZBZAJhG1JN2CS6Eyhe41xi1gk7uk0kZC5a36jAZBChX6900wckkZAnQEu4ZAHwZDZD&expires_in=5721
//to hack https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token