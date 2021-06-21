let url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';


$.get(url, (res) => {
    res.civilizations.map((c) => {
        $('#civilizations').append(`
        <tr class='table-row' data-href='civilization.html?civilization=${c.name}'>
        <td>${c.name}</td>
        <td>${c.army_type}</td>
        <td>${c.team_bonus}</td>
        </tr>`);
    });
}, 'json');

renderTo = function () {
    window.document.location = $(this).data('href');
}

$(document).on('click', '#civilizations tr', renderTo);

