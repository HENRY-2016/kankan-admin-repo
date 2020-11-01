
var src_url = "http://127.0.0.1:6060/";
// var src_url = "http://172.105.158.108:5500/";


var seconds = 1000;
var loader_seconds = 3000;

function Load_developer () {window.location="developer.html"}
function Load_index () {window.location = "index.html"}
function Load_orders_view  (){window.location = "ViewOrders.html"}
function Load_admin_edits () {window.location = "adminedits.html"}

function Load_food_view () {window.location="food.html"}
function Load_chips_view () {window.location="chips.html"}
function Load_piloa_view () {window.location="piloa.html"}
function Load_drinks_view () {window.location="drinks.html"}
function Load_salads_view () {window.location="salads.html"}
function Load_chicken_view () {window.location="chicken.html"}
function Load_luwombo_view () {window.location="luwombo.html"}
function Load_local_dish_view () {window.location="localdishe.html"}
function Load_break_fast_view () {window.location="breakfast.html"}
function Load_beverages_view_ () {window.location="beverages.html"}
function Load_goat_meat_view () {window.location="goatmeat.html"}
function Load_beef_liver_view () {window.location="beefliver.html"}


function Hide_all_Divs ()
{
    // mains
    document.getElementById("orders-panel-div").style.display="none";

    // new orders tab
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    
}

function Show_orders_panel_div (){document.getElementById("orders-panel-div").style.display = "block";}

































// New orders div
function Show_chips_new_orders_div ()
{
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("chips-new-orders-div").style.display="block";
}

function Show_piloa_new_orders_div ()
{
    // clearInterval(stopchips);
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display="block";
}

function Show_soft_drinks_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display="block";
}
function Show_fresh_drinks_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display="block";
}
function Show_salads_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display="block";
}

function Show_chicken_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display="block";
}


function Show_luwombo_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display="block";
}

function Show_localdishe_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display="block";
}
function Show_breakfast_other_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display="block";
}
function Show_breakfast_egg_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display="block";
}
function Show_breakfast_teas_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display="block";
}
function Show_beverages_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display="block";
}
function Show_goatmeat_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display="block";
}

function Show_beefliver_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display="block";
}





























