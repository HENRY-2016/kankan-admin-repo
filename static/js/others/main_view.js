/*
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            ==============
                                            | VIEW GUI   |
                                            ==============
//////////////////////////////////////////////////////////////////////////////////////////////////////

/*
+++++++++++++++++++++++++ ++
+                          +
+    VIEW PAGE   +
+                          +
++++++++++++++++++++++++++++
*/

// ===============================================================
// view page
function Hide_view_orders_divs ()
{
    // ROOT DIVS
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    // CHIPS CHILD DIVS
    document.getElementById("chips-orders-received-view-all-div").style.display ="none";
    document.getElementById("chips-orders-received-date-div").style.display ="none";
    document.getElementById("chips-orders-received-date-div").style.display ="none";
    document.getElementById("chips-orders-received-last-week-div").style.display ="none";
    document.getElementById("chips-orders-received-from-to-div").style.display ="none";
    document.getElementById("chips-orders-received-this-month-div").style.display ="none";
    document.getElementById("chips-orders-received-last-month-div").style.display ="none";
    // PILOA CHILD DIVS
    document.getElementById("piloa-orders-received-view-all-div").style.display ="none";
    document.getElementById("piloa-orders-received-date-div").style.display ="none";
    document.getElementById("piloa-orders-received-date-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-week-div").style.display ="none";
    document.getElementById("piloa-orders-received-from-to-div").style.display ="none";
    document.getElementById("piloa-orders-received-this-month-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-month-div").style.display ="none";
    // DRINKS CHILD DIVS
    document.getElementById("soft-drinks-orders-received-view-all-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-last-week-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-from-to-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-this-month-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-last-month-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-view-all-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-last-week-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-from-to-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-this-month-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-last-month-div").style.display ="none";
    // SALADS CHILD DIVS
    document.getElementById("salads-orders-received-view-all-div").style.display ="none";
    document.getElementById("salads-orders-received-date-div").style.display ="none";
    document.getElementById("salads-orders-received-date-div").style.display ="none";
    document.getElementById("salads-orders-received-last-week-div").style.display ="none";
    document.getElementById("salads-orders-received-from-to-div").style.display ="none";
    document.getElementById("salads-orders-received-this-month-div").style.display ="none";
    document.getElementById("salads-orders-received-last-month-div").style.display ="none";
    // CHICKEN CHILD DIVS
    document.getElementById("chicken-orders-received-view-all-div").style.display ="none";
    document.getElementById("chicken-orders-received-date-div").style.display ="none";
    document.getElementById("chicken-orders-received-date-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-week-div").style.display ="none";
    document.getElementById("chicken-orders-received-from-to-div").style.display ="none";
    document.getElementById("chicken-orders-received-this-month-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-month-div").style.display ="none";
    // LUWOMBO CHILD DIVS
    document.getElementById("luwombo-orders-received-view-all-div").style.display ="none";
    document.getElementById("luwombo-orders-received-date-div").style.display ="none";
    document.getElementById("luwombo-orders-received-date-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-week-div").style.display ="none";
    document.getElementById("luwombo-orders-received-from-to-div").style.display ="none";
    document.getElementById("luwombo-orders-received-this-month-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-month-div").style.display ="none";
    // LOCAL DISH CHILD DIVS
    document.getElementById("localdishe-orders-received-view-all-div").style.display ="none";
    document.getElementById("localdishe-orders-received-date-div").style.display ="none";
    document.getElementById("localdishe-orders-received-date-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-week-div").style.display ="none";
    document.getElementById("localdishe-orders-received-from-to-div").style.display ="none";
    document.getElementById("localdishe-orders-received-this-month-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-month-div").style.display ="none";
    // BREAK FAST CHILD DIVS
    document.getElementById("breakfast-other-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-last-week-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-last-week-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-last-week-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-last-month-div").style.display ="none";
    // BEVERAGES CHILD DIVS
    document.getElementById("beverages-orders-received-view-all-div").style.display ="none";
    document.getElementById("beverages-orders-received-date-div").style.display ="none";
    document.getElementById("beverages-orders-received-date-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-week-div").style.display ="none";
    document.getElementById("beverages-orders-received-from-to-div").style.display ="none";
    document.getElementById("beverages-orders-received-this-month-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-month-div").style.display ="none";
    // GOAT MEAT CHILD DIVS
    document.getElementById("goatmeat-orders-received-view-all-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-date-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-date-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-week-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-from-to-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-this-month-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-month-div").style.display ="none";
    // BEEF LIVER CHILD DIVS
    document.getElementById("beefliver-orders-received-view-all-div").style.display ="none";
    document.getElementById("beefliver-orders-received-date-div").style.display ="none";
    document.getElementById("beefliver-orders-received-date-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-week-div").style.display ="none";
    document.getElementById("beefliver-orders-received-from-to-div").style.display ="none";
    document.getElementById("beefliver-orders-received-this-month-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-month-div").style.display ="none";
    // CHIPS GRAND CHILD DIVS
    document.getElementById("chips-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("chips-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("chips-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-last-month-by-all-grand-child-div").style.display = "none";
    // PILOA GRAND CHILD DIVS
    document.getElementById("piloa-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("piloa-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("piloa-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("piloa-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("piloa-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("piloa-orders-received-last-month-by-all-grand-child-div").style.display = "none";
    // DRINKS GRAND CHILD DIVS
    document.getElementById("soft-drinks-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("soft-drinks-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("soft-drinks-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("soft-drinks-orders-received-last-month-by-all-grand-child-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("fresh-drinks-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("fresh-drinks-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("fresh-drinks-orders-received-last-month-by-all-grand-child-div").style.display = "none";

    // SALADS GRAND CHILD DIVS
    document.getElementById("salads-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("salads-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("salads-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("salads-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("salads-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("salads-orders-received-last-month-by-all-grand-child-div").style.display = "none";
    // CHICKEN GRAND CHILD DIVS
    document.getElementById("chicken-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("chicken-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("chicken-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("chicken-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("chicken-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("chicken-orders-received-last-month-by-all-grand-child-div").style.display = "none";
    // LUWOMBO GRAND CHILD DIVS
    document.getElementById("chicken-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("chicken-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("chicken-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("chicken-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("chicken-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("chicken-orders-received-last-month-by-all-grand-child-div").style.display = "none";
    // LOCAL DISH GRAND CHILD DIVS
    document.getElementById("localdishe-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("localdishe-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("localdishe-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("localdishe-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("localdishe-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("localdishe-orders-received-last-month-by-all-grand-child-div").style.display = "none";
    // BREAK FAST GRAND CHILD DIVS
    document.getElementById("breakfast-other-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("breakfast-egg-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("breakfast-teas-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("breakfast-other-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-egg-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-teas-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-other-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-egg-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-teas-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-other-orders-received-last-month-by-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-last-month-by-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-last-month-by-all-grand-child-div").style.display = "none";

    // BEVERAGES GRAND CHILD DIVS
    document.getElementById("beverages-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("beverages-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("beverages-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("beverages-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("beverages-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("beverages-orders-received-last-month-by-all-grand-child-div").style.display = "none";
    // GOAT MEAT GRAND CHILD DIVS
    document.getElementById("goatmeat-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("goatmeat-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("goatmeat-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("goatmeat-orders-received-last-month-by-all-grand-child-div").style.display = "none";
    // BEEF LIVER GRAND CHILD DIVS
    document.getElementById("beefliver-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("beefliver-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("beefliver-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("beefliver-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("beefliver-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("beefliver-orders-received-last-month-by-all-grand-child-div").style.display = "none";
    // CHIPS LOADERS ---
    document.getElementById("chips-orders-received-loader-all").style.display = "none";
    document.getElementById("chips-orders-received-loader-date-today").style.display = "none";
    document.getElementById("chips-orders-received-loader-date-date").style.display = "none";
    document.getElementById("chips-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("chips-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("chips-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("chips-orders-received-loader-last-month-all").style.display = "none";
    // PILOA LOADERS ---
    document.getElementById("piloa-orders-received-loader-all").style.display = "none";
    document.getElementById("piloa-orders-received-loader-date-today").style.display = "none";
    document.getElementById("piloa-orders-received-loader-date-date").style.display = "none";
    document.getElementById("piloa-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("piloa-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("piloa-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("piloa-orders-received-loader-last-month-all").style.display = "none";
    // DRINKS LOADERS ---
    document.getElementById("soft-drinks-orders-received-loader-all").style.display = "none";
    document.getElementById("soft-drinks-orders-received-loader-date-today").style.display = "none";
    document.getElementById("soft-drinks-orders-received-loader-date-date").style.display = "none";
    document.getElementById("soft-drinks-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("soft-drinks-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("soft-drinks-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("soft-drinks-orders-received-loader-last-month-all").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-loader-all").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-loader-date-today").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-loader-date-date").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-loader-last-month-all").style.display = "none";

    // SALADS LOADERS ---
    document.getElementById("salads-orders-received-loader-all").style.display = "none";
    document.getElementById("salads-orders-received-loader-date-today").style.display = "none";
    document.getElementById("salads-orders-received-loader-date-date").style.display = "none";
    document.getElementById("salads-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("salads-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("salads-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("salads-orders-received-loader-last-month-all").style.display = "none";
    // CHICKEN LOADERS ---
    document.getElementById("chicken-orders-received-loader-all").style.display = "none";
    document.getElementById("chicken-orders-received-loader-date-today").style.display = "none";
    document.getElementById("chicken-orders-received-loader-date-date").style.display = "none";
    document.getElementById("chicken-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("chicken-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("chicken-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("chicken-orders-received-loader-last-month-all").style.display = "none";
    // LUWOMBO LOADERS ---
    document.getElementById("luwombo-orders-received-loader-all").style.display = "none";
    document.getElementById("luwombo-orders-received-loader-date-today").style.display = "none";
    document.getElementById("luwombo-orders-received-loader-date-date").style.display = "none";
    document.getElementById("luwombo-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("luwombo-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("luwombo-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("luwombo-orders-received-loader-last-month-all").style.display = "none";
    // LOCAL DISH LOADERS ---
    document.getElementById("localdishe-orders-received-loader-all").style.display = "none";
    document.getElementById("localdishe-orders-received-loader-date-today").style.display = "none";
    document.getElementById("localdishe-orders-received-loader-date-date").style.display = "none";
    document.getElementById("localdishe-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("localdishe-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("localdishe-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("localdishe-orders-received-loader-last-month-all").style.display = "none";
    // BREAKFAST LOADERS ---
    document.getElementById("breakfast-other-orders-received-loader-all").style.display = "none";
    document.getElementById("breakfast-other-orders-received-loader-date-today").style.display = "none";
    document.getElementById("breakfast-other-orders-received-loader-date-date").style.display = "none";
    document.getElementById("breakfast-other-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("breakfast-other-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("breakfast-other-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("breakfast-other-orders-received-loader-last-month-all").style.display = "none";

    document.getElementById("breakfast-egg-orders-received-loader-all").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-loader-date-today").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-loader-date-date").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-loader-last-month-all").style.display = "none";

    document.getElementById("breakfast-teas-orders-received-loader-all").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-loader-date-today").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-loader-date-date").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-loader-last-month-all").style.display = "none";

    // BEVERAGES LOADERS ---
    document.getElementById("beverages-orders-received-loader-all").style.display = "none";
    document.getElementById("beverages-orders-received-loader-date-today").style.display = "none";
    document.getElementById("beverages-orders-received-loader-date-date").style.display = "none";
    document.getElementById("beverages-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("beverages-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("beverages-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("beverages-orders-received-loader-last-month-all").style.display = "none";

    // GOAT'S LOADERS ---
    document.getElementById("goatmeat-orders-received-loader-all").style.display = "none";
    document.getElementById("goatmeat-orders-received-loader-date-today").style.display = "none";
    document.getElementById("goatmeat-orders-received-loader-date-date").style.display = "none";
    document.getElementById("goatmeat-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("goatmeat-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("goatmeat-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("goatmeat-orders-received-loader-last-month-all").style.display = "none";
    // GOAT'S BEAF LIVER ---
    document.getElementById("beefliver-orders-received-loader-all").style.display = "none";
    document.getElementById("beefliver-orders-received-loader-date-today").style.display = "none";
    document.getElementById("beefliver-orders-received-loader-date-date").style.display = "none";
    document.getElementById("beefliver-orders-received-loader-last-week-all").style.display = "none";
    document.getElementById("beefliver-orders-received-loader-from-to-all").style.display = "none";
    document.getElementById("beefliver-orders-received-loader-this-month-all").style.display = "none";
    document.getElementById("beefliver-orders-received-loader-last-month-all").style.display = "none";
}








// =============================================================
// SHOW ROOT DIVS
function Show_chips_orders_received_root_div ()
{
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    document.getElementById("chips-orders-received-root-div").style.display = "block";
}
function Show_piloa_orders_received_root_div ()
{
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "block";
}

function Show_soft_drinks_orders_received_root_div ()
{
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "block";
}
function Show_fresh_drinks_orders_received_root_div ()
{
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "block";
}

function Show_salads_orders_received_root_div ()
{
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "block";
}
function Show_chicken_orders_received_root_div ()
{
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "block";
}

function Show_luwombo_orders_received_root_div ()
{
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "block";
}

function Show_localdishe_orders_received_root_div ()
{
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "block";
}

function Show_breakfast_other_orders_received_root_div ()
{
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "block";
}
function Show_breakfast_egg_orders_received_root_div ()
{
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "block";
}
function Show_breakfast_teas_orders_received_root_div ()
{
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "block";
}


function Show_beverages_orders_received_root_div ()
{
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "block";
}

function Show_goatmeat_orders_received_root_div ()
{
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "block";
}

function Show_beefliver_orders_received_root_div ()
{
    document.getElementById("chips-orders-received-root-div").style.display = "none";
    document.getElementById("piloa-orders-received-root-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-root-div").style.display = "none";
    document.getElementById("salads-orders-received-root-div").style.display = "none";
    document.getElementById("chicken-orders-received-root-div").style.display = "none";
    document.getElementById("luwombo-orders-received-root-div").style.display = "none";
    document.getElementById("localdishe-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-root-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-root-div").style.display = "none";
    document.getElementById("beverages-orders-received-root-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-root-div").style.display = "none";
    document.getElementById("beefliver-orders-received-root-div").style.display = "block";
}







// ===============================================================
// CHIPS VIEW ............
function show_chips_orders_received_view_all_div ()
{
    document.getElementById("chips-orders-received-date-div").style.display ="none";
    document.getElementById("chips-orders-received-last-week-div").style.display ="none";
    document.getElementById("chips-orders-received-from-to-div").style.display ="none";
    document.getElementById("chips-orders-received-this-month-div").style.display ="none";
    document.getElementById("chips-orders-received-last-month-div").style.display ="none";
    document.getElementById("chips-orders-received-view-all-div").style.display ="block";
}function close_chips_orders_received_view_all_div () {document.getElementById("chips-orders-received-view-all-div").style.display ="none";}

function show_chips_orders_received_view_date_div ()
{
    document.getElementById("chips-orders-received-last-week-div").style.display ="none";
    document.getElementById("chips-orders-received-from-to-div").style.display ="none";
    document.getElementById("chips-orders-received-this-month-div").style.display ="none";
    document.getElementById("chips-orders-received-view-all-div").style.display ="none";
    document.getElementById("chips-orders-received-last-month-div").style.display ="none";
    document.getElementById("chips-orders-received-date-div").style.display ="block";
}

function show_chips_orders_received_view_last_week_div ()
{
    document.getElementById("chips-orders-received-date-div").style.display ="none";
    document.getElementById("chips-orders-received-from-to-div").style.display ="none";
    document.getElementById("chips-orders-received-this-month-div").style.display ="none";
    document.getElementById("chips-orders-received-view-all-div").style.display ="none";
    document.getElementById("chips-orders-received-last-month-div").style.display ="none";
    document.getElementById("chips-orders-received-last-week-div").style.display ="block";
}

function show_chips_orders_received_from_to_week_div ()
{
    document.getElementById("chips-orders-received-date-div").style.display ="none";
    document.getElementById("chips-orders-received-this-month-div").style.display ="none";
    document.getElementById("chips-orders-received-view-all-div").style.display ="none";
    document.getElementById("chips-orders-received-last-month-div").style.display ="none";
    document.getElementById("chips-orders-received-last-week-div").style.display ="none";
    document.getElementById("chips-orders-received-from-to-div").style.display ="block";
}


function show_chips_orders_received_view_last_week_div ()
{
    document.getElementById("chips-orders-received-date-div").style.display ="none";
    document.getElementById("chips-orders-received-from-to-div").style.display ="none";
    document.getElementById("chips-orders-received-this-month-div").style.display ="none";
    document.getElementById("chips-orders-received-view-all-div").style.display ="none";
    document.getElementById("chips-orders-received-last-month-div").style.display ="none";
    document.getElementById("chips-orders-received-last-week-div").style.display ="block";
}

function show_chips_orders_received_view_this_month_div ()
{
    document.getElementById("chips-orders-received-last-week-div").style.display ="none";
    document.getElementById("chips-orders-received-from-to-div").style.display ="none";
    document.getElementById("chips-orders-received-view-all-div").style.display ="none";
    document.getElementById("chips-orders-received-last-month-div").style.display ="none";
    document.getElementById("chips-orders-received-date-div").style.display ="none";
    document.getElementById("chips-orders-received-this-month-div").style.display ="block";
}
function show_chips_orders_received_view_last_month_div ()
{
    document.getElementById("chips-orders-received-date-div").style.display ="none";
    document.getElementById("chips-orders-received-from-to-div").style.display ="none";
    document.getElementById("chips-orders-received-this-month-div").style.display ="none";
    document.getElementById("chips-orders-received-view-all-div").style.display ="none";
    document.getElementById("chips-orders-received-last-week-div").style.display ="none";
    document.getElementById("chips-orders-received-last-month-div").style.display ="block";
}
function show_chips_orders_received_date_today_grand_child_div ()
{
    document.getElementById("chips-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("chips-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("chips-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-date-today-grand-child-div").style.display="block";
}function close_chips_orders_received_date_today_grand_child_div () {document.getElementById("chips-orders-received-date-today-grand-child-div").style.display="none";}

function show_chips_orders_received_date_grand_child_div ()
{
    document.getElementById("chips-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("chips-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-date-grand-child-div").style.display = "block";
}
function close_chips_orders_received_date_grand_child_div () {document.getElementById("chips-orders-received-date-grand-child-div").style.display="none";}


function show_chips_orders_received_from_to_grand_child_div (){document.getElementById("chips-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_chips_orders_received_from_to_grand_child_div () {document.getElementById("chips-orders-received-from-to-all-grand-child-div").style.display="none";}
function show_chips_orders_received_last_week_all_grand_child_div (){document.getElementById("chips-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_chips_orders_received_last_week_all_grand_child_div () {document.getElementById("chips-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_chips_orders_received_this_month_grand_child_div ()
{
    document.getElementById("chips-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("chips-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("chips-orders-received-last-week-div").style.display = "none";
    document.getElementById("chips-orders-received-last-month-div").style.display= "none";
    document.getElementById("chips-orders-received-this-month-div").style.display="block";
}function close_chips_orders_received_this_month_grand_child_div () {document.getElementById("chips-orders-received-this-month-div").style.display="none";}

function show_chips_orders_received_this_month_all_grand_child_div () {document.getElementById("chips-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_chips_orders_received_this_month_all_grand_child_div () {document.getElementById("chips-orders-received-this-month-all-grand-child-div").style.display = "none";}

function show_chips_orders_received_last_month_all_grand_child_div (){document.getElementById("chips-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_chips_orders_received_last_month_all_grand_child_div () {document.getElementById("chips-orders-received-last-month-by-all-grand-child-div").style.display="none";}









// ===============================================================
// PILOA VIEW.............

function show_piloa_orders_received_view_all_div ()
{
    document.getElementById("piloa-orders-received-date-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-week-div").style.display ="none";
    document.getElementById("piloa-orders-received-from-to-div").style.display ="none";
    document.getElementById("piloa-orders-received-this-month-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-month-div").style.display ="none";
    document.getElementById("piloa-orders-received-view-all-div").style.display ="block";
}function close_piloa_orders_received_view_all_div () {document.getElementById("piloa-orders-received-view-all-div").style.display ="none";}

function show_piloa_orders_received_view_date_div ()
{
    document.getElementById("piloa-orders-received-last-week-div").style.display ="none";
    document.getElementById("piloa-orders-received-from-to-div").style.display ="none";
    document.getElementById("piloa-orders-received-this-month-div").style.display ="none";
    document.getElementById("piloa-orders-received-view-all-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-month-div").style.display ="none";
    document.getElementById("piloa-orders-received-date-div").style.display ="block";
}

function show_piloa_orders_received_view_last_week_div ()
{
    document.getElementById("piloa-orders-received-date-div").style.display ="none";
    document.getElementById("piloa-orders-received-from-to-div").style.display ="none";
    document.getElementById("piloa-orders-received-this-month-div").style.display ="none";
    document.getElementById("piloa-orders-received-view-all-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-month-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-week-div").style.display ="block";
}

function show_piloa_orders_received_from_to_week_div ()
{
    document.getElementById("piloa-orders-received-date-div").style.display ="none";
    document.getElementById("piloa-orders-received-this-month-div").style.display ="none";
    document.getElementById("piloa-orders-received-view-all-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-month-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-week-div").style.display ="none";
    document.getElementById("piloa-orders-received-from-to-div").style.display ="block";
}


function show_piloa_orders_received_view_last_week_div ()
{
    document.getElementById("piloa-orders-received-date-div").style.display ="none";
    document.getElementById("piloa-orders-received-from-to-div").style.display ="none";
    document.getElementById("piloa-orders-received-this-month-div").style.display ="none";
    document.getElementById("piloa-orders-received-view-all-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-month-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-week-div").style.display ="block";
}

function show_piloa_orders_received_view_this_month_div ()
{
    document.getElementById("piloa-orders-received-last-week-div").style.display ="none";
    document.getElementById("piloa-orders-received-from-to-div").style.display ="none";
    document.getElementById("piloa-orders-received-view-all-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-month-div").style.display ="none";
    document.getElementById("piloa-orders-received-date-div").style.display ="none";
    document.getElementById("piloa-orders-received-this-month-div").style.display ="block";
}
function show_piloa_orders_received_view_last_month_div ()
{
    document.getElementById("piloa-orders-received-date-div").style.display ="none";
    document.getElementById("piloa-orders-received-from-to-div").style.display ="none";
    document.getElementById("piloa-orders-received-this-month-div").style.display ="none";
    document.getElementById("piloa-orders-received-view-all-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-week-div").style.display ="none";
    document.getElementById("piloa-orders-received-last-month-div").style.display ="block";
}
function show_piloa_orders_received_date_today_grand_child_div ()
{
    document.getElementById("piloa-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("piloa-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("piloa-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("piloa-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("piloa-orders-received-date-today-grand-child-div").style.display="block";
}function close_piloa_orders_received_date_today_grand_child_div () {document.getElementById("piloa-orders-received-date-today-grand-child-div").style.display="none";}

function show_piloa_orders_received_date_grand_child_div ()
{
    document.getElementById("piloa-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("piloa-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("piloa-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("piloa-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("piloa-orders-received-date-grand-child-div").style.display = "block";
}
function close_piloa_orders_received_date_grand_child_div () {document.getElementById("piloa-orders-received-date-grand-child-div").style.display="none";}


function show_piloa_orders_received_from_to_grand_child_div (){document.getElementById("piloa-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_piloa_orders_received_from_to_grand_child_div () {document.getElementById("piloa-orders-received-from-to-all-grand-child-div").style.display="none";}

function show_piloa_orders_received_last_week_all_grand_child_div (){document.getElementById("piloa-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_piloa_orders_received_last_week_all_grand_child_div () {document.getElementById("piloa-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_piloa_orders_received_this_month_grand_child_div ()
{
    document.getElementById("piloa-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("piloa-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("piloa-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("piloa-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("piloa-orders-received-last-week-div").style.display = "none";
    document.getElementById("piloa-orders-received-last-month-div").style.display= "none";
    document.getElementById("piloa-orders-received-this-month-div").style.display="block";
}function close_piloa_orders_received_this_month_grand_child_div () {document.getElementById("piloa-orders-received-this-month-div").style.display="none";}

function show_piloa_orders_received_this_month_all_grand_child_div () {document.getElementById("piloa-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_piloa_orders_received_this_month_all_grand_child_div () {document.getElementById("piloa-orders-received-this-month-all-grand-child-div").style.display = "none";}

function show_piloa_orders_received_last_month_all_grand_child_div (){document.getElementById("piloa-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_piloa_orders_received_last_month_all_grand_child_div () {document.getElementById("piloa-orders-received-last-month-by-all-grand-child-div").style.display="none";}



// ===============================================================
// DRINKS VIEW ............

function show_soft_drinks_orders_received_view_all_div ()
{
    document.getElementById("soft-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-last-week-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-from-to-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-this-month-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-last-month-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-view-all-div").style.display ="block";
}function close_soft_drinks_orders_received_view_all_div () {document.getElementById("soft-drinks-orders-received-view-all-div").style.display ="none";}
function show_fresh_drinks_orders_received_view_all_div ()
{
    document.getElementById("fresh-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-last-week-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-from-to-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-this-month-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-last-month-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-view-all-div").style.display ="block";
}function close_fresh_drinks_orders_received_view_all_div () {document.getElementById("fresh-drinks-orders-received-view-all-div").style.display ="none";}

function show_soft_drinks_orders_received_view_date_div ()
{
    document.getElementById("soft-drinks-orders-received-last-week-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-from-to-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-this-month-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-view-all-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-last-month-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-date-div").style.display ="block";
}
function show_fresh_drinks_orders_received_view_date_div ()
{
    document.getElementById("fresh-drinks-orders-received-last-week-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-from-to-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-this-month-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-view-all-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-last-month-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-date-div").style.display ="block";
}

function show_soft_drinks_orders_received_view_last_week_div ()
{
    document.getElementById("soft-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-from-to-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-this-month-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-view-all-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-last-month-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-last-week-div").style.display ="block";
}
function show_fresh_drinks_orders_received_view_last_week_div ()
{
    document.getElementById("fresh-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-from-to-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-this-month-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-view-all-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-last-month-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-last-week-div").style.display ="block";
}
function show_soft_drinks_orders_received_from_to_week_div ()
{
    document.getElementById("soft-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-this-month-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-view-all-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-last-month-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-last-week-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-from-to-div").style.display ="block";
}function close_soft_drinks_orders_received_from_to_week_div (){document.getElementById("soft-drinks-orders-received-from-to-div").style.display ="none";}
function show_fresh_drinks_orders_received_from_to_week_div ()
{
    document.getElementById("fresh-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-this-month-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-view-all-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-last-month-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-last-week-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-from-to-div").style.display ="block";
}function close_fresh_drinks_orders_received_from_to_week_div (){document.getElementById("fresh-drinks-orders-received-from-to-div").style.display ="none";}

function show_soft_drinks_orders_received_view_this_month_div ()
{
    document.getElementById("soft-drinks-orders-received-last-week-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-from-to-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-view-all-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-last-month-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-this-month-div").style.display ="block";
}

function show_fresh_drinks_orders_received_view_this_month_div ()
{
    document.getElementById("fresh-drinks-orders-received-last-week-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-from-to-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-view-all-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-last-month-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-this-month-div").style.display ="block";
}
function show_soft_drinks_orders_received_view_last_month_div ()
{
    document.getElementById("soft-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-from-to-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-this-month-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-view-all-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-last-week-div").style.display ="none";
    document.getElementById("soft-drinks-orders-received-last-month-div").style.display ="block";
}
function show_fresh_drinks_orders_received_view_last_month_div ()
{
    document.getElementById("fresh-drinks-orders-received-date-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-from-to-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-this-month-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-view-all-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-last-week-div").style.display ="none";
    document.getElementById("fresh-drinks-orders-received-last-month-div").style.display ="block";
}

function show_soft_drinks_orders_received_date_today_grand_child_div ()
{
    document.getElementById("soft-drinks-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("soft-drinks-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("soft-drinks-orders-received-date-today-grand-child-div").style.display="block";
}function close_soft_drinks_orders_received_date_today_grand_child_div () {document.getElementById("soft-drinks-orders-received-date-today-grand-child-div").style.display="none";}
function show_fresh_drinks_orders_received_date_today_grand_child_div ()
{
    document.getElementById("fresh-drinks-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("fresh-drinks-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("fresh-drinks-orders-received-date-today-grand-child-div").style.display="block";
}function close_fresh_drinks_orders_received_date_today_grand_child_div () {document.getElementById("fresh-drinks-orders-received-date-today-grand-child-div").style.display="none";}

function show_soft_drinks_orders_received_date_grand_child_div ()
{
    document.getElementById("soft-drinks-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("soft-drinks-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("soft-drinks-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("soft-drinks-orders-received-date-grand-child-div").style.display = "block";
}function close_soft_drinks_orders_received_date_grand_child_div () {document.getElementById("soft-drinks-orders-received-date-grand-child-div").style.display="none";}

function show_fresh_drinks_orders_received_date_grand_child_div ()
{
    document.getElementById("fresh-drinks-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("fresh-drinks-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("fresh-drinks-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("fresh-drinks-orders-received-date-grand-child-div").style.display = "block";
}function close_fresh_drinks_orders_received_date_grand_child_div () {document.getElementById("fresh-drinks-orders-received-date-grand-child-div").style.display="none";}


function show_soft_drinks_orders_received_from_to_grand_child_div (){document.getElementById("soft-drinks-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_received_from_to_grand_child_div () {document.getElementById("soft-drinks-orders-received-from-to-all-grand-child-div").style.display="none";}
function show_soft_drinks_orders_received_last_week_all_grand_child_div (){document.getElementById("soft-drinks-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_soft_drinks_orders_received_last_week_all_grand_child_div () {document.getElementById("soft-drinks-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_fresh_drinks_orders_received_from_to_grand_child_div (){document.getElementById("fresh-drinks-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_received_from_to_grand_child_div () {document.getElementById("fresh-drinks-orders-received-from-to-all-grand-child-div").style.display="none";}
function show_fresh_drinks_orders_received_last_week_all_grand_child_div (){document.getElementById("fresh-drinks-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_fresh_drinks_orders_received_last_week_all_grand_child_div () {document.getElementById("fresh-drinks-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_soft_drinks_orders_received_this_month_grand_child_div ()
{
    document.getElementById("soft-drinks-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("soft-drinks-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("soft-drinks-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-last-week-div").style.display = "none";
    document.getElementById("soft-drinks-orders-received-last-month-div").style.display= "none";
    document.getElementById("soft-drinks-orders-received-this-month-div").style.display="block";
}function close_soft_drinks_orders_received_this_month_grand_child_div () {document.getElementById("soft-drinks-orders-received-this-month-div").style.display="none";}
function show_fresh_drinks_orders_received_this_month_grand_child_div ()
{
    document.getElementById("fresh-drinks-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("fresh-drinks-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("fresh-drinks-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-last-week-div").style.display = "none";
    document.getElementById("fresh-drinks-orders-received-last-month-div").style.display= "none";
    document.getElementById("fresh-drinks-orders-received-this-month-div").style.display="block";
}function close_fresh_drinks_orders_received_this_month_grand_child_div () {document.getElementById("fresh-drinks-orders-received-this-month-div").style.display="none";}

function show_soft_drinks_orders_received_this_month_all_grand_child_div () {document.getElementById("soft-drinks-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_soft_drinks_orders_received_this_month_all_grand_child_div () {document.getElementById("soft-drinks-orders-received-this-month-all-grand-child-div").style.display = "none";}
function show_soft_drinks_orders_received_last_month_all_grand_child_div (){document.getElementById("soft-drinks-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_soft_drinks_orders_received_last_month_all_grand_child_div () {document.getElementById("soft-drinks-orders-received-last-month-by-all-grand-child-div").style.display="none";}

function show_fresh_drinks_orders_received_this_month_all_grand_child_div () {document.getElementById("fresh-drinks-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_fresh_drinks_orders_received_this_month_all_grand_child_div () {document.getElementById("fresh-drinks-orders-received-this-month-all-grand-child-div").style.display = "none";}
function show_fresh_drinks_orders_received_last_month_all_grand_child_div (){document.getElementById("fresh-drinks-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_fresh_drinks_orders_received_last_month_all_grand_child_div () {document.getElementById("fresh-drinks-orders-received-last-month-by-all-grand-child-div").style.display="none";}


// ===============================================================
// SALADS VIEW ............

function show_salads_orders_received_view_all_div ()
{
    document.getElementById("salads-orders-received-date-div").style.display ="none";
    document.getElementById("salads-orders-received-last-week-div").style.display ="none";
    document.getElementById("salads-orders-received-from-to-div").style.display ="none";
    document.getElementById("salads-orders-received-this-month-div").style.display ="none";
    document.getElementById("salads-orders-received-last-month-div").style.display ="none";
    document.getElementById("salads-orders-received-view-all-div").style.display ="block";
}function close_salads_orders_received_view_all_div () {document.getElementById("salads-orders-received-view-all-div").style.display ="none";}

function show_salads_orders_received_view_date_div ()
{
    document.getElementById("salads-orders-received-last-week-div").style.display ="none";
    document.getElementById("salads-orders-received-from-to-div").style.display ="none";
    document.getElementById("salads-orders-received-this-month-div").style.display ="none";
    document.getElementById("salads-orders-received-view-all-div").style.display ="none";
    document.getElementById("salads-orders-received-last-month-div").style.display ="none";
    document.getElementById("salads-orders-received-date-div").style.display ="block";
}

function show_salads_orders_received_view_last_week_div ()
{
    document.getElementById("salads-orders-received-date-div").style.display ="none";
    document.getElementById("salads-orders-received-from-to-div").style.display ="none";
    document.getElementById("salads-orders-received-this-month-div").style.display ="none";
    document.getElementById("salads-orders-received-view-all-div").style.display ="none";
    document.getElementById("salads-orders-received-last-month-div").style.display ="none";
    document.getElementById("salads-orders-received-last-week-div").style.display ="block";
}

function show_salads_orders_received_from_to_week_div ()
{
    document.getElementById("salads-orders-received-date-div").style.display ="none";
    document.getElementById("salads-orders-received-this-month-div").style.display ="none";
    document.getElementById("salads-orders-received-view-all-div").style.display ="none";
    document.getElementById("salads-orders-received-last-month-div").style.display ="none";
    document.getElementById("salads-orders-received-last-week-div").style.display ="none";
    document.getElementById("salads-orders-received-from-to-div").style.display ="block";
}


function show_salads_orders_received_view_last_week_div ()
{
    document.getElementById("salads-orders-received-date-div").style.display ="none";
    document.getElementById("salads-orders-received-from-to-div").style.display ="none";
    document.getElementById("salads-orders-received-this-month-div").style.display ="none";
    document.getElementById("salads-orders-received-view-all-div").style.display ="none";
    document.getElementById("salads-orders-received-last-month-div").style.display ="none";
    document.getElementById("salads-orders-received-last-week-div").style.display ="block";
}

function show_salads_orders_received_view_this_month_div ()
{
    document.getElementById("salads-orders-received-last-week-div").style.display ="none";
    document.getElementById("salads-orders-received-from-to-div").style.display ="none";
    document.getElementById("salads-orders-received-view-all-div").style.display ="none";
    document.getElementById("salads-orders-received-last-month-div").style.display ="none";
    document.getElementById("salads-orders-received-date-div").style.display ="none";
    document.getElementById("salads-orders-received-this-month-div").style.display ="block";
}
function show_salads_orders_received_view_last_month_div ()
{
    document.getElementById("salads-orders-received-date-div").style.display ="none";
    document.getElementById("salads-orders-received-from-to-div").style.display ="none";
    document.getElementById("salads-orders-received-this-month-div").style.display ="none";
    document.getElementById("salads-orders-received-view-all-div").style.display ="none";
    document.getElementById("salads-orders-received-last-week-div").style.display ="none";
    document.getElementById("salads-orders-received-last-month-div").style.display ="block";
}
function show_salads_orders_received_date_today_grand_child_div ()
{
    document.getElementById("salads-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("salads-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("salads-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("salads-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("salads-orders-received-date-today-grand-child-div").style.display="block";
}function close_salads_orders_received_date_today_grand_child_div () {document.getElementById("salads-orders-received-date-today-grand-child-div").style.display="none";}

function show_salads_orders_received_date_grand_child_div ()
{
    document.getElementById("salads-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("salads-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("salads-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("salads-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("salads-orders-received-date-grand-child-div").style.display = "block";
}
function close_salads_orders_received_date_grand_child_div () {document.getElementById("salads-orders-received-date-grand-child-div").style.display="none";}


function show_salads_orders_received_from_to_grand_child_div (){document.getElementById("salads-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_salads_orders_received_from_to_grand_child_div () {document.getElementById("salads-orders-received-from-to-all-grand-child-div").style.display="none";}

function show_salads_orders_received_last_week_all_grand_child_div (){document.getElementById("salads-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_salads_orders_received_last_week_all_grand_child_div () {document.getElementById("salads-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_salads_orders_received_this_month_grand_child_div ()
{
    document.getElementById("salads-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("salads-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("salads-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("salads-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("salads-orders-received-last-week-div").style.display = "none";
    document.getElementById("salads-orders-received-last-month-div").style.display= "none";
    document.getElementById("salads-orders-received-this-month-div").style.display="block";
}function close_salads_orders_received_this_month_grand_child_div () {document.getElementById("salads-orders-received-this-month-div").style.display="none";}

function show_salads_orders_received_this_month_all_grand_child_div () {document.getElementById("salads-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_salads_orders_received_this_month_all_grand_child_div () {document.getElementById("salads-orders-received-this-month-all-grand-child-div").style.display = "none";}

function show_salads_orders_received_last_month_all_grand_child_div (){document.getElementById("salads-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_salads_orders_received_last_month_all_grand_child_div () {document.getElementById("salads-orders-received-last-month-by-all-grand-child-div").style.display="none";}


// ===============================================================
// CHICKEN VIEW ............

function show_chicken_orders_received_view_all_div ()
{
    document.getElementById("chicken-orders-received-date-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-week-div").style.display ="none";
    document.getElementById("chicken-orders-received-from-to-div").style.display ="none";
    document.getElementById("chicken-orders-received-this-month-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-month-div").style.display ="none";
    document.getElementById("chicken-orders-received-view-all-div").style.display ="block";
}function close_chicken_orders_received_view_all_div () {document.getElementById("chicken-orders-received-view-all-div").style.display ="none";}

function show_chicken_orders_received_view_date_div ()
{
    document.getElementById("chicken-orders-received-last-week-div").style.display ="none";
    document.getElementById("chicken-orders-received-from-to-div").style.display ="none";
    document.getElementById("chicken-orders-received-this-month-div").style.display ="none";
    document.getElementById("chicken-orders-received-view-all-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-month-div").style.display ="none";
    document.getElementById("chicken-orders-received-date-div").style.display ="block";
}

function show_chicken_orders_received_view_last_week_div ()
{
    document.getElementById("chicken-orders-received-date-div").style.display ="none";
    document.getElementById("chicken-orders-received-from-to-div").style.display ="none";
    document.getElementById("chicken-orders-received-this-month-div").style.display ="none";
    document.getElementById("chicken-orders-received-view-all-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-month-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-week-div").style.display ="block";
}

function show_chicken_orders_received_from_to_week_div ()
{
    document.getElementById("chicken-orders-received-date-div").style.display ="none";
    document.getElementById("chicken-orders-received-this-month-div").style.display ="none";
    document.getElementById("chicken-orders-received-view-all-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-month-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-week-div").style.display ="none";
    document.getElementById("chicken-orders-received-from-to-div").style.display ="block";
}


function show_chicken_orders_received_view_last_week_div ()
{
    document.getElementById("chicken-orders-received-date-div").style.display ="none";
    document.getElementById("chicken-orders-received-from-to-div").style.display ="none";
    document.getElementById("chicken-orders-received-this-month-div").style.display ="none";
    document.getElementById("chicken-orders-received-view-all-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-month-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-week-div").style.display ="block";
}

function show_chicken_orders_received_view_this_month_div ()
{
    document.getElementById("chicken-orders-received-last-week-div").style.display ="none";
    document.getElementById("chicken-orders-received-from-to-div").style.display ="none";
    document.getElementById("chicken-orders-received-view-all-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-month-div").style.display ="none";
    document.getElementById("chicken-orders-received-date-div").style.display ="none";
    document.getElementById("chicken-orders-received-this-month-div").style.display ="block";
}
function show_chicken_orders_received_view_last_month_div ()
{
    document.getElementById("chicken-orders-received-date-div").style.display ="none";
    document.getElementById("chicken-orders-received-from-to-div").style.display ="none";
    document.getElementById("chicken-orders-received-this-month-div").style.display ="none";
    document.getElementById("chicken-orders-received-view-all-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-week-div").style.display ="none";
    document.getElementById("chicken-orders-received-last-month-div").style.display ="block";
}
function show_chicken_orders_received_date_today_grand_child_div ()
{
    document.getElementById("chicken-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("chicken-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("chicken-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("chicken-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("chicken-orders-received-date-today-grand-child-div").style.display="block";
}function close_chicken_orders_received_date_today_grand_child_div () {document.getElementById("chicken-orders-received-date-today-grand-child-div").style.display="none";}

function show_chicken_orders_received_date_grand_child_div ()
{
    document.getElementById("chicken-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("chicken-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("chicken-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("chicken-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("chicken-orders-received-date-grand-child-div").style.display = "block";
}
function close_chicken_orders_received_date_grand_child_div () {document.getElementById("chicken-orders-received-date-grand-child-div").style.display="none";}


function show_chicken_orders_received_from_to_grand_child_div (){document.getElementById("chicken-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_chicken_orders_received_from_to_grand_child_div () {document.getElementById("chicken-orders-received-from-to-all-grand-child-div").style.display="none";}

function show_chicken_orders_received_last_week_all_grand_child_div (){document.getElementById("chicken-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_chicken_orders_received_last_week_all_grand_child_div () {document.getElementById("chicken-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_chicken_orders_received_this_month_grand_child_div ()
{
    document.getElementById("chicken-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("chicken-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("chicken-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("chicken-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("chicken-orders-received-last-week-div").style.display = "none";
    document.getElementById("chicken-orders-received-last-month-div").style.display= "none";
    document.getElementById("chicken-orders-received-this-month-div").style.display="block";
}function close_chicken_orders_received_this_month_grand_child_div () {document.getElementById("chicken-orders-received-this-month-div").style.display="none";}

function show_chicken_orders_received_this_month_all_grand_child_div () {document.getElementById("chicken-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_chicken_orders_received_this_month_all_grand_child_div () {document.getElementById("chicken-orders-received-this-month-all-grand-child-div").style.display = "none";}

function show_chicken_orders_received_last_month_all_grand_child_div (){document.getElementById("chicken-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_chicken_orders_received_last_month_all_grand_child_div () {document.getElementById("chicken-orders-received-last-month-by-all-grand-child-div").style.display="none";}


// ===============================================================
// LUWOMBO VIEW ............

function show_luwombo_orders_received_view_all_div ()
{
    document.getElementById("luwombo-orders-received-date-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-week-div").style.display ="none";
    document.getElementById("luwombo-orders-received-from-to-div").style.display ="none";
    document.getElementById("luwombo-orders-received-this-month-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-month-div").style.display ="none";
    document.getElementById("luwombo-orders-received-view-all-div").style.display ="block";
}function close_luwombo_orders_received_view_all_div () {document.getElementById("luwombo-orders-received-view-all-div").style.display ="none";}

function show_luwombo_orders_received_view_date_div ()
{
    document.getElementById("luwombo-orders-received-last-week-div").style.display ="none";
    document.getElementById("luwombo-orders-received-from-to-div").style.display ="none";
    document.getElementById("luwombo-orders-received-this-month-div").style.display ="none";
    document.getElementById("luwombo-orders-received-view-all-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-month-div").style.display ="none";
    document.getElementById("luwombo-orders-received-date-div").style.display ="block";
}function close_luwombo_received_date_today_grand_child_div () {document.getElementById("luwombo-orders-received-date-div").style.display ="none";}
function show_luwombo_orders_received_view_last_week_div ()
{
    document.getElementById("luwombo-orders-received-date-div").style.display ="none";
    document.getElementById("luwombo-orders-received-from-to-div").style.display ="none";
    document.getElementById("luwombo-orders-received-this-month-div").style.display ="none";
    document.getElementById("luwombo-orders-received-view-all-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-month-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-week-div").style.display ="block";
}

function show_luwombo_orders_received_from_to_week_div ()
{
    document.getElementById("luwombo-orders-received-date-div").style.display ="none";
    document.getElementById("luwombo-orders-received-this-month-div").style.display ="none";
    document.getElementById("luwombo-orders-received-view-all-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-month-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-week-div").style.display ="none";
    document.getElementById("luwombo-orders-received-from-to-div").style.display ="block";
}


function show_luwombo_orders_received_view_last_week_div ()
{
    document.getElementById("luwombo-orders-received-date-div").style.display ="none";
    document.getElementById("luwombo-orders-received-from-to-div").style.display ="none";
    document.getElementById("luwombo-orders-received-this-month-div").style.display ="none";
    document.getElementById("luwombo-orders-received-view-all-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-month-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-week-div").style.display ="block";
}

function show_luwombo_orders_received_view_this_month_div ()
{
    document.getElementById("luwombo-orders-received-last-week-div").style.display ="none";
    document.getElementById("luwombo-orders-received-from-to-div").style.display ="none";
    document.getElementById("luwombo-orders-received-view-all-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-month-div").style.display ="none";
    document.getElementById("luwombo-orders-received-date-div").style.display ="none";
    document.getElementById("luwombo-orders-received-this-month-div").style.display ="block";
}
function show_luwombo_orders_received_view_last_month_div ()
{
    document.getElementById("luwombo-orders-received-date-div").style.display ="none";
    document.getElementById("luwombo-orders-received-from-to-div").style.display ="none";
    document.getElementById("luwombo-orders-received-this-month-div").style.display ="none";
    document.getElementById("luwombo-orders-received-view-all-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-week-div").style.display ="none";
    document.getElementById("luwombo-orders-received-last-month-div").style.display ="block";
}
function show_luwombo_orders_received_date_today_grand_child_div ()
{
    document.getElementById("luwombo-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("luwombo-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("luwombo-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("luwombo-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("luwombo-orders-received-date-today-grand-child-div").style.display="block";
}function close_luwombo_orders_received_date_today_grand_child_div () {document.getElementById("luwombo-orders-received-date-today-grand-child-div").style.display="none";}

function show_luwombo_orders_received_date_grand_child_div ()
{
    document.getElementById("luwombo-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("luwombo-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("luwombo-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("luwombo-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("luwombo-orders-received-date-grand-child-div").style.display = "block";
}
function close_luwombo_orders_received_date_grand_child_div () {document.getElementById("luwombo-orders-received-date-grand-child-div").style.display="none";}


function show_luwombo_orders_received_from_to_grand_child_div (){document.getElementById("luwombo-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_luwombo_orders_received_from_to_grand_child_div () {document.getElementById("luwombo-orders-received-from-to-all-grand-child-div").style.display="none";}

function show_luwombo_orders_received_last_week_all_grand_child_div (){document.getElementById("luwombo-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_luwombo_orders_received_last_week_all_grand_child_div () {document.getElementById("luwombo-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_luwombo_orders_received_this_month_grand_child_div ()
{
    document.getElementById("luwombo-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("luwombo-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("luwombo-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("luwombo-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("luwombo-orders-received-last-week-div").style.display = "none";
    document.getElementById("luwombo-orders-received-last-month-div").style.display= "none";
    document.getElementById("luwombo-orders-received-this-month-div").style.display="block";
}function close_luwombo_orders_received_this_month_grand_child_div () {document.getElementById("luwombo-orders-received-this-month-div").style.display="none";}

function show_luwombo_orders_received_this_month_all_grand_child_div () {document.getElementById("luwombo-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_luwombo_orders_received_this_month_all_grand_child_div () {document.getElementById("luwombo-orders-received-this-month-all-grand-child-div").style.display = "none";}

function show_luwombo_orders_received_last_month_all_grand_child_div (){document.getElementById("luwombo-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_luwombo_orders_received_last_month_all_grand_child_div () {document.getElementById("luwombo-orders-received-last-month-by-all-grand-child-div").style.display="none";}


// ===============================================================
// LOCAL DISH VIEW ............

function show_localdishe_orders_received_view_all_div ()
{
    document.getElementById("localdishe-orders-received-date-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-week-div").style.display ="none";
    document.getElementById("localdishe-orders-received-from-to-div").style.display ="none";
    document.getElementById("localdishe-orders-received-this-month-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-month-div").style.display ="none";
    document.getElementById("localdishe-orders-received-view-all-div").style.display ="block";
}function close_localdishe_orders_received_view_all_div () {document.getElementById("localdishe-orders-received-view-all-div").style.display ="none";}

function show_localdishe_orders_received_view_date_div ()
{
    document.getElementById("localdishe-orders-received-last-week-div").style.display ="none";
    document.getElementById("localdishe-orders-received-from-to-div").style.display ="none";
    document.getElementById("localdishe-orders-received-this-month-div").style.display ="none";
    document.getElementById("localdishe-orders-received-view-all-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-month-div").style.display ="none";
    document.getElementById("localdishe-orders-received-date-div").style.display ="block";
}

function show_localdishe_orders_received_view_last_week_div ()
{
    document.getElementById("localdishe-orders-received-date-div").style.display ="none";
    document.getElementById("localdishe-orders-received-from-to-div").style.display ="none";
    document.getElementById("localdishe-orders-received-this-month-div").style.display ="none";
    document.getElementById("localdishe-orders-received-view-all-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-month-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-week-div").style.display ="block";
}

function show_localdishe_orders_received_from_to_week_div ()
{
    document.getElementById("localdishe-orders-received-date-div").style.display ="none";
    document.getElementById("localdishe-orders-received-this-month-div").style.display ="none";
    document.getElementById("localdishe-orders-received-view-all-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-month-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-week-div").style.display ="none";
    document.getElementById("localdishe-orders-received-from-to-div").style.display ="block";
}


function show_localdishe_orders_received_view_last_week_div ()
{
    document.getElementById("localdishe-orders-received-date-div").style.display ="none";
    document.getElementById("localdishe-orders-received-from-to-div").style.display ="none";
    document.getElementById("localdishe-orders-received-this-month-div").style.display ="none";
    document.getElementById("localdishe-orders-received-view-all-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-month-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-week-div").style.display ="block";
}

function show_localdishe_orders_received_view_this_month_div ()
{
    document.getElementById("localdishe-orders-received-last-week-div").style.display ="none";
    document.getElementById("localdishe-orders-received-from-to-div").style.display ="none";
    document.getElementById("localdishe-orders-received-view-all-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-month-div").style.display ="none";
    document.getElementById("localdishe-orders-received-date-div").style.display ="none";
    document.getElementById("localdishe-orders-received-this-month-div").style.display ="block";
}
function show_localdishe_orders_received_view_last_month_div ()
{
    document.getElementById("localdishe-orders-received-date-div").style.display ="none";
    document.getElementById("localdishe-orders-received-from-to-div").style.display ="none";
    document.getElementById("localdishe-orders-received-this-month-div").style.display ="none";
    document.getElementById("localdishe-orders-received-view-all-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-week-div").style.display ="none";
    document.getElementById("localdishe-orders-received-last-month-div").style.display ="block";
}
function show_localdishe_orders_received_date_today_grand_child_div ()
{
    document.getElementById("localdishe-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("localdishe-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("localdishe-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("localdishe-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("localdishe-orders-received-date-today-grand-child-div").style.display="block";
}function close_localdishe_orders_received_date_today_grand_child_div () {document.getElementById("localdishe-orders-received-date-today-grand-child-div").style.display="none";}

function show_localdishe_orders_received_date_grand_child_div ()
{
    document.getElementById("localdishe-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("localdishe-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("localdishe-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("localdishe-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("localdishe-orders-received-date-grand-child-div").style.display = "block";
}
function close_localdishe_orders_received_date_grand_child_div () {document.getElementById("localdishe-orders-received-date-grand-child-div").style.display="none";}


function show_localdishe_orders_received_from_to_grand_child_div (){document.getElementById("localdishe-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_localdishe_orders_received_from_to_grand_child_div () {document.getElementById("localdishe-orders-received-from-to-all-grand-child-div").style.display="none";}

function show_localdishe_orders_received_last_week_all_grand_child_div (){document.getElementById("localdishe-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_localdishe_orders_received_last_week_all_grand_child_div () {document.getElementById("localdishe-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_localdishe_orders_received_this_month_grand_child_div ()
{
    document.getElementById("localdishe-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("localdishe-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("localdishe-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("localdishe-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("localdishe-orders-received-last-week-div").style.display = "none";
    document.getElementById("localdishe-orders-received-last-month-div").style.display= "none";
    document.getElementById("localdishe-orders-received-this-month-div").style.display="block";
}function close_localdishe_orders_received_this_month_grand_child_div () {document.getElementById("localdishe-orders-received-this-month-div").style.display="none";}

function show_localdishe_orders_received_this_month_all_grand_child_div () {document.getElementById("localdishe-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_localdishe_orders_received_this_month_all_grand_child_div () {document.getElementById("localdishe-orders-received-this-month-all-grand-child-div").style.display = "none";}

function show_localdishe_orders_received_last_month_all_grand_child_div (){document.getElementById("localdishe-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_localdishe_orders_received_last_month_all_grand_child_div () {document.getElementById("localdishe-orders-received-last-month-by-all-grand-child-div").style.display="none";}


// ===============================================================
// BREAK FAST VIEW ............

function show_breakfast_other_orders_received_view_all_div ()
{
    document.getElementById("breakfast-other-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-last-week-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-view-all-div").style.display ="block";
}function close_breakfast_other_orders_received_view_all_div () {document.getElementById("breakfast-other-orders-received-view-all-div").style.display ="none";}
function show_breakfast_egg_orders_received_view_all_div ()
{
    document.getElementById("breakfast-egg-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-last-week-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-view-all-div").style.display ="block";
}function close_breakfast_egg_orders_received_view_all_div () {document.getElementById("breakfast-egg-orders-received-view-all-div").style.display ="none";}
function show_breakfast_teas_orders_received_view_all_div ()
{
    document.getElementById("breakfast-teas-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-last-week-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-view-all-div").style.display ="block";
}function close_breakfast_teas_orders_received_view_all_div () {document.getElementById("breakfast-teas-orders-received-view-all-div").style.display ="none";}


function show_breakfast_other_orders_received_view_date_div ()
{
    document.getElementById("breakfast-other-orders-received-last-week-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-date-div").style.display ="block";
}
function show_breakfast_egg_orders_received_view_date_div ()
{
    document.getElementById("breakfast-egg-orders-received-last-week-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-date-div").style.display ="block";
}function close_breakfast_egg_received_date_today_grand_child_div () {document.getElementById("breakfast-egg-orders-received-date-div").style.display ="none";}
function show_breakfast_teas_orders_received_view_date_div ()
{
    document.getElementById("breakfast-teas-orders-received-last-week-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-date-div").style.display ="block";
}function close_breakfast_teas_received_date_today_grand_child_div () {document.getElementById("breakfast-teas-orders-received-date-div").style.display ="none";}


function show_breakfast_other_orders_received_view_last_week_div ()
{
    document.getElementById("breakfast-other-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-last-week-div").style.display ="block";
}
function show_breakfast_egg_orders_received_view_last_week_div ()
{
    document.getElementById("breakfast-egg-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-last-week-div").style.display ="block";
}
function show_breakfast_teas_orders_received_view_last_week_div ()
{
    document.getElementById("breakfast-teas-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-last-week-div").style.display ="block";
}

function show_breakfast_other_orders_received_from_to_week_div ()
{
    document.getElementById("breakfast-other-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-last-week-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-from-to-div").style.display ="block";
}
function show_breakfast_teas_orders_received_from_to_week_div ()
{
    document.getElementById("breakfast-teas-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-last-week-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-from-to-div").style.display ="block";
}
function show_breakfast_egg_orders_received_from_to_week_div ()
{
    document.getElementById("breakfast-egg-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-last-week-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-from-to-div").style.display ="block";
}

function show_breakfast_other_orders_received_view_last_week_div ()
{
    document.getElementById("breakfast-other-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-last-week-div").style.display ="block";
}
function show_breakfast_egg_orders_received_view_last_week_div ()
{
    document.getElementById("breakfast-egg-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-last-week-div").style.display ="block";
}
function show_breakfast_teas_orders_received_view_last_week_div ()
{
    document.getElementById("breakfast-teas-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-last-month-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-last-week-div").style.display ="block";
}

function show_breakfast_other_orders_received_view_last_month_div ()
{
    document.getElementById("breakfast-other-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-last-week-div").style.display ="none";
    document.getElementById("breakfast-other-orders-received-last-month-div").style.display ="block";
}
function show_breakfast_egg_orders_received_view_last_month_div ()
{
    document.getElementById("breakfast-egg-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-last-week-div").style.display ="none";
    document.getElementById("breakfast-egg-orders-received-last-month-div").style.display ="block";
}
function show_breakfast_teas_orders_received_view_last_month_div ()
{
    document.getElementById("breakfast-teas-orders-received-date-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-from-to-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-this-month-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-view-all-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-last-week-div").style.display ="none";
    document.getElementById("breakfast-teas-orders-received-last-month-div").style.display ="block";
}

function show_breakfast_other_orders_received_date_today_grand_child_div ()
{
    document.getElementById("breakfast-other-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-other-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-other-orders-received-date-today-grand-child-div").style.display="block";

}function close_breakfast_other_orders_received_date_today_grand_child_div () {document.getElementById("breakfast-other-orders-received-date-today-grand-child-div").style.display="none";}
function show_breakfast_egg_orders_received_date_today_grand_child_div ()
{
    document.getElementById("breakfast-egg-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-egg-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-egg-orders-received-date-today-grand-child-div").style.display="block";

}function close_breakfast_egg_orders_received_date_today_grand_child_div () {document.getElementById("breakfast-egg-orders-received-date-today-grand-child-div").style.display="none";}
function show_breakfast_teas_orders_received_date_today_grand_child_div ()
{
    document.getElementById("breakfast-teas-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-teas-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-teas-orders-received-date-today-grand-child-div").style.display="block";

}function close_breakfast_teas_orders_received_date_today_grand_child_div () {document.getElementById("breakfast-teas-orders-received-date-today-grand-child-div").style.display="none";}

function show_breakfast_other_orders_received_date_grand_child_div ()
{
    document.getElementById("breakfast-other-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("breakfast-other-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-other-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-other-orders-received-date-grand-child-div").style.display = "block";
}function close_breakfast_other_orders_received_date_grand_child_div () {document.getElementById("breakfast-other-orders-received-date-grand-child-div").style.display="none";}
function show_breakfast_teas_orders_received_date_grand_child_div ()
{
    document.getElementById("breakfast-teas-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("breakfast-teas-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-teas-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-teas-orders-received-date-grand-child-div").style.display = "block";
}function close_breakfast_teas_orders_received_date_grand_child_div () {document.getElementById("breakfast-teas-orders-received-date-grand-child-div").style.display="none";}
function show_breakfast_egg_orders_received_date_grand_child_div ()
{
    document.getElementById("breakfast-egg-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("breakfast-egg-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-egg-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-egg-orders-received-date-grand-child-div").style.display = "block";
}function close_breakfast_egg_orders_received_date_grand_child_div () {document.getElementById("breakfast-egg-orders-received-date-grand-child-div").style.display="none";}

function show_breakfast_other_orders_received_from_to_grand_child_div (){document.getElementById("breakfast-other-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_breakfast_other_received_from_to_grand_child_div () {document.getElementById("breakfast-other-orders-received-from-to-all-grand-child-div").style.display="none";}
function show_breakfast_egg_orders_received_from_to_grand_child_div (){document.getElementById("breakfast-egg-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_breakfast_egg_received_from_to_grand_child_div () {document.getElementById("breakfast-egg-orders-received-from-to-all-grand-child-div").style.display="none";}
function show_breakfast_teas_orders_received_from_to_grand_child_div (){document.getElementById("breakfast-teas-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_breakfast_teas_received_from_to_grand_child_div () {document.getElementById("breakfast-teas-orders-received-from-to-all-grand-child-div").style.display="none";}


function show_breakfast_others_orders_received_last_week_all_grand_child_div (){document.getElementById("breakfast-other-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_breakfast_other_orders_received_last_week_all_grand_child_div () {document.getElementById("breakfast-other-orders-received-last-week-all-grand-child-div").style.display="none";}
function show_breakfast_egg_orders_received_last_week_all_grand_child_div (){document.getElementById("breakfast-egg-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_breakfast_egg_orders_received_last_week_all_grand_child_div () {document.getElementById("breakfast-egg-orders-received-last-week-all-grand-child-div").style.display="none";}
function show_breakfast_teas_orders_received_last_week_all_grand_child_div (){document.getElementById("breakfast-teas-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_breakfast_teas_orders_received_last_week_all_grand_child_div () {document.getElementById("breakfast-teas-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_breakfast_other_orders_received_this_month_grand_child_div ()
{
    document.getElementById("breakfast-other-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("breakfast-other-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-other-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-last-week-div").style.display = "none";
    document.getElementById("breakfast-other-orders-received-last-month-div").style.display= "none";
    document.getElementById("breakfast-other-orders-received-this-month-div").style.display="block";
}function close_breakfast_other_orders_received_this_month_all_grand_child_div () {document.getElementById("breakfast-other-orders-received-this-month-div").style.display="none";}
function show_breakfast_egg_orders_received_this_month_grand_child_div ()
{
    document.getElementById("breakfast-egg-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("breakfast-egg-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-egg-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-last-week-div").style.display = "none";
    document.getElementById("breakfast-egg-orders-received-last-month-div").style.display= "none";
    document.getElementById("breakfast-egg-orders-received-this-month-div").style.display="block";
}function close_breakfast_egg_orders_received_this_month_all_grand_child_div () {document.getElementById("breakfast-egg-orders-received-this-month-div").style.display="none";}
function show_breakfast_teas_orders_received_this_month_grand_child_div ()
{
    document.getElementById("breakfast-teas-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("breakfast-teas-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("breakfast-teas-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-last-week-div").style.display = "none";
    document.getElementById("breakfast-teas-orders-received-last-month-div").style.display= "none";
    document.getElementById("breakfast-teas-orders-received-this-month-div").style.display="block";
}function close_breakfast_teas_orders_received_this_month_all_grand_child_div () {document.getElementById("breakfast-teas-orders-received-this-month-div").style.display="none";}


function show_breakfast_other_orders_received_this_month_all_grand_child_div () {document.getElementById("breakfast-other-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_breakfast_other_orders_received_this_month_all_grand_child_div () {document.getElementById("breakfast-other-orders-received-this-month-all-grand-child-div").style.display = "none";}
function show_breakfast_egg_orders_received_this_month_all_grand_child_div () {document.getElementById("breakfast-egg-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_breakfast_egg_orders_received_this_month_all_grand_child_div () {document.getElementById("breakfast-egg-orders-received-this-month-all-grand-child-div").style.display = "none";}
function show_breakfast_teas_orders_received_this_month_all_grand_child_div () {document.getElementById("breakfast-teas-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_breakfast_teas_orders_received_this_month_all_grand_child_div () {document.getElementById("breakfast-teas-orders-received-this-month-all-grand-child-div").style.display = "none";}


function show_breakfast_other_orders_received_last_month_all_grand_child_div (){document.getElementById("breakfast-other-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_breakfast_other_orders_received_last_month_all_grand_child_div () {document.getElementById("breakfast-other-orders-received-last-month-by-all-grand-child-div").style.display="none";}
function show_breakfast_egg_orders_received_last_month_all_grand_child_div (){document.getElementById("breakfast-egg-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_breakfast_egg_orders_received_last_month_all_grand_child_div () {document.getElementById("breakfast-egg-orders-received-last-month-by-all-grand-child-div").style.display="none";}
function show_breakfast_teas_orders_received_last_month_all_grand_child_div (){document.getElementById("breakfast-teas-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_breakfast_teas_orders_received_last_month_all_grand_child_div () {document.getElementById("breakfast-teas-orders-received-last-month-by-all-grand-child-div").style.display="none";}


// ===============================================================
// BEVERAGES VIEW ............

function show_beverages_orders_received_view_all_div ()
{
    document.getElementById("beverages-orders-received-date-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-week-div").style.display ="none";
    document.getElementById("beverages-orders-received-from-to-div").style.display ="none";
    document.getElementById("beverages-orders-received-this-month-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-month-div").style.display ="none";
    document.getElementById("beverages-orders-received-view-all-div").style.display ="block";
}function close_beverages_orders_received_view_all_div () {document.getElementById("beverages-orders-received-view-all-div").style.display ="none";}

function show_beverages_orders_received_view_date_div ()
{
    document.getElementById("beverages-orders-received-last-week-div").style.display ="none";
    document.getElementById("beverages-orders-received-from-to-div").style.display ="none";
    document.getElementById("beverages-orders-received-this-month-div").style.display ="none";
    document.getElementById("beverages-orders-received-view-all-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-month-div").style.display ="none";
    document.getElementById("beverages-orders-received-date-div").style.display ="block";
}

function show_beverages_orders_received_view_last_week_div ()
{
    document.getElementById("beverages-orders-received-date-div").style.display ="none";
    document.getElementById("beverages-orders-received-from-to-div").style.display ="none";
    document.getElementById("beverages-orders-received-this-month-div").style.display ="none";
    document.getElementById("beverages-orders-received-view-all-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-month-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-week-div").style.display ="block";
}

function show_beverages_orders_received_from_to_week_div ()
{
    document.getElementById("beverages-orders-received-date-div").style.display ="none";
    document.getElementById("beverages-orders-received-this-month-div").style.display ="none";
    document.getElementById("beverages-orders-received-view-all-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-month-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-week-div").style.display ="none";
    document.getElementById("beverages-orders-received-from-to-div").style.display ="block";
}


function show_beverages_orders_received_view_last_week_div ()
{
    document.getElementById("beverages-orders-received-date-div").style.display ="none";
    document.getElementById("beverages-orders-received-from-to-div").style.display ="none";
    document.getElementById("beverages-orders-received-this-month-div").style.display ="none";
    document.getElementById("beverages-orders-received-view-all-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-month-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-week-div").style.display ="block";
}

function show_beverages_orders_received_view_this_month_div ()
{
    document.getElementById("beverages-orders-received-last-week-div").style.display ="none";
    document.getElementById("beverages-orders-received-from-to-div").style.display ="none";
    document.getElementById("beverages-orders-received-view-all-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-month-div").style.display ="none";
    document.getElementById("beverages-orders-received-date-div").style.display ="none";
    document.getElementById("beverages-orders-received-this-month-div").style.display ="block";
}
function show_beverages_orders_received_view_last_month_div ()
{
    document.getElementById("beverages-orders-received-date-div").style.display ="none";
    document.getElementById("beverages-orders-received-from-to-div").style.display ="none";
    document.getElementById("beverages-orders-received-this-month-div").style.display ="none";
    document.getElementById("beverages-orders-received-view-all-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-week-div").style.display ="none";
    document.getElementById("beverages-orders-received-last-month-div").style.display ="block";
}
function show_beverages_orders_received_date_today_grand_child_div ()
{
    document.getElementById("beverages-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("beverages-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("beverages-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("beverages-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("beverages-orders-received-date-today-grand-child-div").style.display="block";
}function close_beverages_orders_received_date_today_grand_child_div () {document.getElementById("beverages-orders-received-date-today-grand-child-div").style.display="none";}

function show_beverages_orders_received_date_grand_child_div ()
{
    document.getElementById("beverages-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("beverages-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("beverages-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("beverages-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("beverages-orders-received-date-grand-child-div").style.display = "block";
}
function close_beverages_orders_received_date_grand_child_div () {document.getElementById("beverages-orders-received-date-grand-child-div").style.display="none";}


function show_beverages_orders_received_from_to_grand_child_div (){document.getElementById("beverages-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_beverages_orders_received_from_to_grand_child_div () {document.getElementById("beverages-orders-received-from-to-all-grand-child-div").style.display="none";}

function show_beverages_orders_received_last_week_all_grand_child_div (){document.getElementById("beverages-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_beverages_orders_received_last_week_all_grand_child_div () {document.getElementById("beverages-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_beverages_orders_received_this_month_grand_child_div ()
{
    document.getElementById("beverages-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("beverages-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("beverages-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("beverages-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("beverages-orders-received-last-week-div").style.display = "none";
    document.getElementById("beverages-orders-received-last-month-div").style.display= "none";
    document.getElementById("beverages-orders-received-this-month-div").style.display="block";
}function close_beverages_orders_received_this_month_grand_child_div () {document.getElementById("beverages-orders-received-this-month-div").style.display="none";}

function show_beverages_orders_received_this_month_all_grand_child_div () {document.getElementById("beverages-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_beverages_orders_received_this_month_all_grand_child_div () {document.getElementById("beverages-orders-received-this-month-all-grand-child-div").style.display = "none";}

function show_beverages_orders_received_last_month_all_grand_child_div (){document.getElementById("beverages-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_beverages_orders_received_last_month_all_grand_child_div () {document.getElementById("beverages-orders-received-last-month-by-all-grand-child-div").style.display="none";}


// ===============================================================
// GOAT'S MEAT VIEW ............

function show_goatmeat_orders_received_view_all_div ()
{
    document.getElementById("goatmeat-orders-received-date-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-week-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-from-to-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-this-month-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-month-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-view-all-div").style.display ="block";
}function close_goatmeat_orders_received_view_all_div () {document.getElementById("goatmeat-orders-received-view-all-div").style.display ="none";}

function show_goatmeat_orders_received_view_date_div ()
{
    document.getElementById("goatmeat-orders-received-last-week-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-from-to-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-this-month-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-view-all-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-month-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-date-div").style.display ="block";
}

function show_goatmeat_orders_received_view_last_week_div ()
{
    document.getElementById("goatmeat-orders-received-date-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-from-to-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-this-month-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-view-all-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-month-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-week-div").style.display ="block";
}

function show_goatmeat_orders_received_from_to_week_div ()
{
    document.getElementById("goatmeat-orders-received-date-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-this-month-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-view-all-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-month-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-week-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-from-to-div").style.display ="block";
}


function show_goatmeat_orders_received_view_last_week_div ()
{
    document.getElementById("goatmeat-orders-received-date-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-from-to-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-this-month-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-view-all-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-month-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-week-div").style.display ="block";
}

function show_goatmeat_orders_received_view_this_month_div ()
{
    document.getElementById("goatmeat-orders-received-last-week-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-from-to-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-view-all-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-month-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-date-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-this-month-div").style.display ="block";
}
function show_goatmeat_orders_received_view_last_month_div ()
{
    document.getElementById("goatmeat-orders-received-date-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-from-to-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-this-month-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-view-all-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-week-div").style.display ="none";
    document.getElementById("goatmeat-orders-received-last-month-div").style.display ="block";
}
function show_goatmeat_orders_received_date_today_grand_child_div ()
{
    document.getElementById("goatmeat-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("goatmeat-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("goatmeat-orders-received-date-today-grand-child-div").style.display="block";
}function close_goatmeat_orders_received_date_today_grand_child_div () {document.getElementById("goatmeat-orders-received-date-today-grand-child-div").style.display="none";}

function show_goatmeat_orders_received_date_grand_child_div ()
{
    document.getElementById("goatmeat-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("goatmeat-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("goatmeat-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("goatmeat-orders-received-date-grand-child-div").style.display = "block";
}
function close_goatmeat_orders_received_date_grand_child_div () {document.getElementById("goatmeat-orders-received-date-grand-child-div").style.display="none";}


function show_goatmeat_orders_received_from_to_grand_child_div (){document.getElementById("goatmeat-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_goatmeat_orders_received_from_to_grand_child_div () {document.getElementById("goatmeat-orders-received-from-to-all-grand-child-div").style.display="none";}

function show_goatmeat_orders_received_last_week_all_grand_child_div (){document.getElementById("goatmeat-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_goatmeat_orders_received_last_week_all_grand_child_div () {document.getElementById("goatmeat-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_goatmeat_orders_received_this_month_grand_child_div ()
{
    document.getElementById("goatmeat-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("goatmeat-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("goatmeat-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-last-week-div").style.display = "none";
    document.getElementById("goatmeat-orders-received-last-month-div").style.display= "none";
    document.getElementById("goatmeat-orders-received-this-month-div").style.display="block";
}function close_goatmeat_orders_received_this_month_grand_child_div () {document.getElementById("goatmeat-orders-received-this-month-div").style.display="none";}

function show_goatmeat_orders_received_this_month_all_grand_child_div () {document.getElementById("goatmeat-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_goatmeat_orders_received_this_month_all_grand_child_div () {document.getElementById("goatmeat-orders-received-this-month-all-grand-child-div").style.display = "none";}

function show_goatmeat_orders_received_last_month_all_grand_child_div (){document.getElementById("goatmeat-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_goatmeat_orders_received_last_month_all_grand_child_div () {document.getElementById("goatmeat-orders-received-last-month-by-all-grand-child-div").style.display="none";}


// ===============================================================
// BEEF LIVER VIEW ............

function show_beefliver_orders_received_view_all_div ()
{
    document.getElementById("beefliver-orders-received-date-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-week-div").style.display ="none";
    document.getElementById("beefliver-orders-received-from-to-div").style.display ="none";
    document.getElementById("beefliver-orders-received-this-month-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-month-div").style.display ="none";
    document.getElementById("beefliver-orders-received-view-all-div").style.display ="block";
}function close_beefliver_orders_received_view_all_div () {document.getElementById("beefliver-orders-received-view-all-div").style.display ="none";}

function show_beefliver_orders_received_view_date_div ()
{
    document.getElementById("beefliver-orders-received-last-week-div").style.display ="none";
    document.getElementById("beefliver-orders-received-from-to-div").style.display ="none";
    document.getElementById("beefliver-orders-received-this-month-div").style.display ="none";
    document.getElementById("beefliver-orders-received-view-all-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-month-div").style.display ="none";
    document.getElementById("beefliver-orders-received-date-div").style.display ="block";
}

function show_beefliver_orders_received_view_last_week_div ()
{
    document.getElementById("beefliver-orders-received-date-div").style.display ="none";
    document.getElementById("beefliver-orders-received-from-to-div").style.display ="none";
    document.getElementById("beefliver-orders-received-this-month-div").style.display ="none";
    document.getElementById("beefliver-orders-received-view-all-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-month-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-week-div").style.display ="block";
}

function show_beefliver_orders_received_from_to_week_div ()
{
    document.getElementById("beefliver-orders-received-date-div").style.display ="none";
    document.getElementById("beefliver-orders-received-this-month-div").style.display ="none";
    document.getElementById("beefliver-orders-received-view-all-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-month-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-week-div").style.display ="none";
    document.getElementById("beefliver-orders-received-from-to-div").style.display ="block";
}


function show_beefliver_orders_received_view_last_week_div ()
{
    document.getElementById("beefliver-orders-received-date-div").style.display ="none";
    document.getElementById("beefliver-orders-received-from-to-div").style.display ="none";
    document.getElementById("beefliver-orders-received-this-month-div").style.display ="none";
    document.getElementById("beefliver-orders-received-view-all-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-month-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-week-div").style.display ="block";
}

function show_beefliver_orders_received_view_this_month_div ()
{
    document.getElementById("beefliver-orders-received-last-week-div").style.display ="none";
    document.getElementById("beefliver-orders-received-from-to-div").style.display ="none";
    document.getElementById("beefliver-orders-received-view-all-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-month-div").style.display ="none";
    document.getElementById("beefliver-orders-received-date-div").style.display ="none";
    document.getElementById("beefliver-orders-received-this-month-div").style.display ="block";
}
function show_beefliver_orders_received_view_last_month_div ()
{
    document.getElementById("beefliver-orders-received-date-div").style.display ="none";
    document.getElementById("beefliver-orders-received-from-to-div").style.display ="none";
    document.getElementById("beefliver-orders-received-this-month-div").style.display ="none";
    document.getElementById("beefliver-orders-received-view-all-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-week-div").style.display ="none";
    document.getElementById("beefliver-orders-received-last-month-div").style.display ="block";
}
function show_beefliver_orders_received_date_today_grand_child_div ()
{
    document.getElementById("beefliver-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("beefliver-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("beefliver-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("beefliver-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("beefliver-orders-received-date-today-grand-child-div").style.display="block";
}function close_beefliver_orders_received_date_today_grand_child_div () {document.getElementById("beefliver-orders-received-date-today-grand-child-div").style.display="none";}

function show_beefliver_orders_received_date_grand_child_div ()
{
    document.getElementById("beefliver-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("beefliver-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("beefliver-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("beefliver-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("beefliver-orders-received-date-grand-child-div").style.display = "block";
}
function close_beefliver_orders_received_date_grand_child_div () {document.getElementById("beefliver-orders-received-date-grand-child-div").style.display="none";}


function show_beefliver_orders_received_from_to_grand_child_div (){document.getElementById("beefliver-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_beefliver_orders_received_from_to_grand_child_div () {document.getElementById("beefliver-orders-received-from-to-all-grand-child-div").style.display="none";}
function show_beefliver_orders_received_last_week_all_grand_child_div (){document.getElementById("beefliver-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_beefliver_orders_received_last_week_all_grand_child_div () {document.getElementById("beefliver-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_beefliver_orders_received_this_month_grand_child_div ()
{
    document.getElementById("beefliver-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("beefliver-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("beefliver-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("beefliver-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("beefliver-orders-received-last-week-div").style.display = "none";
    document.getElementById("beefliver-orders-received-last-month-div").style.display= "none";
    document.getElementById("beefliver-orders-received-this-month-div").style.display="block";
}function close_beefliver_orders_received_this_month_grand_child_div () {document.getElementById("beefliver-orders-received-this-month-div").style.display="none";}

function show_beefliver_orders_received_this_month_all_grand_child_div () {document.getElementById("beefliver-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_beefliver_orders_received_this_month_all_grand_child_div () {document.getElementById("beefliver-orders-received-this-month-all-grand-child-div").style.display = "none";}
function show_beefliver_orders_received_last_month_all_grand_child_div (){document.getElementById("beefliver-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_beefliver_orders_received_last_month_all_grand_child_div () {document.getElementById("beefliver-orders-received-last-month-by-all-grand-child-div").style.display="none";}
