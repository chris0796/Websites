$(document).ready(function() {
    $('.btnBread button').on('click', function () {
        const errors = $('.errors');

        const form = $('div.formBread');
        const action = form.data('action');
        const method = form.data('method');
        const source = $('button[data-target="#callback-popup"]');

        const name = form.find('input[name="name"]').val();
        const phone = form.find('input[name="phone"]').val();
        const mail = form.find('input[name="mail"]').val();
        const fid = form.find('input[name="fid"]').val();
        const checkbox = form.find('input[name="personal-agreement"]').prop('checked');

        errors.html('');

        let error = '';
        if (phone === '') {
            error += '<div><font class="errortext">Заполните номер телефона, пожалуйста</font></div>';
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
                'source': source.data('title'),
                'product': source.data('product'),
                'utm_campaign': source.data('utm_campaign'),
            },
            type: method
        }).done(function (data) {
            const form = $('div.formBread');
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