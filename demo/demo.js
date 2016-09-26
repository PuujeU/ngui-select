angular.module('select-demo', ['ngRoute', 'ngui-select-component'])
      .config(function ($routeProvider, $locationProvider) {
            $routeProvider
            .when('/select', {
                templateUrl: '/demo/select/view.html',
                controller: SelectCtrl,
                controllerAs: 'SelectCtrl',
                page:'select'
            })
      })

      .run(['$rootScope', '$route', function ($rootScope, $route) {
            $rootScope.$on('$routeChangeSuccess', function () {
              $rootScope.$pageName = document.title = $route.current.page;
            });
      }])
;

angular.module('ngui-select-component', [
        'ngui-select'
])
.config(function ($nguiSelectConfigProvider) {
        $nguiSelectConfigProvider.setBaseTemplateUrl('/template');
})
;
