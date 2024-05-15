$(document).ready(function() {
    $('a').click(function() {
        var buttonListId = $(this).attr('id').replace('mainButton', 'buttonList');
        $('#' + buttonListId).toggleClass('hidden');
    });
})