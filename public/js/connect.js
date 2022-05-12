function getVerify() {
    $.ajax({
        url: '/verifyCode?t=' + Math.random(),
        type: 'get',
        success: function (data) {
            $('#verify').html(data);
        }
    })
}
getVerify()
$('#verify').on('click', function () {
    getVerify()
})

$(function () {
    $('#btn').click(function () {
        var formData = $("#my-form").serializeArray();
        var obj = {};
        formData.forEach((item) => {
            obj[item.name] = item.value;
        });

        $.ajax({
            type: "POST",
            url: "/connect",
            data: JSON.stringify(obj),
            contentType: "application/json",
            dataType:'json',
            success: (res) => {
                if (res.code === 2000) {
                    layer.msg(res.message, { shade: [0.3, '#393D49'], time: 2000 });
                    setTimeout(() => {
                        window.location.href = "/connect"
                    }, 2000);
                }
                else {
                    getVerify()
                    layer.msg(res.message, { shade: [0.3, '#393D49'], time: 2000 });
                }
            },
        })
        return false;
    })
})
