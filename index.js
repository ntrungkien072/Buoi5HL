var myapp = angular.module("myapp", []);
myapp.controller("mycontroller1", $scope =>{
    $scope.red = "đỏ"
    
})

myapp.controller("mycontroller2", $scope =>{
    $scope.blue ="xanh"
    
}
)
myapp.controller("mycontrollercha",function ($scope, $rootScope ){
    $rootScope.root = "DỮ liệu tổng";
$scope.ctrlcha = "tôi là cha";

})
myapp.controller("mycontrollercon", $scope=>{
    $scope.ctrlcon = "tôi là con"
    
    })

 myapp.controller("myctrl", $scope=>{
$scope.user= [
{
    id:"kien",
    pass: "123456",
    role:"admin"
},
{
    id:"quang",
    pass: "dsk",
    role:"con"
}
,{
    id:"dũng",
    pass: "hhgdshg",
    role:"ga"
}
]


 })

    