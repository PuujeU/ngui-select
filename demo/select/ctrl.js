function SelectCtrl($scope, $nguiSelect) {
    var $select = this.$select = $nguiSelect({
      srcUrl :'/demo/select/data.json',
      tableLabel:'Тоглогч',
      srcId:'id',
      srcName: 'name'
    });
}
