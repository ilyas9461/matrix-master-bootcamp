var isClicked = false;
var isImgA = true;

$('.img1a').click(function () {
    if (!isClicked) isClicked = true;
    else isClicked = false;
    changeImage();
});
$('.img2a').click(function () {
    if (!isClicked) isClicked = true;
    else isClicked = false;
    changeImage();
});
$('.img3a').click(function () {
    if (!isClicked) isClicked = true;
    else isClicked = false;
    changeImage();
});

function changeImage() {

    $('.img1a').fadeOut("slow", () => {
        $(".img1a").attr("src", function () {
            if (isClicked) return './images/1b.jpg';
            else return './images/1a.jpg';
        });

        $('.img1a').fadeIn("slow")
    });

    $('.img2a').fadeOut("slow", () => {
        $(".img2a").attr("src", function () {
            if (isClicked) return './images/2b.jpg';
            else return './images/2a.jpg';
        });

        $('.img2a').fadeIn("slow")
    });

    $('.img3a').fadeOut("slow", () => {
        $(".img3a").attr("src", function () {
            if (isClicked) return './images/3b.jpg';
            else return './images/3a.jpg';
        });

        $('.img3a').fadeIn('slow')
    });


}
