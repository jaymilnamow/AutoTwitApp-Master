var app = angular.module('twitterApp', ['ngSanitize','twitterApp.services']);

OAuth.initialize('yPpBGL1bRgixeJNhWJFzaLsWY');

OAuth.popup('twitter')
.done(function(result) {
  //use result.access_token in your API request
  //or use result.get|post|put|del|patch|me methods (see below)
})
.fail(function (err) {
  //handle error with err
});

//
//
//angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'ngTwitter'])
//
//.run(function($ionicPlatform) {
//  $ionicPlatform.ready(function() {
//    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//    // for form inputs)
//    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//      cordova.plugins.Keyboard.disableScroll(true);
//    }
//    if (window.StatusBar) {
//      StatusBar.styleDefault();
//    }
//  });
//})
//
//
//
//.controller('AppCtrl', function($scope, $ionicPlatform, $twitterApi, $cordovaOauth) {
//  var twitterKey = 'STORAGE.TWITTER.KEY';
//  var clientId = 'yourConsumerKey';
//  var clientSecret = 'yourConsumerSecretKey';
//  var myToken = '';
//
//  $scope.tweet = {};
//
//  // Automatically start the OAuth dialog if no token was found
//  $ionicPlatform.ready(function() {
//    myToken = JSON.parse(window.localStorage.getItem(twitterKey));
//    if (myToken === '' || myToken === null) {
//      $cordovaOauth.twitter(clientId, clientSecret).then(function (succ) {
//        myToken = succ;
//        window.localStorage.setItem(twitterKey, JSON.stringify(succ));
//        $twitterApi.configure(clientId, clientSecret, succ);
//        $scope.showHomeTimeline();
//      }, function(error) {
//        console.log(error);
//      });
//    } else {
//      $twitterApi.configure(clientId, clientSecret, myToken);
//      $scope.showHomeTimeline();
//    }
//  });
//
//  // Load your home timeline
//  $scope.showHomeTimeline = function() {
//    $twitterApi.getHomeTimeline().then(function(data) {
//      $scope.home_timeline = data;
//    });
//  };
//
//  // Post a tweet
//  $scope.submitTweet = function() {
//    $twitterApi.postStatusUpdate($scope.tweet.message).then(function(result) {
//      $scope.showHomeTimeline();
//    });
//  }
//
//  // Pull-to-refresh
//  $scope.doRefresh = function() {
//    $scope.showHomeTimeline();
//    $scope.$broadcast('scroll.refreshComplete');
//  };
//
//  // Display the correct date from Twitter response
//  $scope.correctTimestring = function(string) {
//    return new Date(Date.parse(string));
//  };
//
//})
//
//
//
//
//
//
//
//
//.config(function($stateProvider, $urlRouterProvider) {
//
//  // Ionic uses AngularUI Router which uses the concept of states
//  // Learn more here: https://github.com/angular-ui/ui-router
//  // Set up the various states which the app can be in.
//  // Each state's controller can be found in controllers.js
//  $stateProvider
//
//  // setup an abstract state for the tabs directive
//    .state('tab', {
//    url: '/tab',
//    abstract: true,
//    templateUrl: 'templates/tabs.html'
//  })
//
//  // Each tab has its own nav history stack:
//
//  .state('tab.scheduledTweets', {
//    url: '/scheduledTweets',
//    views: {
//      'scheduledTweets':{
//        templateUrl: 'templates/tab-scheduledTweets.html',
//        controller: 'ScheduledTweetsCtrl'
//      }
//    }
//  })
//
//  .state('tab.addNew', {
//    url: '/addNew',
//    views: {
//      'addNew': {
//        templateUrl: 'templates/tab-addNew.html',
//        controller: 'AddNewCtrl'
//      }
//    }
//  })
//
//  .state('tab.times', {
//    url: '/times',
//    views: {
//      'times': {
//        templateUrl: 'templates/tab-times.html',
//        controller: 'ScheduleCtrl'
//      }
//    }
//  });
//
//  // if none of the above states are matched, use this as the fallback
//  $urlRouterProvider.otherwise('/tab/addNew');
//
//});
