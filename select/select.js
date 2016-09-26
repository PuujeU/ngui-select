(function () {
    'use strict';
    var app = angular.module('ngui-select', []);

    app.factory('$nguiSelect', ['$http',
        function ($http) {
            return function (options) {
                options = options || {};
                var items = [];
                var selectedItems = {};

                self = {

                  load: function (searchtxt) {
                        $http.get( options.srcUrl, {
                          params: {search: searchtxt}
                        })
                        .success(function(responses){
                          items = responses;
                        })
                        .error(function(err){
                          items = err;
                        });
                  },
                  isEnabled : function(item){
                      var id = item[options.srcId]
                      return id in selectedItems;
                  },
                  select: function (selectedId, selectedItem){
                      selectedItems[selectedId]=selectedItem;
                  },
                  remove: function (removeId){
                      delete selectedItems[removeId];
                  },

                  get selectedItems() {
                     return selectedItems;
                  },
                  get items() {
                     return items;
                  },
                  get options() {
                     return options;
                  },

                  set selectedItems(value){
                    selectedItems = value;
                  },
                  set items(value){
                    items = value;
                  }

                }

                return self;
            };
        }
    ]);

    app.directive('nguiSelect', ['$nguiSelectConfig',
        function ($nguiSelectConfig) {
            return {
                restrict: 'A',
                scope: {
                    $select: '=nguiSelect'
                },
                templateUrl: function (elem, attrs) {
                    return attrs.templateUrl || $nguiSelectConfig.baseTemplateUrl + '/select/select.htm';
                }
            };
        }
    ]);

    app.provider("$nguiSelectConfig", function () {
      var baseTemplateUrl = "/ngui-select";

      return {
        setBaseTemplateUrl: function (url) {
          baseTemplateUrl = url;
        },
        $get: function () {
          return {
            get baseTemplateUrl() {
              return baseTemplateUrl;
            }
          };
        }
      };

    });


})();
