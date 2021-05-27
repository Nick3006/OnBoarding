//$(document).ready(function () {


//    var currentTab = 0; // Current tab is set to be the first tab (0)
//    showTab(currentTab); // Display the current tab

//    $("#prevBtn").on('click', function (event) {
//        nextPrev(-1);
//    });

//    $("#nextBtn").on('click', function (event) {
//        nextPrev(1);
//    });

//    function nextPrev(n) {
//        // This function will figure out which tab to display
//        var x = document.getElementsByClassName("tab");
//        // Exit the function if any field in the current tab is invalid:
//        if (n == 1 && !validateForm()) return false;
//        // Hide the current tab:
//        x[currentTab].style.display = "none";
//        // Increase or decrease the current tab by 1:
//        currentTab = currentTab + n;
//        // if you have reached the end of the form...
//        if (currentTab >= x.length) {
//            // ... the form gets submitted:
//            document.getElementById("regForm").submit();
//            return false;
//        }
//        // Otherwise, display the correct tab:
//        showTab(currentTab);
//    }

//    function validateForm() {
//        // This function deals with validation of the form fields
//        var x, y, i, valid = true;
//        x = document.getElementsByClassName("tab");
//        y = x[currentTab].getElementsByTagName("input");
//        // A loop that checks every input field in the current tab:
//        for (i = 0; i < y.length; i++) {
//            // If a field is empty...
//            if (y[i].value == "") {
//                // add an "invalid" class to the field:
//                y[i].className += " invalid";
//                // and set the current valid status to false
//                valid = false;
//            }
//        }
//        // If the valid status is true, mark the step as finished and valid:
//        if (valid) {
//            document.getElementsByClassName("step")[currentTab].className += " finish";
//        }
//        return valid; // return the valid status
//    }

//    function showTab(n) {
//        // This function will display the specified tab of the form...
//        var x = document.getElementsByClassName("tab");
//        x[n].style.display = "block";
//        //... and fix the Previous/Next buttons:
//        if (n == 0) {
//            document.getElementById("prevBtn").style.display = "none";
//        } else {
//            document.getElementById("prevBtn").style.display = "inline";
//        }
//        if (n == (x.length - 1)) {
//            document.getElementById("nextBtn").innerHTML = "Submit";
//        } else {
//            document.getElementById("nextBtn").innerHTML = "Next";
//        }
//        //... and run a function that will display the correct step indicator:
//        fixStepIndicator(n)
//    }




//    function fixStepIndicator(n) {
//        // This function removes the "active" class of all steps...
//        var i, x = document.getElementsByClassName("step");
//        for (i = 0; i < x.length; i++) {
//            x[i].className = x[i].className.replace(" active", "");
//        }
//        //... and adds the "active" class on the current step:
//        x[n].className += " active";
//    }

//    //var navListItems = $('div.setup-panel div a'),
//    //    allWells = $('.setup-content'),
//    //    allNextBtn = $('.nextBtn'),
//    //    allPrevBtn = $('.prevBtn');

//    //allWells.hide();

//    //navListItems.click(function (e) {
//    //    e.preventDefault();
//    //    var $target = $($(this).attr('href')),
//    //        $item = $(this);

//    //    if (!$item.hasClass('disabled')) {
//    //        navListItems.removeClass('btn-primary').addClass('btn-default');
//    //        $item.addClass('btn-primary');
//    //        allWells.hide();
//    //        $target.show();
//    //        $target.find('input:eq(0)').focus();
//    //    }
//    //});

//    //allPrevBtn.click(function () {
//    //    var curStep = $(this).closest(".setup-content"),
//    //        curStepBtn = curStep.attr("id"),
//    //        prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

//    //    prevStepWizard.removeAttr('disabled').trigger('click');
//    //});

//    //allNextBtn.click(function () {
//    //    var curStep = $(this).closest(".setup-content"),
//    //        curStepBtn = curStep.attr("id"),
//    //        nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
//    //        curInputs = curStep.find("input[type='text'],input[type='url']"),
//    //        isValid = true;

//    //    $(".form-group").removeClass("has-error");
//    //    for (var i = 0; i < curInputs.length; i++) {
//    //        if (!curInputs[i].validity.valid) {
//    //            isValid = false;
//    //            $(curInputs[i]).closest(".form-group").addClass("has-error");
//    //        }
//    //    }

//    //    if (isValid)
//    //        nextStepWizard.removeAttr('disabled').trigger('click');
//    //});

//    //$('div.setup-panel div a.btn-primary').trigger('click');
//});



//function validateForm() {
//    // This function deals with validation of the form fields
//    var x, y, i, valid = true;
//    x = document.getElementsByClassName("tab");
//    y = x[currentTab].getElementsByTagName("input");
//    // A loop that checks every input field in the current tab:
//    for (i = 0; i < y.length; i++) {
//        // If a field is empty...
//        if (y[i].value == "") {
//            // add an "invalid" class to the field:
//            y[i].className += " invalid";
//            // and set the current valid status to false
//            valid = false;
//        }
//    }
//    // If the valid status is true, mark the step as finished and valid:
//    if (valid) {
//        document.getElementsByClassName("step")[currentTab].className += " finish";
//    }
//    return valid; // return the valid status
//}

$(document).ready(function () {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function () {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $('.radio-group .radio').click(function () {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".submit").click(function () {
        return false;
    })

});