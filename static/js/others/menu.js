var src_url = "http://192.168.43.140:6060/";
// var src_url = "http://172.105.158.108:6060/";



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

            // Menu Gallery
function Add_Menu_Gallery_Iframe (endpoint)
{
    document.getElementById("offline-label-div").style.display = "none";
    let MenuGalleryDiv = document.getElementById("menu-pics-div");
    let MenuIframe = document.createElement("iframe");
    MenuIframe.className = "menu-iframe";
    MenuIframe.setAttribute("src",  src_url + endpoint);
    MenuGalleryDiv.appendChild(MenuIframe);
}

function Add_Menu_Gallery_Iframe_With_Args (offline_label,menu_divid,endpoint)
{
    document.getElementById(offline_label).style.display = "none";
    let MenuGalleryDiv = document.getElementById(menu_divid);
    let MenuIframe = document.createElement("iframe");
    MenuIframe.className = "menu-iframe";
    MenuIframe.setAttribute("src",  src_url + endpoint);
    MenuGalleryDiv.appendChild(MenuIframe);
}


function Create_Offline_Label ()
{
    let offline_label_div = document.getElementById("offline-label-div");
    let label = document.createElement("label");
    label.innerHTML = "Your Are Offline <br> Please <br>Connect To Network"
    label.className = "Offline-Label"
    offline_label_div.appendChild(label)
}
function Create_Offline_Label_With_Argus (divid)
{
    let offline_label_div = document.getElementById(divid);
    let label = document.createElement("label");
    label.innerHTML = "Your Are Offline <br> Please <br>Connect To Network"
    label.className = "Offline-Label"
    offline_label_div.appendChild(label)
}

function Load_food_menu ()
{
    let food_names_req = new XMLHttpRequest ();
    food_names_req.open('post' ,src_url + 'food_menu_options',true);
    food_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText);
            let html_select_input = document.getElementById("food_options");
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let food_names = document.getElementById('food_options');
    food_names_req.send(food_names);
}

function display_date ()
{
    let today = new Date ();
    let date = today.getDate() +'-0'+(today.getMonth()+1)+'-'+today.getFullYear ();
    document.getElementById("date-id").innerHTML = date;
    
}
function display_date2 ()
{
    let today = new Date ();
    let date = today.getDate() +'-0'+(today.getMonth()+1)+'-'+today.getFullYear ();
    document.getElementById("date-id-2").innerHTML = date;
    
}function display_date3 ()
{
    let today = new Date ();
    let date = today.getDate() +'-0'+(today.getMonth()+1)+'-'+today.getFullYear ();
    document.getElementById("date-id-3").innerHTML = date;
    
}
// ========================================================================
// Break fast page

function Hide_All_Divs ()
{
    document.getElementById("breakfast-others-div").style.display = "none";
    document.getElementById("breakfast-teas-coffee").style.display = "none";
    document.getElementById("breakfast-egg-div").style.display = "none";
    // document.getElementById("food_menu_gallery_div").style.display = "none";

}

function Show_breakfast_others_div ()
{
    document.getElementById("breakfast-egg-div").style.display = "none";
    document.getElementById("breakfast-teas-coffee").style.display = "none";
    document.getElementById("breakfast-others-div").style.display = "block"; 
}
function Show_breakfast_egg_dishes_div ()
{
    document.getElementById("breakfast-others-div").style.display = "none";
    document.getElementById("breakfast-teas-coffee").style.display = "none";
    document.getElementById("breakfast-egg-div").style.display = "block"; 
}
function Show_breakfast_teas_coffee_div ()
{
    document.getElementById("breakfast-egg-div").style.display = "none";
    document.getElementById("breakfast-others-div").style.display = "none";
    document.getElementById("breakfast-teas-coffee").style.display = "block"; 
}

// ==============================================
// drinks page

function Hide_drinks_divs ()
{
    document.getElementById("drinks-soft-beverages-div").style.display = "none";
    document.getElementById("drinks-fresh-fruit-div").style.display = "none";
}

function Show_drinks_soft_beverages_div ()
{
    document.getElementById("drinks-fresh-fruit-div").style.display = "none";
    document.getElementById("drinks-soft-beverages-div").style.display = "block";
}

function Show_drinks_fresh_fruit_div ()
{
    document.getElementById("drinks-soft-beverages-div").style.display = "none";
    document.getElementById("drinks-fresh-fruit-div").style.display = "block";
}

