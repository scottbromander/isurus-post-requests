$(document).ready(init);

function init() {
    $.ajax({
        type: 'GET',
        url: '/trains',
    }).then(function(response) {
       for(let train of response) {
        $('.js-container').append(`<p>${train.name}</p>`)
       }
    });
}
