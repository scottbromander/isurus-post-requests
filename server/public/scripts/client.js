$(document).ready(init);

function init() {
    // $.ajax({
    //     type: 'GET',
    //     url: '/trains',
    // }).then(function(response) {
    //    for(let train of response) {
    //     $('.js-container').append(`<p>${train.name}</p>`)
    //    }
    // });

    const newTrain = {
        name: 'Jessie',
        color: 'Yellow',
    }

    $.ajax({
        type: 'POST',
        url: '/trains',
        data: newTrain,
    }).then(function(response) {
       alert(response);
    });
}
