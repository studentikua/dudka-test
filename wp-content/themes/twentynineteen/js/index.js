// Hello!

import * as JQuery from "jquery";
window.$ = JQuery.default;

$(document).on('click', '.btn-more', function() {
	$(this).toggleClass('show').prev().toggleClass("show-more-height");
});


$(document).on('click', '#menuToggle', function() {
	$(this).toggleClass('openMenu').closest('html').toggleClass('openMenu');
});

console.log('Hello!');


