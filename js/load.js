$(document).ready(function() {
    var itemsToShow = 3;
    var itemsIncrement = 3;
    
    $('.product:lt(' + itemsToShow + ')').show();
    
    $('#loadMore').on('click', function() {
        itemsToShow += itemsIncrement;
        $('.product:lt(' + itemsToShow + ')').show();
        
        if ($('.product').length <= itemsToShow) {
            $('#loadMore').hide();
        }
    });
    
    $('#showLess').on('click', function() {
        $('.product').not(':lt(3)').hide();
        itemsToShow = 3;
        $('#loadMore').show();
    });
});