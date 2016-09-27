## Angular select module

- bower install

## Import js
```javascript 
    <script src="/ngui/select/select.js"></script>

    angular.module("appname", [
        "ngui-select"
    ]).run();
```
## Html template 
```html
    <div ngui-select="SelectCtrl.$select"></div>
```
## Initialize with options
```javascript 
    function SelectCtrl($scope, $nguiSelect) {
        var $select = this.$select = $nguiSelect({
          srcUrl :'/api/notification/player',    // data request url
          tableLabel:'Тоглогч',                  // table header label name
          srcId:'id'                             // data model key
          srcName:'name'                         // data model name
        });
    }
```
