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
        }).state('about',{
            //afterwards
        });

});