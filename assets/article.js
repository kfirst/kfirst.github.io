$(document).ready(function () {

    var codeNavigation = '<div><input class="showLineNo" type="checkbox" checked="checked" />显示行号</div>';

    $('.highlight').prepend(codeNavigation);

    $('.showLineNo').click(function () {
        var highlight = $(this).parents('.highlight');
        highlight.find('.lineno').toggle();
    });

})