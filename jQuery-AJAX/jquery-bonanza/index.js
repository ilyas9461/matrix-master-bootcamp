
$('.btn-fade').click(function () {
    $('.fade-text').fadeOut("slow", () => {
        $('.fade-text').fadeIn("slow", () => {
            alert('Fade out complete!');
        });
    });
});

$('.btn-append').click(function () {
    $('.append-text').append(' <p class="new-text">Appended text</p>');
    $('.new-text').click(function () {
        $('.new-text').remove();
    });
});

$('.btn-change-color').click(() => {
    $('.red-text').css('color', 'red');
});