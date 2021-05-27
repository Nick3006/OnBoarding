$(document).ready(function () {
    $('#startDateId').datetimepicker({
        format: 'YYYY/M/D h:mm'
    });
    $('#endDateId').datetimepicker({
        format: 'YYYY/M/D h:mm'
    });

    var itemsTable = $('#itemTblId').DataTable({
        "language": {
            "emptyTable": "No Scans available."
        },
        "bInfo": false,
        //"rowId": "scanId",
        "paging": false,
        "ordering": false,
        "searching": false,
        //ajax: {
        //    url: "/Scan/GetScansForPatient/" + patientId,
        //    //error: function (jqXHR, textStatus, errorThrown) {
        //    //    alert(textStatus + errorThrown);
        //    //},
        //    dataSrc: ''
        //},
        //columns: [
        //    { data: "scanDateTimeString" },
        //    { data: "scanTypeName" },
        //    { data: "location" },
        //    { data: "intervalStr" },
        //    { data: "status" },
        //    {
        //        data: null,
        //        render: function (data, type, row, meta) {

        //            var buttonHtml = '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">' +
        //                '<div class="btn-group" role="group">' +
        //                '<button id="btnGroupDrop1" type="button" class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button >' +
        //                '<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">';
        //            if (row.statusCode == "SCH") {
        //                buttonHtml += '<a class=" dropdown-item updateScan" data-scanid="' + row.scanId + '" data-action="book" data-title="Booking" href="#">Book Scan</a>' +
        //                    '<a class="dropdown-item updateScan" data-scanid="' + row.scanId + '" data-action="editdate" data-title="Edit Scheduled Date" href="#">Edit Scan</a>';
        //            } if (row.statusCode == "BOO") {
        //                buttonHtml += '<a class=" dropdown-item updateScan" data-scanid="' + row.scanId + '" data-action="complete" data-title="Scan Completed" href="#">Complete Scan</a>';
        //            }
        //            buttonHtml += '</div></div></div>';
        //            return buttonHtml;
        //        }
        //    }
        //]
    });


    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn'),
        allPrevBtn = $('.prevBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allPrevBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

        prevStepWizard.removeAttr('disabled').trigger('click');
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                curInputs[i].className += " invalid";
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
});