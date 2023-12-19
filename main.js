function switchMode(el) {
    const body = $('body');
    const theme = $('#theme_name');

    let mode = body.attr('data-bs-theme');
    if (mode === 'dark') {
        body.attr('data-bs-theme', 'light');
        theme.html('Light');
        return;
    }

    body.attr('data-bs-theme', 'dark');
    theme.html('Dark');
}

$('#header-mb .nav-link').on('click', function () {
    $('#hamburger').trigger('click');
});


