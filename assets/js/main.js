(function($, w, d, de, db) {

    /* VARS */
    de = d.documentElement;
    db = d.body;

    var breakpoints = {sm: 576, md: 768, lg: 992, xl: 1200},
        templates = {};

    function toggleLoading(evt) {
        $(de).toggleClass('loading', evt.type === 'ajaxStart');
    }

    function getStuff() {
        getPlayers();
        getLatest();
    }

    /* EVENT LISTENERS */
    $(d).on('ajaxStart ajaxStop', toggleLoading);

    !$(de).is('.not-found');

    AOS.init({
        duration: 1000,
    })


}(jQuery, window, document));
