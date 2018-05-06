
let photoNumber = 5;

$(function() { 
    $('button').on('click', function () {
        if (photoNumber < 16) {
         $('.gallery').append(`<img src="assets/images/home/image${photoNumber}.jpg">`);
         $('.gallery').append(`<img src="assets/images/home/image${photoNumber+1}.jpg">`);
         $('.gallery').append(`<img src="assets/images/home/image${photoNumber+2}.jpg">`);
         $('.gallery').append(`<img src="assets/images/home/image${photoNumber+4}.jpg">`);
        photoNumber = photoNumber + 4;
        } else {
            alert('Opps! there are no more pictures!');
        }
    });
});