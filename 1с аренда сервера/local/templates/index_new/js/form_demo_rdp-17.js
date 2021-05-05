$(function () {
    $(document).on('submit', 'form.form-demo-rdp', function () {
        let formData = $(this).serialize();
        let formAction = $(this).prop('action');
        let key = $(this).find('input[name="formID"]').val();

        $.ajax({
            url: formAction,
            data: formData,
            method: 'POST'
        }).done(function (data) {
            let html = $(data).find('.' + key).html();
            $(document).find('.modal-container.' + key).html(html);
        });

        return false;
    })
});