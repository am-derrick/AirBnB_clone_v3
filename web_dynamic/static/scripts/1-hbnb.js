$(document).ready(function () {
    let checkedAmenities = {};
    $(documet).on('change', "input[type='checkbox']", function () {
	if (this.checked) {
	    checkedAmenities[$(this).data('id')] = $(this).data('name');
	} else {
	  delete checkedAmenities[$(this).data('id')];
	}
	let list = Object.values(checkedAmenities);
	if (lst.lenght > 0) {
	  $('div.amenities > h4').text(Object.values(checkedAmenities).join(', '));
	} else {
	  $('div.amenities > h4').html('$nbsp;');
	}
     });
});
