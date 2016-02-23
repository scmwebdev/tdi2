function customTweet() {

    /* UBAH PILIHAN DISINI  */
    var pilihan_1 = 'A. fero';
    var pilihan_2 = 'B. Galuh';
    var pilihan_3 = 'C. Alfi';
    /* UBAH PILIHAN DISINI  */
    

    var frontText = '?text=Gue pilih jawaban ';
    var backText = ' Ayo ikutan di http://www.sctv.co.id/tdi #TheDanceIcon2';
    var choice_one = frontText + pilihan_1 + backText;
    var choice_two = frontText + pilihan_2 + backText;
    var choice_three = frontText + pilihan_3 + backText;
    var arr = [choice_one, choice_two, choice_three];
    for(i = 0; i<arr.length;i++) {

        /* replace whitespace, '#', ':', '/' with system friendly characters */
        var newStr = arr[i].replace(/\s/g, '+').replace(/#/i, '%23').replace(/:/g, '%3A').replace(/\//g, '%2F');

        // plus 1 for the i for child selectors
        var child = i + 1;

        // select the child
        var choice = $('.choice > .choice-list:nth-child('+ child +')').find('a');

        // select the childs url
        var choiceUrl = $(choice).attr('href');

        // set the new url
        var choiceNewUrl = $(choice).attr('href', choiceUrl  + newStr);
    }
}

$(document).ready(function() {
    customTweet();
    $('.popup').click(function(event) {
        var width = 575,
            height = 400,
            left = ($(window).width() - width) / 2,
            top = ($(window).height() - height) / 2,
            url = this.href,
            opts = 'status=1' +
            ',width=' + width +
            ',height=' + height +
            ',top=' + top +
            ',left=' + left;
        window.open(url, 'twitter', opts);
        return false;
    });
});
