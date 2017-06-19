// Counter
$(function() {

    var eventHappenDay = new Date(2017, 8, 15, 12);
    var today = new Date();
    var difference = Math.abs(eventHappenDay - today);
    var days = difference / 36e5 / 24;
    var hours = (difference / 36e5) % 12;

    $('#days.timer').text(parseInt(days));
    $('#hours.timer').text(parseInt(hours));
    $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });

});
