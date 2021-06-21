let url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/';

$(document).ready(() => {
    let civilization = new URLSearchParams(window.location.search).get('civilization');
    $('title').append(' | ' + civilization);
    $('#title').append(' > ' + civilization);

    url += civilization;

    document.getElementById('civilizationSelected').innerHTML = civilization;

    $.get(url, (res) => {
    });
});