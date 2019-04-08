$(document).ready(function() {
	$('#select-city').change(function(){
		loadForecast($(this).val());
	});
	
});

function loadForecast(city) {
	url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
	id = ',jp&APPID=bd08cf83212b83b9c6190c42d91748b1';
	loc = url + city + id;
    $.getJSON(loc , function( data ) {
		$('.city-details .city-name').text(data.city.name + ', '+ data.city.country);
		$('.city-details .city-forecast').html('');
		htmlResult = '';
		$.each( data.list, function( key, val ) {
			htmlResult += val.dt_txt;
		});
		$('.city-details .city-forecast').append(htmlResult);
    });
    
}