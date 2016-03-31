/**
 * Created by Administrator on 2016/3/28.
 */
var stockControllers = angular.module('stockControllers',[]);

stockControllers.controller('TopTenController', ['$scope','$state',function ($scope,$state) {
    $scope.stocks = [{title:'浦发银行',code:'123332',startPrice:231,endPrice:244,imgUrl:'1231',gain:true},
        {title:'白云机场',code:'146452',startPrice:291,endPrice:233,imgUrl:'1231',gain:false},
        {title:'东风汽车',code:'123842',startPrice:271,endPrice:252,imgUrl:'1231',gain:true},
        {title:'武钢股份',code:'129832',startPrice:241,endPrice:268,imgUrl:'1231',gain:true},
        {title:'中国国贸',code:'120032',startPrice:221,endPrice:287,imgUrl:'1231',gain:true},
        {title:'上海机场',code:'126332',startPrice:201,endPrice:295,imgUrl:'1231',gain:true},
        {title:'中南重工',code:'127788',startPrice:231,endPrice:244,imgUrl:'1231',gain:true},
        {title:'上海建工',code:'146560',startPrice:291,endPrice:233,imgUrl:'1231',gain:false},
        {title:'深证成指',code:'115155',startPrice:271,endPrice:252,imgUrl:'1231',gain:true},
        {title:'上证指数',code:'109765',startPrice:241,endPrice:268,imgUrl:'1231',gain:true}
    ]

}]);