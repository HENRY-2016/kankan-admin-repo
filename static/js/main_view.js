


// ===============================================================
// view page
function Hide_view_orders_divs ()
{
    document.getElementById("subdealer-orders-received-view-all-div").style.display = "none";
    document.getElementById("subdealer-orders-received-date-div").style.display = "none";
    document.getElementById("subdealer-orders-received-from-to-div").style.display = "none";
    document.getElementById("subdealer-orders-received-last-week-div").style.display = "none";
    document.getElementById("subdealer-orders-received-this-month-div").style.display = "none";
    document.getElementById("subdealer-orders-received-last-month-div").style.display = "none";
}


// ===============================================================
// SUBDEALER VIEW ............
function show_subdealer_orders_received_view_all_div ()
{
    document.getElementById("subdealer-orders-received-date-div").style.display ="none";
    document.getElementById("subdealer-orders-received-last-week-div").style.display ="none";
    document.getElementById("subdealer-orders-received-from-to-div").style.display ="none";
    document.getElementById("subdealer-orders-received-this-month-div").style.display ="none";
    document.getElementById("subdealer-orders-received-last-month-div").style.display ="none";
    document.getElementById("subdealer-orders-received-view-all-div").style.display ="block";
}function close_subdealer_orders_received_view_all_div () {document.getElementById("subdealer-orders-received-view-all-div").style.display ="none";}

function show_subdealer_orders_received_view_date_div ()
{
    document.getElementById("subdealer-orders-received-last-week-div").style.display ="none";
    document.getElementById("subdealer-orders-received-from-to-div").style.display ="none";
    document.getElementById("subdealer-orders-received-this-month-div").style.display ="none";
    document.getElementById("subdealer-orders-received-view-all-div").style.display ="none";
    document.getElementById("subdealer-orders-received-last-month-div").style.display ="none";
    document.getElementById("subdealer-orders-received-date-div").style.display ="block";
}

function show_subdealer_orders_received_view_last_week_div ()
{
    document.getElementById("subdealer-orders-received-date-div").style.display ="none";
    document.getElementById("subdealer-orders-received-from-to-div").style.display ="none";
    document.getElementById("subdealer-orders-received-this-month-div").style.display ="none";
    document.getElementById("subdealer-orders-received-view-all-div").style.display ="none";
    document.getElementById("subdealer-orders-received-last-month-div").style.display ="none";
    document.getElementById("subdealer-orders-received-last-week-div").style.display ="block";
}

function show_subdealer_orders_received_from_to_week_div ()
{
    document.getElementById("subdealer-orders-received-date-div").style.display ="none";
    document.getElementById("subdealer-orders-received-this-month-div").style.display ="none";
    document.getElementById("subdealer-orders-received-view-all-div").style.display ="none";
    document.getElementById("subdealer-orders-received-last-month-div").style.display ="none";
    document.getElementById("subdealer-orders-received-last-week-div").style.display ="none";
    document.getElementById("subdealer-orders-received-from-to-div").style.display ="block";
}


function show_subdealer_orders_received_view_last_week_div ()
{
    document.getElementById("subdealer-orders-received-date-div").style.display ="none";
    document.getElementById("subdealer-orders-received-from-to-div").style.display ="none";
    document.getElementById("subdealer-orders-received-this-month-div").style.display ="none";
    document.getElementById("subdealer-orders-received-view-all-div").style.display ="none";
    document.getElementById("subdealer-orders-received-last-month-div").style.display ="none";
    document.getElementById("subdealer-orders-received-last-week-div").style.display ="block";
}

function show_subdealer_orders_received_view_this_month_div ()
{
    document.getElementById("subdealer-orders-received-last-week-div").style.display ="none";
    document.getElementById("subdealer-orders-received-from-to-div").style.display ="none";
    document.getElementById("subdealer-orders-received-view-all-div").style.display ="none";
    document.getElementById("subdealer-orders-received-last-month-div").style.display ="none";
    document.getElementById("subdealer-orders-received-date-div").style.display ="none";
    document.getElementById("subdealer-orders-received-this-month-div").style.display ="block";
}
function show_subdealer_orders_received_view_last_month_div ()
{
    document.getElementById("subdealer-orders-received-date-div").style.display ="none";
    document.getElementById("subdealer-orders-received-from-to-div").style.display ="none";
    document.getElementById("subdealer-orders-received-this-month-div").style.display ="none";
    document.getElementById("subdealer-orders-received-view-all-div").style.display ="none";
    document.getElementById("subdealer-orders-received-last-week-div").style.display ="none";
    document.getElementById("subdealer-orders-received-last-month-div").style.display ="block";
}
function show_subdealer_orders_received_date_today_grand_child_div ()
{
    document.getElementById("subdealer-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("subdealer-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("subdealer-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("subdealer-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("subdealer-orders-received-date-today-grand-child-div").style.display="block";
}function close_subdealer_orders_received_date_today_grand_child_div () {document.getElementById("subdealer-orders-received-date-today-grand-child-div").style.display="none";}

function show_subdealer_orders_received_date_grand_child_div ()
{
    document.getElementById("subdealer-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("subdealer-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("subdealer-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("subdealer-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("subdealer-orders-received-date-grand-child-div").style.display = "block";
}
function close_subdealer_orders_received_date_grand_child_div () {document.getElementById("subdealer-orders-received-date-grand-child-div").style.display="none";}


function show_subdealer_orders_received_from_to_grand_child_div (){document.getElementById("subdealer-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_subdealer_orders_received_from_to_grand_child_div () {document.getElementById("subdealer-orders-received-from-to-all-grand-child-div").style.display="none";}
function show_subdealer_orders_received_last_week_all_grand_child_div (){document.getElementById("subdealer-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_subdealer_orders_received_last_week_all_grand_child_div () {document.getElementById("subdealer-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_subdealer_orders_received_this_month_grand_child_div ()
{
    document.getElementById("subdealer-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("subdealer-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("subdealer-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("subdealer-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("subdealer-orders-received-last-week-div").style.display = "none";
    document.getElementById("subdealer-orders-received-last-month-div").style.display= "none";
    document.getElementById("subdealer-orders-received-this-month-div").style.display="block";
}function close_subdealer_orders_received_this_month_grand_child_div () {document.getElementById("subdealer-orders-received-this-month-div").style.display="none";}

function show_subdealer_orders_received_this_month_all_grand_child_div () {document.getElementById("subdealer-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_subdealer_orders_received_this_month_all_grand_child_div () {document.getElementById("subdealer-orders-received-this-month-all-grand-child-div").style.display = "none";}

function show_subdealer_orders_received_last_month_all_grand_child_div (){document.getElementById("subdealer-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_subdealer_orders_received_last_month_all_grand_child_div () {document.getElementById("subdealer-orders-received-last-month-by-all-grand-child-div").style.display="none";}
