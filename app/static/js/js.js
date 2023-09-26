$(document).ready(function() {

    // Toggle the assumptions container visible/not visible
    $('.show_assumptions').click(function () {
        $('.assumptions_data_container').toggle('slow');
    });

     // Toggle the advanced options container visible/not visible
    $('.advanced_options_toggle_label').click(function(){
        $('.advanced_options_container').toggle();
        var symbol_span = $('.advanced_options_symbol');
        var symbol = symbol_span.text();
        if (symbol == '+') {
            symbol_span.text('-');
        } else {
            symbol_span.text('+');
        }
    });

    // Get list of spirits from element. Element populated by view in routes
    var spirit_types_data = $('#variable_spirits').text();
    var spirit_types_json = spirit_types_data.replace(/'/g,'"');
    var spirit_types_json = JSON.parse(spirit_types_json);

    // toggle("slow");

//Show the calculate and show spirits/wine/beer container and helper show method






//$(".wine_bottle_options_input").keyup(function(){
//        var num = parseInt($(this).val());
//        var min = 1;
//        var max = 2;
//
//        if (isNaN(num)) {
//            this.value = "";
//            alert("Number of wine options (advanced options) must be 1 or 2");
//        } else if(num < min || num > max) {
//            alert("Number of wine options (advanced options) must be 1 or 2");
//        }
//});



  $('#calculate_button')[0].addEventListener("click", () => {

    // Get list of entire inventory and turn into list
    var inventory_json = $('#variable').text();
    var inventory_list = inventory_json.replace(/'/g,'"');
    inventory_list = JSON.parse(inventory_list);

    // inventory_list.forEach(item => getPrice(item));

    hideForm();
    showLoader();
    window.scrollTo({top:500,behavior:"smooth"});
    // alert('before calc');
    delayTimer(calculateResults);
    // console.log("after calc results");
    // alert("after calc results");
    function calculateResults(){
    hideLoader();

    // Get vvalues from form
    var guests = $('input[name$="guests"]').val();
    var duration = Number($('input[name$="duration"]').val());
    var percentageDrinking = $('#slider_percent_drinking').slider('value') / 100;
    var havingChampagneToast = $('input[name$="havingChampagneToast"]').is(':checked');
    var percentageDrinkingHeavy = Number($('#value_drinking_intensity_heavy').html()) / 100;
    var percentageDrinkingAverage = Number($('#value_drinking_intensity_average').html()) / 100;
    var percentageDrinkingLight = Number($('#value_drinking_intensity_light').html()) / 100;

    // Calculate servings
    var guestsDrinking = guests * percentageDrinking;
    var guestsDrinkingHeavy = guestsDrinking * percentageDrinkingHeavy;
    var guestsDrinkingAverage = guestsDrinking * percentageDrinkingAverage;
    var guestsDrinkingLight = guestsDrinking * percentageDrinkingLight;
    var drinksHeavyDrinkers = guestsDrinkingHeavy * (duration + 2);
    var drinksAverageDrinkers = guestsDrinkingAverage * (duration + 1);
    var drinksLightDrinkers = guestsDrinkingLight * (duration);
    var totalDrinks = drinksHeavyDrinkers + drinksAverageDrinkers + drinksLightDrinkers;

    //Assumptions for servings per bottle
    var champagneDrinksPerBottle = 6;
    var wineDrinksPerBottle = 5;
    var spiritsDrinksPerBottle = 16;
    var numberOfWineBottlesPerCategory = 2;


    var numberOfSpiritsBottles = $('.include_spirits_checkbox:checked').length;

    var percentageWine = $('#value_percent_drinking_wine').val()/100;
    var percentageSpirits = $('#value_percent_drinking_spirits').val()/100;
    var percentageBeer = $('#value_percent_drinking_beer').val()/100;

    //calculate wine mix percentages
    var whiteWineSplit = Number($('.wine_split_label_percentage_white').val()) / 100;
    var redWineSplit = parseFloat(1) - parseFloat(whiteWineSplit);

    // Drinks Wine Calculation
    var drinksWine = Math.ceil(totalDrinks * percentageWine);
    var drinksWhiteWine = drinksWine * whiteWineSplit;
    var drinksRedWine = drinksWine * redWineSplit;

    // // Get number of bottle options
    // var numberOfWineOptionsRed = $('#red_bottle_options').val();
    // var numberOfWineOptionsWhite =  $('#white_bottle_options').val();

    var bottlesWhiteWine = Math.ceil(drinksWhiteWine / wineDrinksPerBottle);
    var bottlesRedWine = Math.ceil(drinksRedWine / wineDrinksPerBottle);
    var bottlesPerWhiteWine = Math.ceil(bottlesWhiteWine);
    var bottlesPerRedWine = Math.ceil(bottlesRedWine);

    // console.log('bottles:');
    // console.log('bottles white' + bottlesWhiteWine);
    // console.log('bottles red' + bottlesRedWine);
    // console.log(bottlesPerWhiteWine);
    // console.log(bottlesPerRedWine);

    //
    var drinksSpirits = Math.ceil(totalDrinks * percentageSpirits);
    var bottlesSpirits = Math.ceil(drinksSpirits / spiritsDrinksPerBottle);
    var bottlesPerSpirit = Math.ceil(bottlesSpirits/numberOfSpiritsBottles);
    var drinksBeer = Math.ceil(totalDrinks * percentageBeer);
    var cansBeer = Math.ceil(drinksBeer);
    var champagneBottles = Math.ceil(guests/champagneDrinksPerBottle);

    //Set summary values
    $('.summary_value_all').html(Math.ceil(totalDrinks));
    $('.summary_value_wine').html(drinksWine);
    $('.summary_value_wine_bottles').html(parseFloat(bottlesWhiteWine) + parseFloat(bottlesRedWine));
    $('.summary_value_spirits').html(drinksSpirits);
    $('.summary_value_spirits_bottles').html(bottlesSpirits);
    $('.summary_value_beer').html(drinksBeer);
    $('.summary_value_beer_bottles').html(cansBeer);

    //assign values
    $("#bottle_count_label_absolut").html((bottlesPerSpirit) + " bottles");
    $("#bottle_count_label_absolut_elyx").html((bottlesPerSpirit) + " bottles");
    $("#bottle_count_label_jameson").html(bottlesPerSpirit + " bottles");
    $("#bottle_count_label_theglenlivet").html((bottlesPerSpirit) + " bottles");
    $("#bottle_count_label_redbreast12").html((bottlesPerSpirit) + " bottles");
    $("#bottle_count_label_beefeater").html((bottlesPerSpirit) + " bottles");
    $("#bottle_count_label_plymouth").html((bottlesPerSpirit) + " bottles");
    $("#bottle_count_label_altos").html((bottlesPerSpirit) + " bottles");
    $("#bottle_count_label_avion").html((bottlesPerSpirit) + " bottles");
    $("#bottle_count_label_kenwood_cabernet_sauvignon").html(bottlesPerRedWine + " bottles");
    $("#bottle_count_label_kenwood_sixridges_pinotnoir").html(bottlesPerRedWine + " bottles");
    $("#bottle_count_label_kenwood_chardonnay").html(bottlesPerWhiteWine + " bottles");
    $("#bottle_count_label_kenwood_sauvignon_blanc").html(bottlesPerWhiteWine + " bottles");
    // $("#bottle_count_label_campo_viejo").html((bottlesWine/4) + " bottles");

    if(havingChampagneToast) {
        $("#bottle_count_label_ghmumm_grand_cordon").html((champagneBottles) + " bottles");
        $('.brand_container_ghmumm_grand_cordon').show();
        $('#champagne_data_container').show();
        $('.summary_value_champagne').html(guests);
        $('.summary_value_champagne_bottles').html(champagneBottles);
        // console.log('yes having toast');
        // console.log($("#bottle_count_label_ghmumm_grand_cordon").html());
    } else {
        $("#bottle_count_label_ghmumm_grand_cordon").html(0);
        $('.brand_container_ghmumm_grand_cordon').hide();
        $('#champagne_data_container').hide();
        // console.log('no toast');
        // console.log($("#bottle_count_label_ghmumm_grand_cordon").html());
    }
    // console.log("bottlesWine: " + bottlesWine.toString());
    // console.log("bottlesSpirits: " + bottlesSpirits.toString());
    // console.log("cansBeer: " + cansBeer.toString());
    // console.log("champagneBottles: " + champagneBottles.toString());
    inventory_list.forEach(item => showStartingArrangement(item));
    //hide spirits

    $('.include_spirits_checkbox:not(:checked)').each(function(){
        var checkbox_spirit_type = $(this).attr('id');
        checkbox_spirit_type = checkbox_spirit_type.replace("include_spirit_","");
        $('.brand_container_' + checkbox_spirit_type).hide();
        console.log('checked id: ' + checkbox_spirit_type);
        

    });
    hideLoader();
    showCalculatorResults();
}


});





function getPrice(item){
    var price_text;
    var urlString = item.reservebar_handle;
    fetch(urlString,item)
    .then(resp => {
        data = resp.json();
        return data;
    }).then(body => {
        // TODO handle body
        price_text = body['product']['variants'][0]['price'];
        var price_node = $('#price_label_' + item.class_name);
        price_node.html('$'+price_text);
        // return price_text;
    }).catch((error) => {
        // TODO handle error
        console.log("error from server returned");
        console.log(error);
    })
}





$('.next_arrow').click(function(event){
    var type = $(this).siblings('.category_type').html();
    var category_position = $(this).siblings('.category_position').html();
    var new_category_position = parseFloat(category_position) + parseFloat(1);
    $(this).parent('.brand_container').hide();
    $('.brand_container_'+type+'_'+ new_category_position).show();
});

$('.prev_arrow').click(function(event){
    var type = $(this).siblings('.category_type').html();
    var category_position = $(this).siblings('.category_position').html();
    var new_category_position = parseFloat(category_position) - parseFloat(1);
    $(this).parent('.brand_container').hide();
    $('.brand_container_'+type+'_'+ new_category_position).show();
});



$('#guests').change(function(){
    $('#percentageDrinking').trigger('change');
});

$('#percentage_drinking_more').change(function(){
    $('#percentageDrinking').trigger('change');
});

$('#duration').change(function(){
});



//Helper Methods
function showLoader() {
    $('.loader').show();
}

function hideLoader(){
    $('.loader').hide();
}

function hideForm(){
    $(".calculation-result").hide();
    $(".cocktail_image_container").hide();
    $(".brand_container").show();
}




// Shows spirits calculation result
function showCalculatorResults() {
    $('.show_assumptions').show();
    $('.assumptions_data_container').hide();
   $( ".calculation-result" ).slideToggle(100, function(){
        window.scrollTo({top:600,behavior:"smooth"});
   });
}

function delayTimer(functToDelay) {
    setTimeout(() => {
        functToDelay();
    }, 1100);
}
/////////////////////////////////Helper Functions

function showStartingArrangement(item){
    //count categories

    // Get number of bottle options
    var numberOfWineOptionsRed = $('#red_bottle_options').val();
    var numberOfWineOptionsWhite =  $('#white_bottle_options').val();
    if(numberOfWineOptionsRed == 1){
        $('.brand_container_kenwood_cabernet_sauvignon').hide();
    }
    if(numberOfWineOptionsWhite == 1){
        $('.brand_container_kenwood_chardonnay').hide();
    }

    // Hide items that aren't first in their category
    if(item.category_order > 1){
        $('.brand_container_'+ item.class_name).hide();
        // $('.' + item.type).show();
    }
    // Display arrows for all possible combinations
    if(item.category_size === 1){// 1) all only 1 in categories
        $('.prev_arrow_' + item.class_name).hide("slow");
        $('.next_arrow_' + item.class_name).hide("slow");
    } else if (item.category_order === 1) { // 2) its the first of many
        $('.next_arrow_' + item.class_name).show("slow");
        $('.prev_arrow_' + item.class_name).hide("slow");
    } else if (item.category_order === item.category_size){// 3) last in list
        $('.next_arrow_' + item.class_name).hide("slow");
        $('.prev_arrow_' + item.class_name).show("slow");
    } else {  // 4) in middle
        $('.prev_arrow_' + item.class_name).show("slow");
        $('.next_arrow_' + item.class_name).show("slow");
    }
}

//Show the calculate and show cocktail container and helper method
$( ".calculateCocktails" ).click(function() {
   showCocktails();
});
function showCocktails (){
    $(".cocktail_image_container").slideToggle("slow");
}

//////////////////////////  ReserveBar and Drinks & Co API

$('.buy_now_reserve_bar_link').click(function(){
    window.open("//www.reservebar.com",target="_blank");
    return false;
});

$('.buy_now_total_wine_link').click(function(){
    window.open("//www.totalwine.com/",target="_blank");
    return false;
});


$('.buy_reserve_bar_link').click(function(){
    buildURL();
    return false;
});

function buildURL(){
    //ReserveBar
    var baseURL = "www.reservebar.com/cart/";
    var reservebarURLString = baseURL;
    console.log(baseURL)
    $('.brand_container:visible').each(function (){
        var reservebar_id = $(this).children('.reservebar_id').html();
        var amount = $(this).children('.bottle_count_label').html();
        amount = amount.replace(" bottles", "").trim();
        // console.log(reservebar_id+':'+amount);
        reservebarURLString += reservebar_id + ':' + amount + ',';
        }
    );
    window.open("//" + reservebarURLString,target="_blank");
}



$('.buy_drinksandco_link').click(function(){
    buildWineURL();
    return false;
});


function buildWineURL(){
    var baseURL = "www.drinksandco.us/cart/";
    var drinksandcoURLString = baseURL;
    $('.brand_container:visible').each(function (){
        var drinksandco_id = $(this).children('.drinksandco_id').html();
        // console.log(drinksandco_id);
        if(drinksandco_id == 0) {
            // do nothing
        }else {
            var amount = $(this).children('.bottle_count_label').html();
            amount = amount.replace(" bottles", "").trim();
            console.log(drinksandco_id + ':' + amount);
            drinksandcoURLString += drinksandco_id + ':' + amount + ',';
        }
    });
    window.open("//" + drinksandcoURLString,target="_blank");
}


    // var delay = 300; // milliseconds
    // var cookie_expire = 0; // days

    // var cookie = localStorage.getItem("list-builder");
    // if(cookie == undefined || cookie == null) {
    //     cookie = 0;
    // }

    // if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
    //     $("#list-builder").delay(delay).fadeIn("fast", () => {
    //         $("#popup-box").fadeIn("fast", () => {});
    //     });

    //     $("button[name=subscribe]").click(() => {
    //         var urlsnippet = $("#popup-form").attr("action") + '?' + 'email=' +  $("input[name=email]").val();
    //         alert(urlsnippet);
    //         fetch(urlsnippet,{
    //          headers:{'Access-Control-Allow-Origin':'*'}})
    //         .then(function (response) {
    //             console.log(response.text());
    //             return response.text();
    //         }).then(function (json) {
    //             console.log(json);
    //         });
    //     });
    // }
        



//http://www.mattacalindemo.com/email_submit?email=matthew.acalin@gmail.com


//            $.ajax({
//                type: "GET",
//                url: $("#popup-form").attr("action") + '/' + $("input[name=email]").val(),
//                success: (data) => {
//                    $("#popup-box-content").html("<p style='text-align: center'>Thank you for subscribing to The Polyglot Developer newsletter!</p>");
//                }
//            });

        $("#popup-close").click(() => {
            $("#list-builder, #popup-box").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });
    });












  //
  // document.addEventListener("click", () => {
  //   alert("You knocked?");
  // });
// function touchHandler(event){
//     var touches = event.changedTouches,
//         first = touches[0],
//         type = "";
//
//     switch(event.type)
//     {
//        case "touchstart": type = "mousedown"; break;
//        case "touchmove":  type = "mousemove"; break;
//        case "touchend":   type = "mouseup"; break;
//        default: return;
//     }
//
//     var simulatedEvent = document.createEvent("MouseEvent");
//     simulatedEvent.initMouseEvent(type, true, true, window, 1,
//                           first.screenX, first.screenY,
//                           first.clientX, first.clientY, false,
//                           false, false, false, 0/*left*/, null);
//
//     first.target.dispatchEvent(simulatedEvent);
//     event.preventDefault();
// }
//
// function init() {
//     document.addEventListener("touchstart", touchHandler, true);
//     document.addEventListener("touchmove", touchHandler, true);
//     document.addEventListener("touchend", touchHandler, true);
//     document.addEventListener("touchcancel", touchHandler, true);
// }


//$('#calculate_button').trigger('click');



// $("#calculate_button").click(function (event) {
//     // event.preventDefault();
//      // event.stopImmediatePropagation();
//      // event.stopPropagation();
//     console.log('hello');
//     resetForm();
//     showLoader();
//     window.scrollTo({top:500,behavior:"smooth"});
//     delayTimer(calculateResults);
//     // calculateResults();
// });

