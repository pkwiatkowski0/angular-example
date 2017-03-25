/**
 * Created by patry on 25.03.2017.
 */

<!--scope mówi daj mi zasięg tylko users. $rootScope dałby mi zasięg wszystkiego-->
angular.module("Sda", []).controller("usersCtrl", function ($scope, $http) {
    // $scope.loading = true;
    // $scope.users = [];
    // var promise = $http.get("")
    // promise.then(function () {
    //
    // })
    //w jednej linijce to co powyżej:
        $http.get("https://jsonplaceholder.typicode.com/users").then(function (res) {
        // console.log(res);
            $scope.users = res.data;
            $scope.loading = false;
    });
    /* var user = {
     username: "pawel",
     role: "admin"
     }*/
    $scope.limit = 2;
    $scope.more = function () {
        $scope.limit = $scope.limit + 10;
    };
    $scope.shouldShowMoreButton = function () {
        return $scope.users && $scope.limit < $scope.users.length;
    };

    $scope.hello = "Hello bla bla";
    $scope.photo = "https://static.pexels.com/photos/2740/nature-animal-fur-dangerous.jpg"
//        $scope.users = ["User 1", "User 2", "User 3", "Pawel", "Joanna"];
    $scope.remove = function (index) {
        $scope.users.splice(index, 1)
    };

    $scope.addUser = function () {
        $scope.users.push({
            username: $scope.newName,
            role: $scope.newRole
        });
        $scope.newName = "",
            $scope.newRole = ""
    };


  /*  $scope.users = [
        {
            username: "pawel",
            role: "admin"
        }, {
            username: "Wojtek",
            role: "manager"
        }, {
            username: "michal",
            role: "user"
        }, {
            username: "Angela",
            role: "owner"
        }, {
            username: "Admin",
            role: "admin"
        },
    ];*/
}).controller("TabsCtrl", function ($scope) {
    $scope.current = 1;
    $scope.changeTab = function (tab) {
        $scope.current = tab;
    };
    $scope.isCurrent = function (tab) {
        return tab === $scope.current;
    }

    // w tabsach na ng clicki a w divach na isCurrent
});

