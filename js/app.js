
$( document ).ready(function() {

    var addText = $('#addText');
    var toWrite = $('.toWrite');

/* Message - Please write text */

    addText.keydown(function () {

    var valueThis = $('#addText').val();

    if(valueThis!=""){
        toWrite.find('p').addClass('error');
    } else {
        toWrite.find('p').removeClass('error');
    }
    });

/* Remove/Add placeholder */

    addText.focus(function () {
    $(this).attr('placeholder', '');
    });

    addText.blur(function () {
    $(this).attr('placeholder', '+ add new');
    });


/* Input remove text */
    toWrite.find('input').focus(function(){
    $(this).val('');
    });

/* Active on click button */

    $(document).on("click", ".btn", function(){

    var valueThis = addText.val();

    if(valueThis===""){
        toWrite.find('p').removeClass('error');
    } else {
        $('.list').find('ul').prepend('<li>' + valueThis + '<div class="icon">' + '<i class="ion-checkmark"></i>' + '<i class="ion-close"></i>' +'</div>' + '</li>');
    }
    });


/* Active on click icon */

    $(document).on('click', '.ion-close', function () {
    $(this).parents('li').fadeOut();
    });


    $(document).on('click', '.ion-checkmark', function () {
    $(this).parents('li').addClass('color').appendTo('ul');
    });


/*Calendar*/

    var date = new Date();
    var day = date.getDate();

    $('.day').append(day);

    var month = date.getMonth();
    var textMonth;

    switch(month) {
        case 0:
            textMonth ='January';
            break;
        case 1:
            textMonth ='February';
            break;
        case 2:
            textMonth ='March';
            break;
        case 3:
            textMonth ='April';
            break;
        case 4:
            textMonth ='May';
            break;
        case 5:
            textMonth ='June';
            break;
        case 6:
            textMonth ='July';
            break;
        case 7:
            textMonth ='August';
            break;
        case 8:
            textMonth ='September';
            break;
        case 9:
            textMonth ='October';
            break;
        case 10:
            textMonth ='November';
            break;
        case 11:
            textMonth ='December';
            break;
    }

     $('.month').append(textMonth);
});

