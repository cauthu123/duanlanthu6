$(document).ready(function() {
    $("#registration-form").submit(function(event) {
        event.preventDefault();
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();

        // Gửi thông tin đăng ký đến máy chủ
        $.ajax({
            url: "/register", // Đường dẫn xử lý đăng ký ở phía máy chủ
            method: "POST",
            data: {
                username: username,
                email: email,
                password: password
            },
            success: function(response) {
                // Xử lý kết quả đăng ký ở đây
                console.log(response);
            }
        });
    });
});
