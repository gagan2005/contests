var app=angular.module('app',['ngRoute','ngAnimate']);
app.config(function($routeProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'home.html',
			controller: 'maincontroller'
		})
		.when('/nss', {
	templateUrl: 'NSS.html',
	controller: 'secondcontroller'
})
.when('/form', {
	templateUrl: 'form.html',
	controller: 'secondcontroller'
})
.when('/form_sub', {
	templateUrl: 'form_sub.html',
	controller: 'secondcontroller'
})
.when('/archive', {
	templateUrl: 'archive.html',
	controller: 'secondcontroller'
})
.when('/about', {
	templateUrl: 'about.html',
	controller: 'secondcontroller'
})
.when('/announcements', {
	templateUrl: 'announcements.html',
	controller: 'secondcontroller'
})	
.when('/results', {
	templateUrl: 'results.html',
	controller: 'secondcontroller'
})
.when('/badminton_result', {
	templateUrl: 'badminton_result.html',
	controller: 'secondcontroller'
})

});
app.controller('maincontroller',function($scope){
$scope.n=1;
$scope.next=function()
{
	$scope.n++;
	if($scope.n==4)$scope.n=1;
}
$scope.prev=function()
{
	$scope.n--;
	if($scope.n<=0)$scope.n=3;
}
if(window.innerWidth<740)$scope.a=1;
else $scope.a=0;
if(window.innerWidth<740)$scope.b=0;
else $scope.b=1;
$scope.f=0;
$scope.open=function()
	{
		 $scope.a=!$scope.a;
		 $scope.b=1;
	}
});
