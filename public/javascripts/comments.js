$("#save").live('click', function() {
    var nick = $("#nickname").val();
    var comment = $("#comment").val();

    $.post('comment', { author: nick, comment: comment }, function(data) {
      listComments();
    });
});

function listComments() {
    var list = '';
    $.get('comment', function(data) {
        jQuery.each(data, function() {
            list += '<div class="comment"><h3>' + this.author + '</h3><p class="date">' + this.date +
                '</p><p>' + this.comment + '</p></div>';
        });

        $('#comments').html(list);

        $("#nickname").val('');
        $("#comment").val('');
    });
}

$(document).ready(listComments);