var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var reasons = $('textarea[name="reasons"]').val();
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
        var msg = `欠席理由\n${reasons}`;
        sendText(msg);

        return false;
    });
});
