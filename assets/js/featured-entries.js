
jQuery(document).ready( function($) {

	$('.gv-datatables').on( 'draw.dt', function () {

		$(this)
			.find('span.featured')
			.parents('tr')
			.addClass('gv-featured-entry');

	} );

});