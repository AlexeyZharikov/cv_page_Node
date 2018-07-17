$(document).ready( () => {
    function contClear() {
        $('.text').empty();
    };
    $('.nav-main').on('click', () => {
        contClear();
        $('.nav-projects, .nav-contacts, .nav-cv').removeClass('active');
    });
    $('.cv, .nav-cv').on('click', () => {
        contClear();
        $('.nav-projects, .nav-contacts').removeClass('active');
        $('.nav-cv').addClass('active');
    });
    $('.projects, .nav-projects').on('click', () => {
        contClear();
        $('.nav-cv, .nav-contacts').removeClass('active');
        $('.nav-projects').addClass('active');
    });
    $('.contact, .nav-contacts').on('click', () => {
        contClear();
        $('.nav-projects, .nav-cv').removeClass('active');
        $('.nav-contacts').addClass('active');
    });
});