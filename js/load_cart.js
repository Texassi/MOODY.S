$(document).ready(function() {
    var itemsToShow = 12;
    var itemsIncrement = 3;
    
    $('.product:lt(' + itemsToShow + ')').show();
    $('#showLess').hide();
    
    $('#loadMore').on('click', function() {
        itemsToShow += itemsIncrement;
        $('.product:lt(' + itemsToShow + ')').show();
        $('#showLess').hide();

        if ($('.product').length <= itemsToShow) {
            $('#loadMore').hide();
            $('#showLess').show();
        }
    });
    
    $('#showLess').on('click', function() {
        $('.product').not(':lt(12)').hide();
        itemsToShow = 12;
        $('#loadMore').show();
        $('#showLess').hide();
    });
});