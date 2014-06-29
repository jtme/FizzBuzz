$(document).ready(function () {

    var addtolist = function(item){
        $('#number-list').append( "<li>"+item+"</li>" );
    };

    var fizzbuzzit = function(givennumber) {
        if (givennumber >= 1 && givennumber <= 100) {
                // create a loop, fizz/buzz it
                for (var n = 1; n <= 100; n++) {
                    if (n % 15 === 0) {
                        addtolist("fizz-buzz");
                     } else if (n % 3 === 0){
                        addtolist("fizz");
                     } else if (n % 5 === 0){ 
                        addtolist("buzz");
                     } else {
                        addtolist(n);
                     }          
                }
        }else{
            alert("Please input valid number between 1 an 100.")
        };
    };


    $('#submit').on('click', function(event) {
        event.preventDefault();
        fizzbuzzit($('#givemenumber').val());
    });



})