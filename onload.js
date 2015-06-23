if (Meteor.isClient) {
    window.addEventListener('load', function(){
        console.log('onload');
    }, false);
    Template.carousel.onRendered(function(){
        console.log('onRendered');
        // workaround: window.onload event already occurred on IE11 here, so trigger again for carousel.
        if (/Trident/.test(navigator.userAgent)) {
            $(window).trigger('load');
        }
    });
}
