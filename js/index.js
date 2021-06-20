let url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

$.get(url, (res) => {
    res.civilizations.map((c) => {
        $('#civilizationList').append(`
        <tr class='cursor-pointer table-row'>
            <td>
                <a href='civilization.html'>
                    ${c.name}
                </a>
            </td>
            <td>${c.army_type}</td>
            <td>${c.team_bonus}</td>
        </tr>`);
    });
}, 'json');

