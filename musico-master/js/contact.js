$(document).ready(function () {
    (function ($) {
        "use strict";

        

        // validate contactForm form
        $(function () {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    subject: {
                        required: true,
                        minlength: 4
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 20
                    }
                },
                messages: {
                    name: {
                        required: "Please enter your name.",
                        minlength: "your name must consist of at least 2 characters"
                    },
                    subject: {
                        required: "Please enter your subject here.",
                        minlength: "your subject must consist of at least 4 characters"
                    },
                    email: {
                        required: "Please enter a valid email address."
                    },
                    message: {
                        required: "Please enter your message here.",
                    }
                },
                submitHandler: function (form) {
                    if ($('#contactForm').valid()) {
                        formSend = true;
                        console.log("True");
                    }
                    $(form).ajaxSubmit({
                        type: "POST",
                        data: $(form).serialize(),
                        url: "contact_process.php",
                        success: function () {
                            $('#contactForm :input').attr('disabled', 'disabled');
                            $('#contactForm').fadeTo("slow", 1, function () {
                                $(this).find(':input').attr('disabled', 'disabled');
                                $(this).find('label').css('cursor', 'default');
                                $('#success').fadeIn()
                                $('.modal').modal('hide');
                                $('#success').modal('show');
                            })
                        },
                        error: function () {
                            $('#contactForm').fadeTo("slow", 1, function () {
                                $('#error').fadeIn()
                                $('.modal').modal('hide');
                                $('#error').modal('show');
                            })
                        }
                    })
                }
            })
        })

    })(jQuery)
})