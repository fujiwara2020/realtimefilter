function filter(){
    var text = $('#filter').val();      //filterの値を取得
    
    if ("" == text){                    //もし入力されていなかったら、
        $('li[data-keyword]').show();　 //リストの値を表示　
        return;
    }
    
    $('li[data-keyword]').hide();       //リストの値を非表示
    $('li[data-keyword*=' + text + ']').show();　//データ属性との部分一致したリストを表示
}


    $('#filter').keyup(function () {    //キー操作によるイベント発生
        filter();
        return (13 !== event.which);    //エンターキーによるsubmit抑止
    });

    filter();