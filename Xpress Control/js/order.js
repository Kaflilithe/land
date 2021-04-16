$(function() {
    var isSubmit = false,
        phoneNumberMin = 5;
	$('form.main-order-form').submit(function(e) {

        if (isSubmit){
            return false;
        }

        var btn = $("button, input[type=submit]", $(this));

        let form = $(this),
            phone = $("[name=phone]:visible", form),
            phoneNumber = $.trim(phone.val());

        if (phone.length){
            e.preventDefault();
            var phoneMinLength = (phonePrefix.length - 1) + phoneNumberMin;

            if (phoneNumber.length < phoneMinLength){
                return alert(phoneError5);
            }

            btn.prop("disabled", true);
            isSubmit = true;
            Lib.request('/Order/Create', $(this).serialize(), function(result, data) {
                if (!result && data){
                    isSubmit = false;
                    btn.prop("disabled", false);
                    return alert(data);
                }
                if (data.redirect)
                    return document.location.href = data.redirect;
            });
        }
	});
});