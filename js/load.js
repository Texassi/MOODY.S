$(document).ready(function() {
    var itemsToShow = 6;
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
        $('.product').not(':lt(6)').hide();
        itemsToShow = 6;
        $('#loadMore').show();
        $('#showLess').hide();
    });
});