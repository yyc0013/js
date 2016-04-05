/**
 * Created by Administrator on 2016/3/28.
 */
var stockPredictionApp = angular.module('stockPredictionApp',['ui.router','stockControllers']);



stockPredictionApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/welcome');
    $stateProvider
        .state('welcome',{
            url:'/welcome',
            templateUrl:'../app/templates/showTopTens.html',
            controller:'TopTenController'
        }).state('search',{
            url:'/search',
            templateUrl:'../app/templates/searchingDetails.html',
            controller:'SearchingDetailsController'
        })
        .state('login',{
            url:'/login',
            templateUrl:'../app/templates/login.html'
        })
        .state('signup',{
            url:'/signup',
            templateUrl:'../app/templates/signup.html'
        });

});