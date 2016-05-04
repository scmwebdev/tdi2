function customTweet() {

    // set the supporting text
    var frontText = '?text=Gue pilih jawaban ';
    var backText = ' Ayo ikutan #kuistdi2 di #TheDanceIcon2';

    // store the choice in a variable
    var target = $('.choice > .choice-list');

    // create an array that will store the answer
    var jawaban = [];

    /* grab each answer and combine it with the supporting text
    and lastly push it into the array */
    $.each(target, function(i) {
        var getAnswer = $(this).find('.answer').text();
        var newAnswer = frontText + getAnswer + backText;
        jawaban.push(newAnswer);
    });

    for (i = 0; i < jawaban.length; i++) {

        /* replace whitespace, '#', ':', '/' with URL friendly characters */
        var newStr = jawaban[i].replace(/\s/g, '+').replace(/#/i, '%23').replace(/:/g, '%3A').replace(/#/i, '%23').replace(/\//g, '%2F');

        // plus 1 for the i for child selectors
        var child = i + 1;

        // select the child
        var choice = $('.choice > .choice-list:nth-child(' + child + ')').find('a');

        // select the childs url
        var choiceUrl = $(choice).attr('href');

        // set the new url
        var choiceNewUrl = $(choice).attr('href', choiceUrl + newStr);
    }
}

function timer($start, $end) {
      /** grabs current date **/
        var now  = new Date();

        /** split $start and $end and combine them together with comma **/
        var start = $start.split("");
        var start_hour = $start[0] + $start[1];
        var start_min = $start[2] + $start[3];

        var end = $end.split("");
        var end = $end[0] + $end[1] + ', ' + $end[2] + $end[3];
        var end_hour = $end[0] + $end[1];
        var end_min = $end[2] + $end[3];

        /** grabs current day ( 0 => monday, 1 => tuesday, etc) **/
        var currentDay = now.getDay();

        /** set start time **/
        var startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), start_hour, start_min);

        /** set end time **/
        var endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), end_hour, end_min);

        /** set the condition if its up **/
        var Open = (now.getTime() > startTime.getTime() && now.getTime() < endTime.getTime())

        if(currentDay == 6 && Open) {
            $('body').addClass('quiz-on');
        } else {
            $('body').addClass('quiz-off');
        };
}
(function($) {
    "use strict";

    $(function() {
        timer('1230', '1800');
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

}(jQuery));
