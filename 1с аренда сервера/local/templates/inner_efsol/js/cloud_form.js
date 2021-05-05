$(document).ready(function() {

    $('#cloud-form-phone').on('keypress', function (e) {
        if ($(this).val().length > 20) {
            return false
        }
        e = e || event;
        if (e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }
        const chr = getChar(e);
        if (chr == null) {
            return;
        }
        if (chr < '0' || chr > '9') {
            return false;
        }
    });

    $('.btnCloud button').on('click', function (e) {
        const errors = $('.errors');

        const form = $('div.formCloud');
        const action = form.data('action');
        const method = form.data('method');
        const pageTitle = document.title;
        const source = $(this);

        // console.log(pageTitle);
        // console.log(source);
        // console.log(source.data('utm_campaign'));
        // console.log(source.data('req_type'));


        // const source = $('button[data-target="#callback-popup"]');

        const name = form.find('input[name="name"]').val();
        const phone = form.find('input[name="phone"]').val();
        const mail = form.find('input[name="mail"]').val();
        const fid = form.find('input[name="fid"]').val();
        const checkbox = form.find('input[name="personal-agreement"]').prop('checked');

        errors.html('');

        let error = '';
        if (phone === '') {
            error += '<div><font class="errortext">Пожалуйста, заполните номер телефона!</font></div>';
        }

        if (checkbox === false) {
            error += '<div><font class="errortext">Согласитесь с условиями, пожалуйста</font></div>';
        }

        if (error !== '') {
            errors.html(error);
            return false;
        }

        $.ajax({
            url: action,
            data: {
                'fullname': name,
                'phone': phone,
                'email': mail,
                'fid': fid,
                'source': pageTitle,
                'product': source.data('product'),
                'utm_campaign': source.data('utm_campaign'),
                'req_type': source.data('req_type'),
            },
            type: method
        }).done(function (data) {
            const form = $('div.formCloud');
            const name = form.find('input[name="name"]');
            const phone = form.find('input[name="phone"]');
            const mail = form.find('input[name="mail"]');


            name.val('');
            phone.val('');
            mail.val('');

            alert('Поздравляем, заявка отправлена! Наш специалист свяжется с Вами в ближайшее время.');
        }).error(function (a,b,c) {
            console.log(a,b,c);
        });
    });
});