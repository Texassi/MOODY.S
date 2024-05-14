$(document).ready(function() {
    var itemsToShow = 12;
    var itemsIncrement = 6;

    $('.dec_con2:lt(' + itemsToShow + ')').show();
    $('#showLess').hide();

    $('#loadMore').on('click', function() {
        itemsToShow += itemsIncrement;
        $('.dec_con2:lt(' + itemsToShow + ')').show();
        $('#showLess').hide();

        if ($('.dec_con2').length <= itemsToShow) {
            $('#loadMore').hide();
            $('#showLess').show();
        }
    });

    $('#showLess').on('click', function() {
        $('.dec_con2').not(':lt(12)').hide();
        itemsToShow = 12;
        $('#loadMore').show();
        $('#showLess').hide();
    });
});