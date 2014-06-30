$(document).ready(function () {

    // add to list function 
    var addtolist = function(item){
        $('#number-list').append( "<li>"+item+"</li>" );
    };

    // fizz buzz 
    var fizzbuzzit = function(givennumber) {
        if (givennumber >= 1 && givennumber <= 100) {
                // create a loop, fizz/buzz it
                for (var n = 1; n <= givennumber; n++) {
                    if (n % 15 === 0) {
                        addtolist("fizz buzz");
                     } else if (n % 3 === 0){
                        addtolist("fizz");
                     } else if (n % 5 === 0){ 
                        addtolist("buzz");
                     } else {
                        addtolist(n);
                     }          
                }
        }else{
            alert("Please input valid NUMBER between 1 an 100.")
        };
    };

   // on click action 
    $('#submit').on('click', function(event) {
        event.preventDefault();
        var givenmenumber = +$('#givemenumber').val();
        // reset list
        $('#number-list').empty();
        fizzbuzzit(givenmenumber);
        //$('#givemenumber').val('');
        givenmenumber = '';
    });

});