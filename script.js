
let photoNumber = 4;

$(function() { 
    $('button').on('click', function () {
        if (photoNumber < 9) {
         $('.gallery').append(`<img src="assets/images/home/image${photoNumber}.jpg">`);
         $('.gallery').append(`<img src="assets/images/home/image${photoNumber+1}.jpg">`);
         $('.gallery').append(`<img src="assets/images/home/image${photoNumber+2}.jpg">`);
        photoNumber = photoNumber + 3;
        } else {
            alert('Opops! there are no more pictures!');
        }
    });
});