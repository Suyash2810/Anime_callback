window.onload = function () {
    var updateLogEl2 = document.querySelector('.update1');
    var beganLogEl2 = document.querySelector('.begin1');
    var completedLogEl2 = document.querySelector('.completed1');

    var allCallbacks = anime({
        targets: '.box',
        translateX: 1050,
        translateY: function (el, i, l) {
            return el.getAttribute('data-y');
        },
        delay: function (el, i) {
            return 1000 + (i * 100);
        },
        duration: function (el, i) {
            return 2000 + (i * 100);
        },
        rotate: function (el, i, l) {
            return anime.random(-540, 540);
        },
        scale: 1.5,
        direction: 'alternate',
        
        backgroundColor: [
            {
                value: '#52e3d2'
            }, // Or #FFFFFF
            {
                value: 'rgb(250, 200, 69)'
            },
            {
                value: 'hsl(100, 62%, 38%)'
            }
  ]

    });

    allCallbacks.update = function (anim) {
        if (!anim.began) {
            updateLogEl2.value = 'begins in ' + Math.round(anim.delay - anim.currentTime) + 'ms';
            beganLogEl2.value = '';
        } else {
            updateLogEl2.value = 'begins in 0ms';
        }
        if (!anim.completed) {
            completedLogEl2.value = '';
        }
    }

    allCallbacks.begin = function () {
        beganLogEl2.value = 'began';
    };
    allCallbacks.complete = function () {
        completedLogEl2.value = 'completed';
    };




}
