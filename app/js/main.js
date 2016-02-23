function customTweet() {

    // set the supporting text
    var frontText = '?text=Gue pilih jawaban ';
    var backText = ' Ayo ikutan di http://www.sctv.co.id/tdi #TheDanceIcon2';

    // store the choice in a variable
    var target = $('.choice > .choice-list');

    // create an array that will store the answer
    var jawaban = [];

    /* grab each answer and combine it with the supporting text
    and lastly push it into the array */
    $.each(target, function(i){
        var getAnswer = $(this).find('.answer').text();
        var newAnswer = frontText + getAnswer + backText;
        jawaban.push(newAnswer);
    });

    for(i = 0; i<jawaban.length;i++) {

        /* replace whitespace, '#', ':', '/' with URL friendly characters */
        var newStr = jawaban[i].replace(/\s/g, '+').replace(/#/i, '%23').replace(/:/g, '%3A').replace(/\//g, '%2F');

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
