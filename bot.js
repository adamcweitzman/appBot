var tinder = require('tinder');
var client = new tinder.TinderClient();
var _ = require('underscore')

client.authorize("EAAGm0PX4ZCpsBAJ1pZBLgBF55Mv2ndYU5cqptrbr7pltUIlihXqvSLeyVnyJEjH9tzo5XgOXDQnTXTYkZBsRryyQB4aKSjBh3ZAzNEpGOEa0p2De86ZBZAJhG1JN2CS6Eyhe41xi1gk7uk0kZC5a36jAZBChX6900wckkZAnQEu4ZAHwZDZD", 10152982194278478, function() {

    var defaults = client.getDefaults()
    var recs_size = defaults.globals.recs_size;

    var isAuth = client.isAuthorized();
    console.log(isAuth);

    client.getRecommendations(recs_size, function(error, data){
    	console.log(data);
    	count = 0;
    	for (i = 0; i < 20; i++) { 	
	      _.chain(data.results)
	        .pluck('_id')
	        .each(function(id) {
	          client.like(id, function(error, data) {
	          	count++
	          	console.log("this is person number " + count, "and their id is " + id)
	          	console.log(count)
	          	console.log(data)
	            if (data == null) {
	              console.log("no data for ",id);
	            } else if (data.match == false) {
	              console.log("not a match with " + id);		
	            } else if (data.match) {
	              client.sendMessage(id, "hey little troublemaker ;)");
	              	console.log("message sent to " + id);
	            }
	          });
	        });
	    }
    });
});

//fbid 10154237716728478
//https://www.facebook.com/connect/login_success.html#access_token=EAAGm0PX4ZCpsBAJ1pZBLgBF55Mv2ndYU5cqptrbr7pltUIlihXqvSLeyVnyJEjH9tzo5XgOXDQnTXTYkZBsRryyQB4aKSjBh3ZAzNEpGOEa0p2De86ZBZAJhG1JN2CS6Eyhe41xi1gk7uk0kZC5a36jAZBChX6900wckkZAnQEu4ZAHwZDZD&expires_in=5721
//to hack https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token