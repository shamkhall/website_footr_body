$readMore.init({

    // Selector of the element the plugin applies to (any CSS selector, eg: '#', '.').
    target: '',

    // Number of words to initially display (any number). 
    numOfWords: 3,

    // If true, user can toggle between 'read more' and 'read less'. 
    toggle: true,

    // The text of 'Read more' link. 
    moreLink: 'read more ...',

    // The text of 'Read less' link. 
    lessLink: 'read less',

    // The class given to the read more link. 
    linkClass: 'rm-link',

    // The class given to the div container of the read more link.
    containerClass: false

});

$readMore.init({
    target: 'p'
});