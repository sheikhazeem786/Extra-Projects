$(document).ready(function() {
    $('button').click(function() {
        const name = $('#inputName').val();
        // alert(name);
        $('#imgChange').attr('src', `https://joeschmoe.io/api/v1/${name}`);
    });
});