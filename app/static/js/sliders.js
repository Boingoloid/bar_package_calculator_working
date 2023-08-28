$(document).ready(function() {


// count the number locked. If 2, the divide change by 2 and deduct amount
    // if 1 then only do that one.   If zero, don't let slider go higher


//if total > 100

var sliders = $(".small_slider");
var availableTotal = 100;


$( ".small_slider" ).slider({
    min: 0,
    max: 100,
    value:100,
    step:1,
    animate: "slow",
    start: function( event, ui){

    },
    slide: function( event, ui ) {
        console.log('START OF SLIDE!!!!!!!!!!!!');
        $('#event_type_dropdown').val('Custom');

        var starting_value_this = Number($(this).siblings('.alcohol_type_label_percentage').val());
        var ending_value_this = ui.value;
        var delta = ending_value_this - starting_value_this;

        if($('.locked').length >0 ){
            var otherSlider = sliders.not(this).not('.locked');
            var otherSliderValueStart = otherSlider.siblings('.alcohol_type_label_percentage').val();
            var otherSliderValueEnd = parseFloat(otherSliderValueStart) - parseFloat(delta);

            // console.log($('.locked').length);
            console.log('other slide start: ' + otherSliderValueStart);
            console.log('other slide current value: ' + otherSliderValueEnd);
            console.log('this slide start: ' + starting_value_this);
            console.log('this slide current value: ' + ending_value_this);
            console.log('change in this slider, delta: ' + delta);

            // if start + delta > 0,
            //Delta gets subtracted normally
            if (otherSliderValueEnd <0 || otherSliderValueEnd > 100) {
                // out of bounds, so don't let it happen
                $(this).slider("option", "value") = starting_value_this;
                console.log('exiting');
                return;
            } else{
                //assign new values
                ui.value = ending_value_this;
                $(this).siblings('.alcohol_type_label_percentage').val(ending_value_this.toFixed(1));
                otherSlider.slider('value', otherSliderValueEnd);
                otherSlider.siblings('.alcohol_type_label_percentage').val(otherSliderValueEnd);

            }
        } else {

            //Set the text box to the value of the slider
            $(this).siblings('.alcohol_type_label_percentage').val(ui.value.toFixed(1));
            // Get current total and slider count
            var total = 0;
            sliders.not(this).each(function() {
                total += $(this).slider("option", "value");
            });
            total += ui.value; //gives the new total

            // Count the sliders not locked
            // commenting but save for future use. Locked not active right now.
            var slider_count_not_locked = 0;
            sliders.not(this).not('.locked').each(function() {
                slider_count_not_locked += 1;
            });
            // Need to do this because apparently jQ UI
            // does not update value until this event completes


            var delta = availableTotal - total;

            // Update each slider
            // console.log('available Total: ' + availableTotal);
            // console.log('New total: ' + total);
            // console.log('other slider count not locked: ' + slider_count_not_locked);



            sliders.not(this).not('.locked').each(function() {
                var t = $(this)
                var value = t.slider("option", "value");
                var new_value = value + (delta/slider_count_not_locked);
                if (new_value < 0 || ui.value == 100)
                    new_value = 0;
                if (new_value > 100)
                    new_value = 100;
                t.siblings('.alcohol_type_label_percentage').val(new_value.toFixed(1));
                t.slider('value', new_value);
            });

            var small_slider_count = 0;
            var new_total  = 0;
            sliders.each(function() {
                small_slider_count += 1;
                new_total += $(this).slider("option", "value");

            });
            new_total += ui.value;
            // console.log('small_slider_count: ' + small_slider_count);
            // console.log('new_total: ' + new_total);
            //if (ui.value >70){
            //    $(this).slider( "option", "value" ) = 70;
            //}
            // $( "#value_percent_drinking_wine" ).text( ui.value);
        }
    },
});

$( "#slider_percent_drinking" ).slider({
    min: 0,
    max: 100,
    value:95,
    step:1,
    slide: function( event, ui ) {
        $( "#value_percent_drinking" ).val( ui.value);
        var guestsNumber = $('#guest_input').val();
        var guestsDrinking =  Math.ceil(guestsNumber * ui.value / 100);
        $('#alcohol_drinkers_label').html('%  = ' + guestsDrinking + ' guests');
    },
});

$('.unlocked_image').click(function () {
    $('.unlocked_image').css({ opacity: 0, pointerEvents: 'none'});
    $(this).hide();
    $(this).siblings('.locked_image').show();
    $(this).parent().siblings('.small_slider').addClass('locked');
    $(this).parent().siblings('.small_slider').slider('disable');

});

$('.locked_image').click(function () {
    $(this).hide();
    $('.unlocked_image').show();
    $('.unlocked_image').css({opacity:1, pointerEvents: 'auto'});
    $('.small_slider').removeClass('locked');
    $('.small_slider').slider('enable');
});


var guestsNumber = $('#guest_input').val();
var guestsDrinking =  Math.ceil(guestsNumber * 95 / 100);
$( "#value_percent_drinking" ).val( $( "#slider_percent_drinking" ).slider( "value"));
$('#alcohol_drinkers_label').html('% = ' + guestsDrinking + ' guests');

// $( "#value_percent_drinking_wine" ).val(($( "#slider_percent_drinking_wine" ).slider( "option", "value" )).toFixed(1));
// $( "#value_percent_drinking_spirits" ).val(($( "#slider_percent_drinking_spirits" ).slider( "option", "value" )).toFixed(1));
// $( "#value_percent_drinking_beer" ).val(($( "#slider_percent_drinking_beer" ).slider( "option", "value" )).toFixed(1));



//DEFAULTS
var percent_wine = '50.0';
var percent_spirits = '30.0';
var percent_beer = '20.0';

console.log('percent beer type: '+ typeof (percent_beer) + '  -   ' + percent_beer);
console.log('percent wine type: '+ typeof (percent_wine) + '  -   ' + percent_wine);
console.log('percent spirits type: '+ typeof (percent_spirits) + '  -   ' + percent_spirits);


$( "#value_percent_drinking_wine" ).val(percent_wine);
$( "#slider_percent_drinking_wine" ).slider('value', Number(percent_wine));

$( "#value_percent_drinking_spirits" ).val(percent_spirits);
$( "#slider_percent_drinking_spirits" ).slider( "value", Number(percent_spirits));

$( "#value_percent_drinking_beer" ).val(percent_beer);
$( "#slider_percent_drinking_beer" ).slider("value", Number(percent_beer));


$('#event_type_dropdown').change(function() {
    // unlock all  trigger locked image click
    $( ".locked_image" ).trigger( "click" );

    var event_type = $('#event_type_dropdown').val();
    console.log(typeof(event_type));

    var percent_wine = '50.0';
    var percent_spirits = '40.0';
    var percent_beer = '10.0';

    if (event_type === 'Bachelorette Party') {
        percent_wine = '55.0';
        percent_spirits = '40.0';
        percent_beer = '5.0';
    } else if (event_type === 'Bachelor Party'){
        percent_wine = '20.0';
        percent_spirits = '40.0';
        percent_beer = '40.0';
    } else if (event_type === 'Wedding'){
        percent_wine = '50.0';
        percent_spirits = '30.0';
        percent_beer = '20.0';
    } else if (event_type === 'Game Watch'){
        percent_wine = '10.0';
        percent_spirits = '30.0';
        percent_beer = '60.0';
    } else if (event_type === 'Holiday Party'){
        percent_wine = '45.0';
        percent_spirits = '40.0';
        percent_beer = '15.0';
    } else if (event_type === 'Brunch') {
        percent_wine = '40.0';
        percent_spirits = '40.0';
        percent_beer = '20.0';
    }

    $( "#value_percent_drinking_wine" ).val(percent_wine);
    $( "#slider_percent_drinking_wine" ).slider('value', Number(percent_wine));

    $( "#value_percent_drinking_spirits" ).val(percent_spirits);
    $( "#slider_percent_drinking_spirits" ).slider( "value", Number(percent_spirits));

    $( "#value_percent_drinking_beer" ).val(percent_beer);
    $( "#slider_percent_drinking_beer" ).slider("value", Number(percent_beer));

});

// Drinking intensity slider
$( "#slider_drinking_intensity" ).slider({
    range: true,
    min: 0,
    max: 100,
    step: 1,
    values: [10, 90],
    slide: function (event, ui) {
        var first_node_value = ui.values[0];
        var second_node_value = ui.values[1];
        console.log('drinking intensity: ' + first_node_value + '::::::' + second_node_value);

        var light_intensity_percentage = first_node_value;
        var average_intensity_percentage = second_node_value - first_node_value;
        var heavy_intensity_percentage = (100 - second_node_value);

        $('#value_drinking_intensity_light').html(light_intensity_percentage);
        $('#value_drinking_intensity_average').html(average_intensity_percentage);
        $('#value_drinking_intensity_heavy').html(heavy_intensity_percentage);
        console.log('drinking intensity: ' + light_intensity_percentage + '::::::' + average_intensity_percentage + heavy_intensity_percentage);
    }
});






// Set defaults for drinking intensity
$('#value_drinking_intensity_light').html(10);
$('#value_drinking_intensity_average').html(80);
$('#value_drinking_intensity_heavy').html(10);

// wine split slider
$('#wine_mix_slider').slider({
    range: false,
    min: 0,
    max: 100,
    step: 5,
    value: 50,
    slide: function (event, ui) {
        console.log('here');
        var red_percentage = ui.value;
        var white_percentage = parseFloat(100) - parseFloat(red_percentage);
        console.log('red and white percentages::::::');
        console.log(red_percentage);
        console.log(white_percentage);
        $('.wine_split_label_percentage_red').val(red_percentage);
        $('.wine_split_label_percentage_white').val(white_percentage);
    }
});

//Defaults
    $('.wine_split_label_percentage_red').val(50);
    $('.wine_split_label_percentage_white').val(50);




}); //Closing of document

