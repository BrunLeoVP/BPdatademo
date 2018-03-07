function fire() {
    var v = $('#number').val() || 0;
    $('#foo tr > *:nth-child('+v+')').toggle();
}
$('button').click(fire);