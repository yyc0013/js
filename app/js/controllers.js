/**
 * Created by Administrator on 2016/3/28.
 */
var stockControllers = angular.module('stockControllers',[]);

stockControllers.controller('TopTenController', ['$scope','$state',function ($scope,$state) {
    $scope.stocks = [{title:'�ַ�����',code:'123332',startPrice:231,endPrice:244,imgUrl:'1231',gain:true},
        {title:'���ƻ���',code:'146452',startPrice:291,endPrice:233,imgUrl:'1231',gain:false},
        {title:'��������',code:'123842',startPrice:271,endPrice:252,imgUrl:'1231',gain:true},
        {title:'��ֹɷ�',code:'129832',startPrice:241,endPrice:268,imgUrl:'1231',gain:true},
        {title:'�й���ó',code:'120032',startPrice:221,endPrice:287,imgUrl:'1231',gain:true},
        {title:'�Ϻ�����',code:'126332',startPrice:201,endPrice:295,imgUrl:'1231',gain:true},
        {title:'�����ع�',code:'127788',startPrice:231,endPrice:244,imgUrl:'1231',gain:true},
        {title:'�Ϻ�����',code:'146560',startPrice:291,endPrice:233,imgUrl:'1231',gain:false},
        {title:'��֤��ָ',code:'115155',startPrice:271,endPrice:252,imgUrl:'1231',gain:true},
        {title:'��ָ֤��',code:'109765',startPrice:241,endPrice:268,imgUrl:'1231',gain:true}
    ]

}]);