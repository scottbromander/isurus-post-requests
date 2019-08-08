$(document).ready(init);

function init() {
    $('#js-form-add-train').on('submit', submitTrain);

    getTrains();
}

function submitTrain(event) {
    event.preventDefault();

    const formArray = $(this).serializeArray();

    const dataForServer = {
        name: $('#js-form-name').val(),
        color: $('#js-form-color').val(),
    };

    // for (let dataFromForm of formArray) {
    //     dataForServer[dataFromForm.name] = dataFromForm.value;
    //  Create a new key on our object and set it equal to the value
    //  both new key name and value are provided by the inputs in html.
    //  This method works for as many inputs you have, without adding code!
    // }


    console.log(dataForServer);

    $.ajax({
        type: 'POST',
        url: '/trains',
        data: dataForServer,
    }).then(function(response) {
        getTrains();
    });
}

function getTrains() {
    $.ajax({
        type: 'GET',
        url: '/trains',
    }).then(function(response) {
       render(response);
    });
}

function render(response) {
    const listOfTrains = response;
    $('.js-container').empty();
    for (let train of listOfTrains) {
        $('.js-container').append(`
         <div>
             <p>${train.name} - ${train.color}</p>
         </div>
        `)
    }
}
