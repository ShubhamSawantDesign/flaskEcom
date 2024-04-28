jQuery(function() {




    $("#password").on("change", function(){
        if($(this).val().length < 6 || $(this).val().length > 20)
        {
            document.getElementById("submit").disabled = true;
            document.getElementById("password-message").style.color = "red";
            $('#password-message').text("Password should not be less than 6 character and greater than 20");
        }
        else
        {
            document.getElementById("submit").disabled = false;
            $('#password-message').text("");
        }
    });



    $("#name").on("input", function(){

        var regex = /[^a-z A-Z]/g;
        if($(this).val().match(regex)){
        $(this).val($(this).val().replace(regex,''));
        }
    });





    /**
     * Artist Dashbaord Validations
     * 
     */
    $('#cat_id').on("change",function(){
        if(this.value == 2 || this.value == 3 || this.value == 5 || this.value == 6 || this.value == 7) 
        {
            $('#youtube-link').show();
        }
        else
        {
            $('#youtube-link').hide();
        }
    });

    $("#sg_price").on("input", function(){

        var regex = /[^0-9]/g;
        if($(this).val().match(regex)){
        $(this).val($(this).val().replace(regex,''));
        }
    });

});