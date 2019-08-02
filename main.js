$(document).ready(function () {
    // get request to the data base and finally get the distributors list //
    $.get("selectdistributor.php", function(data, status){
        $("#browsers").append(data);
        console.log(data);
      });
    // 
    $("#target").submit(function (event) {
        //input from input document
        var dis = $("#input_dislist").val();
        //checking the input from existing options//
        var options = $("#browsers option");
        var distributors = {};
        var i = 0;
        var flag=0;
        for (i = 0; i < options.length; i++) {
            distributors[options[i].text] = options[i].value;
            if (options[i].text == dis) {
                $("#input_dislist").val(options[i].value);
                flag++;
            }
        }
        console.log(dis);
       // inserting to the data base from data base//
        if (isNaN(dis) && flag ==0 ) {
            /// go to data base register and return the id and name with it than append in the docuument
            //data base request here
            $.post("distributor.php",      // send HTTP POST request to a page and get the answer
                {
                    name: dis       // send data
                },
                function (data, status) { //retreive response
                    console.log(data+''+status);
                    data = parseInt(data);
                    $("#input_dislist").val(data);
                    //document.write(data);
                    console.log("<option value=\""+data+"\">"+ dis +"</option>");
                    $("#browsers").append('<option value="'+data+'">'+ dis +'</option>');
                });
            //======================//
            
        }


        event.preventDefault();
    });

});