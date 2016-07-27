// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var config = {
  apiKey: "AIzaSyAVbSpq9464csnkObTJ6tHGVuvOqJeA3gk",
  authDomain: "map-app-6d4a4.firebaseapp.com",
  databaseURL: "https://map-app-6d4a4.firebaseio.com",
  storageBucket: ""
};
firebase.initializeApp(config);
angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives','firebase'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl'
      })

      .state('app.map', {
        url: '/map',
        views: {
          'menuContent': {
            templateUrl: 'templates/map.html',
            controller: 'MapCtrl'
          }
        }
      })
      .state('app.register',{
        url:'/register',
        views:{
          'menuContent':{
            templateUrl:'templates/register.html',
            controller:'userCtrl'
          }
        }
      })
      .state('app.login',{
        url:'/login',
        views:{
          'menuContent':{
            templateUrl: 'templates/login.html',
            controller:'userCtrl'
          }
        }
      })
      .state('app.myposts',{
        url:'/myposts',
        views:{
          'menuContent':{
            templateUrl:'templates/myposts.html',
            controller:'UploadCtrl'
          }
        }
      })
      .state('app.detailedpost',{
        url:'/detailedpost',
        views:{
          'menuContent':{
            templateUrl:'templates/detailedposts.html',
            controller:'UploadCtrl'
          }
        }
      })
      .state('app.myprofile',{
        url:'/myprofile',
        views:{
          'menuContent':{
            templateUrl:'templates/myprofile.html',
            controller:'UploadCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/map');
  });
