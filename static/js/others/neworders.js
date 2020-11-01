
neworders_url = "http://192.168.43.140:6060/"
vibrateionsseconds = 1000;
reloadsecs = 6000;

function Fetch_Customer_New_Orders ()
{
    Reload_Chips_Orders_All ();
    Reload_Piloa_Orders_All ();
    Reload_Softdrink_Orders_All ();
    Reload_Salads_Orders_All ();
    Reload_Chicken_Orders_All ();
    Reload_Luwombo_Orders_All ();
    Reload_Localdishe_Orders_All ();
    Reload_Breakfast_Other_Orders_All ();
    Reload_Breakfast_Egg_Orders_All ();
    Reload_Breakfast_Teas_Orders_All ();
    Reload_Beverages_Orders_All ();
    Reload_Goatmeat_Orders_All ();
    Reload_Beefliver_Orders_All ();
    // Reload_Load_staffs ();
}
// function Fetch_Customer_New_Orders ()
// {
//     Fetch_Chips_Orders_All ();
//     Fetch_Piloa_Orders_All ();
//     Fetch_Softdrink_Orders_All ();
//     Reload_Freshdrink_Orders_All ();
//     Fetch_Salads_Orders_All ();
//     Fetch_Chicken_Orders_All ();
//     Fetch_Luwombo_Orders_All ();
//     Fetch_Localdishe_Orders_All ();
//     Fetch_Breakfast_Other_Orders_All ();
//     Fetch_Breakfast_Egg_Orders_All ();
//     Fetch_Breakfast_Teas_Orders_All ();
//     Fetch_Beverages_Orders_All ();
//     Fetch_Goatmeat_Orders_All ();
//     Fetch_Beefliver_Orders_All ();
// }

function startvibration()
{
    // Vibrate for 500ms 3 times, pausing for 250ms in between each one.
    navigator.vibrate([500, 250 ,500, 250, 500])
    console.log("vibrating now..")
}

function Reload_Load_staffs () {setInterval(Load_staffs (avenu_type_id) , reloadsecs);}
function Load_staffs (avenu_type_id)
{
    let staff_names_req = new XMLHttpRequest ();
    staff_names_req.open('post' ,neworders_url + 'staff_names',true);
    staff_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText);
            let html_select_input = document.getElementById(avenu_type_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let staff_names = document.getElementById(avenu_type_id);
    staff_names_req.send(staff_names);
}

// =======================================================================
function Reload_Chips_Orders_All () {setInterval(Fetch_Chips_Orders_All, reloadsecs);}
function Fetch_Chips_Orders_All ()
    {
        let req = new XMLHttpRequest();
        req.open('post', neworders_url+'chips_view_temporary_orders',true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length)
                    {
                        // alert("No results found")
                    }
                else
                    {
                        let orders = results.length;
                        document.getElementById("chips-status-id").innerText = orders;
                        startvibration()

                        let tbody = document.getElementById('chips-tbody');
                        tbody.innerHTML = ' ';

                        // draw table
                        let td,tr;
                        // add table headings
                        let th_names = new Array ();
                        th_names.push(["Number","Name","Avenue","Location", "Contacts","Price","Date","Time"]);
                        let columns_to_count = th_names[0].length;
                        row = tbody.insertRow(-1);
                        for (let looper =0; looper<columns_to_count; ++looper)
                            {
                                let headerNames = document.createElement("th");
                                headerNames.className='js_table_headers'
                                headerNames.innerHTML = th_names[0][looper];
                                row.appendChild(headerNames)
                            }

                        for (let table_row = 0; table_row < results.length; ++table_row)
                            {
                                tr = document.createElement('tr');
                                tr.className='js_table_row';
                                for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                    {
                                        td = document.createElement('td');
                                        td.setAttribute("align", "center");
                                        td.innerHTML = results[table_row][table_data];
                                        tr.appendChild(td)
                                    }
                                    tbody.appendChild(tr)
                            }
                    }
            }
            let div_tag = document.getElementById('chips-view-new-oders-div');
            req.send(div_tag);
    }


// =======================================================================
function Reload_Piloa_Orders_All () {setInterval(Fetch_Piloa_Orders_All, reloadsecs);}
function Fetch_Piloa_Orders_All ()
{
    let req = new XMLHttpRequest();
    req.open('post', neworders_url+'piloa_view_temporary_orders',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            let orders = results.length;
            document.getElementById("piloa-status-id").innerText = orders;
            startvibration()

            let tbody = document.getElementById('piloa-tbody');
            tbody.innerHTML = ' ';

            // draw table
            let td,tr;
            // add table headings
            let th_names = new Array ();
            th_names.push(["Number","Name","Avenue","Location", "Contacts","Price","Date","Time"]);
            let columns_to_count = th_names[0].length;
            row = tbody.insertRow(-1);
            for (let looper =0; looper<columns_to_count; ++looper)
                {
                    let headerNames = document.createElement("th");
                    headerNames.className='js_table_headers'
                    headerNames.innerHTML = th_names[0][looper];
                    row.appendChild(headerNames)
                }

            for (let table_row = 0; table_row < results.length; ++table_row)
                {
                    tr = document.createElement('tr');
                    tr.className='js_table_row';
                    for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                        {
                            td = document.createElement('td');
                            td.setAttribute("align", "center");
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                }
        }
        let div_tag = document.getElementById('piloa-view-new-orders-div');
        req.send(div_tag);
}

// =======================================================================
function Reload_Softdrink_Orders_All () {setInterval(Fetch_Softdrink_Orders_All, reloadsecs);}
function Fetch_Softdrink_Orders_All ()
{
    let req = new XMLHttpRequest();
    req.open('post', neworders_url+'softdrink_view_temporary_orders',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            let orders = results.length;
            document.getElementById("softdrink-status-id").innerText = orders;
            startvibration()

            let tbody = document.getElementById('soft-drinks-tbody');
            tbody.innerHTML = ' ';

            // draw table
            let td,tr;
            // add table headings
            let th_names = new Array ();
            th_names.push(["Number","Name","Drink","Location", "Contacts","Price","Date","Time"]);
            let columns_to_count = th_names[0].length;
            row = tbody.insertRow(-1);
            for (let looper =0; looper<columns_to_count; ++looper)
                {
                    let headerNames = document.createElement("th");
                    headerNames.className='js_table_headers'
                    headerNames.innerHTML = th_names[0][looper];
                    row.appendChild(headerNames)
                }

            for (let table_row = 0; table_row < results.length; ++table_row)
                {
                    tr = document.createElement('tr');
                    tr.className='js_table_row';
                    for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                        {
                            td = document.createElement('td');
                            td.setAttribute("align", "center");
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                }
        }
        let div_tag = document.getElementById('soft-drinks-view-new-oders-div');
        req.send(div_tag);
}

// =======================================================================
function Reload_Freshdrink_Orders_All () {setInterval(Fetch_Freshdrink_Orders_All, reloadsecs);}
function Fetch_Freshdrink_Orders_All ()
{
    let req = new XMLHttpRequest();
    req.open('post', neworders_url+'freshdrink_view_temporary_orders',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            let orders = results.length;
            document.getElementById("freshdrink-status-id").innerText = orders;
            startvibration()

            let tbody = document.getElementById('fresh-drinks-tbody');
            tbody.innerHTML = ' ';

            // draw table
            let td,tr;
            // add table headings
            let th_names = new Array ();
            th_names.push(["Number","Name","Drink","Location", "Contacts","Price","Date","Time"]);
            let columns_to_count = th_names[0].length;
            row = tbody.insertRow(-1);
            for (let looper =0; looper<columns_to_count; ++looper)
                {
                    let headerNames = document.createElement("th");
                    headerNames.className='js_table_headers'
                    headerNames.innerHTML = th_names[0][looper];
                    row.appendChild(headerNames)
                }

            for (let table_row = 0; table_row < results.length; ++table_row)
                {
                    tr = document.createElement('tr');
                    tr.className='js_table_row';
                    for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                        {
                            td = document.createElement('td');
                            td.setAttribute("align", "center");
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                }
        }
        let div_tag = document.getElementById('fresh-drinks-view-new-oders-div');
        req.send(div_tag);
}

// =======================================================================
function Reload_Salads_Orders_All () {setInterval(Fetch_Salads_Orders_All, reloadsecs);}
function Fetch_Salads_Orders_All ()
{
    let req = new XMLHttpRequest();
    req.open('post', neworders_url+'salads_view_temporary_orders',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            let orders = results.length;
            document.getElementById("salads-status-id").innerText = orders;
            startvibration()

            let tbody = document.getElementById('salads-tbody');
            tbody.innerHTML = ' ';

            // draw table
            let td,tr;
            // add table headings
            let th_names = new Array ();
            th_names.push(["Number","Name","Drink","Location", "Contacts","Price","Date","Time"]);
            let columns_to_count = th_names[0].length;
            row = tbody.insertRow(-1);
            for (let looper =0; looper<columns_to_count; ++looper)
                {
                    let headerNames = document.createElement("th");
                    headerNames.className='js_table_headers'
                    headerNames.innerHTML = th_names[0][looper];
                    row.appendChild(headerNames)
                }

            for (let table_row = 0; table_row < results.length; ++table_row)
                {
                    tr = document.createElement('tr');
                    tr.className='js_table_row';
                    for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                        {
                            td = document.createElement('td');
                            td.setAttribute("align", "center");
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                }
        }
        let div_tag = document.getElementById('salads-view-new-oders-div');
        req.send(div_tag);
}

// =======================================================================
function Reload_Chicken_Orders_All () {setInterval(Fetch_Chicken_Orders_All, reloadsecs);}
function Fetch_Chicken_Orders_All ()
{
    let req = new XMLHttpRequest();
    req.open('post', neworders_url+'chicken_view_temporary_orders',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            let orders = results.length;
            document.getElementById("chicken-status-id").innerText = orders;
            startvibration()

            let tbody = document.getElementById('chicken-tbody');
            tbody.innerHTML = ' ';

            // draw table
            let td,tr;
            // add table headings
            let th_names = new Array ();
            th_names.push(["Number","Name","Drink","Location", "Contacts","Price","Date","Time"]);
            let columns_to_count = th_names[0].length;
            row = tbody.insertRow(-1);
            for (let looper =0; looper<columns_to_count; ++looper)
                {
                    let headerNames = document.createElement("th");
                    headerNames.className='js_table_headers'
                    headerNames.innerHTML = th_names[0][looper];
                    row.appendChild(headerNames)
                }

            for (let table_row = 0; table_row < results.length; ++table_row)
                {
                    tr = document.createElement('tr');
                    tr.className='js_table_row';
                    for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                        {
                            td = document.createElement('td');
                            td.setAttribute("align", "center");
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                }
        }
        let div_tag = document.getElementById('chicken-view-new-oders-div');
        req.send(div_tag);
}

// =======================================================================
function Reload_Luwombo_Orders_All () {setInterval(Fetch_Luwombo_Orders_All, reloadsecs);}
function Fetch_Luwombo_Orders_All ()
{
    let req = new XMLHttpRequest();
    req.open('post', neworders_url+'luwombo_view_temporary_orders',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            let orders = results.length;
            document.getElementById("luwombo-status-id").innerText = orders;
            startvibration()

            let tbody = document.getElementById('luwombo-tbody');
            tbody.innerHTML = ' ';

            // draw table
            let td,tr;
            // add table headings
            let th_names = new Array ();
            th_names.push(["Number","Name","Drink","Location", "Contacts","Price","Date","Time"]);
            let columns_to_count = th_names[0].length;
            row = tbody.insertRow(-1);
            for (let looper =0; looper<columns_to_count; ++looper)
                {
                    let headerNames = document.createElement("th");
                    headerNames.className='js_table_headers'
                    headerNames.innerHTML = th_names[0][looper];
                    row.appendChild(headerNames)
                }

            for (let table_row = 0; table_row < results.length; ++table_row)
                {
                    tr = document.createElement('tr');
                    tr.className='js_table_row';
                    for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                        {
                            td = document.createElement('td');
                            td.setAttribute("align", "center");
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                }
        }
        let div_tag = document.getElementById('luwombo-view-new-oders-div');
        req.send(div_tag);
}

// =======================================================================
function Reload_Localdishe_Orders_All () {setInterval(Fetch_Localdishe_Orders_All, reloadsecs);}
function Fetch_Localdishe_Orders_All ()
{
    let req = new XMLHttpRequest();
    req.open('post', neworders_url+'localdishe_view_temporary_orders',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            let orders = results.length;
            document.getElementById("localdishe-status-id").innerText = orders;
            startvibration()

            let tbody = document.getElementById('localdishe-tbody');
            tbody.innerHTML = ' ';

            // draw table
            let td,tr;
            // add table headings
            let th_names = new Array ();
            th_names.push(["Number","Name","Drink","Location", "Contacts","Price","Date","Time"]);
            let columns_to_count = th_names[0].length;
            row = tbody.insertRow(-1);
            for (let looper =0; looper<columns_to_count; ++looper)
                {
                    let headerNames = document.createElement("th");
                    headerNames.className='js_table_headers'
                    headerNames.innerHTML = th_names[0][looper];
                    row.appendChild(headerNames)
                }

            for (let table_row = 0; table_row < results.length; ++table_row)
                {
                    tr = document.createElement('tr');
                    tr.className='js_table_row';
                    for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                        {
                            td = document.createElement('td');
                            td.setAttribute("align", "center");
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                }
        }
        let div_tag = document.getElementById('localdishe-view-new-oders-div');
        req.send(div_tag);
}

// =======================================================================
function Reload_Breakfast_Other_Orders_All () {setInterval(Fetch_Breakfast_Other_Orders_All, reloadsecs);}
function Fetch_Breakfast_Other_Orders_All ()
{
    let req = new XMLHttpRequest();
    req.open('post', neworders_url+'breakfast_other_view_temporary_orders',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            let orders = results.length;
            document.getElementById("breakfast-other-status-id").innerText = orders;
            startvibration()

            let tbody = document.getElementById('breakfast-other-tbody');
            tbody.innerHTML = ' ';

            let td,tr;
            // add table headings
            let th_names = new Array ();
            th_names.push(["Number","Name","Drink","Location", "Contacts","Price","Date","Time"]);
            let columns_to_count = th_names[0].length;
            row = tbody.insertRow(-1);
            for (let looper =0; looper<columns_to_count; ++looper)
                {
                    let headerNames = document.createElement("th");
                    headerNames.className='js_table_headers'
                    headerNames.innerHTML = th_names[0][looper];
                    row.appendChild(headerNames)
                }

            for (let table_row = 0; table_row < results.length; ++table_row)
                {
                    tr = document.createElement('tr');
                    tr.className='js_table_row';
                    for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                        {
                            td = document.createElement('td');
                            td.setAttribute("align", "center");
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                }
        }
        let div_tag = document.getElementById('breakfast-other-view-new-oders-div');
        req.send(div_tag);
}

// =======================================================================
function Reload_Breakfast_Egg_Orders_All () {setInterval(Fetch_Breakfast_Egg_Orders_All, reloadsecs);}
function Fetch_Breakfast_Egg_Orders_All ()
{
    let req = new XMLHttpRequest();
    req.open('post', neworders_url+'breakfast_egg_view_temporary_orders',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            let orders = results.length;
            document.getElementById("breakfast-egg-status-id").innerText = orders;
            startvibration()

            let tbody = document.getElementById('breakfast-egg-tbody');
            tbody.innerHTML = ' ';

            let td,tr;
            // add table headings
            let th_names = new Array ();
            th_names.push(["Number","Name","Drink","Location", "Contacts","Price","Date","Time"]);
            let columns_to_count = th_names[0].length;
            row = tbody.insertRow(-1);
            for (let looper =0; looper<columns_to_count; ++looper)
                {
                    let headerNames = document.createElement("th");
                    headerNames.className='js_table_headers'
                    headerNames.innerHTML = th_names[0][looper];
                    row.appendChild(headerNames)
                }

            for (let table_row = 0; table_row < results.length; ++table_row)
                {
                    tr = document.createElement('tr');
                    tr.className='js_table_row';
                    for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                        {
                            td = document.createElement('td');
                            td.setAttribute("align", "center");
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                }
        }
        let div_tag = document.getElementById('breakfast-egg-view-new-oders-div');
        req.send(div_tag);
}

// =======================================================================
function Reload_Breakfast_Teas_Orders_All () {setInterval(Fetch_Breakfast_Teas_Orders_All, reloadsecs);}
function Fetch_Breakfast_Teas_Orders_All ()
{
    let req = new XMLHttpRequest();
    req.open('post', neworders_url+'breakfast_teas_view_temporary_orders',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            let orders = results.length;
            document.getElementById("breakfast-teas-status-id").innerText = orders;
            startvibration()

            let tbody = document.getElementById('breakfast-teas-tbody');
            tbody.innerHTML = ' ';

            let td,tr;
            // add table headings
            let th_names = new Array ();
            th_names.push(["Number","Name","Drink","Location", "Contacts","Price","Date","Time"]);
            let columns_to_count = th_names[0].length;
            row = tbody.insertRow(-1);
            for (let looper =0; looper<columns_to_count; ++looper)
                {
                    let headerNames = document.createElement("th");
                    headerNames.className='js_table_headers'
                    headerNames.innerHTML = th_names[0][looper];
                    row.appendChild(headerNames)
                }

            for (let table_row = 0; table_row < results.length; ++table_row)
                {
                    tr = document.createElement('tr');
                    tr.className='js_table_row';
                    for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                        {
                            td = document.createElement('td');
                            td.setAttribute("align", "center");
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                }
        }
        let div_tag = document.getElementById('breakfast-teas-view-new-oders-div');
        req.send(div_tag);
}

// =======================================================================
function Reload_Beverages_Orders_All () {setInterval(Fetch_Beverages_Orders_All, reloadsecs);}
function Fetch_Beverages_Orders_All ()
{
    let req = new XMLHttpRequest();
    req.open('post', neworders_url+'beverages_view_temporary_orders',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            let orders = results.length;
            document.getElementById("beverages-status-id").innerText = orders;
            startvibration()

            let tbody = document.getElementById('beverages-tbody');
            tbody.innerHTML = ' ';

            let td,tr;
            // add table headings
            let th_names = new Array ();
            th_names.push(["Number","Name","Drink","Location", "Contacts","Price","Date","Time"]);
            let columns_to_count = th_names[0].length;
            row = tbody.insertRow(-1);
            for (let looper =0; looper<columns_to_count; ++looper)
                {
                    let headerNames = document.createElement("th");
                    headerNames.className='js_table_headers'
                    headerNames.innerHTML = th_names[0][looper];
                    row.appendChild(headerNames)
                }

            for (let table_row = 0; table_row < results.length; ++table_row)
                {
                    tr = document.createElement('tr');
                    tr.className='js_table_row';
                    for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                        {
                            td = document.createElement('td');
                            td.setAttribute("align", "center");
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                }
        }
        let div_tag = document.getElementById('beverages-view-new-oders-div');
        req.send(div_tag);
}

// =======================================================================
function Reload_Goatmeat_Orders_All () {setInterval(Fetch_Goatmeat_Orders_All, reloadsecs);}
function Fetch_Goatmeat_Orders_All ()
{
    let req = new XMLHttpRequest();
    req.open('post', neworders_url+'goatmeat_view_temporary_orders',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            let orders = results.length;
            document.getElementById("goatmeat-status-id").innerText = orders;
            startvibration()

            let tbody = document.getElementById('goatmeat-tbody');
            tbody.innerHTML = ' ';

            let td,tr;
            // add table headings
            let th_names = new Array ();
            th_names.push(["Number","Name","Drink","Location", "Contacts","Price","Date","Time"]);
            let columns_to_count = th_names[0].length;
            row = tbody.insertRow(-1);
            for (let looper =0; looper<columns_to_count; ++looper)
                {
                    let headerNames = document.createElement("th");
                    headerNames.className='js_table_headers'
                    headerNames.innerHTML = th_names[0][looper];
                    row.appendChild(headerNames)
                }

            for (let table_row = 0; table_row < results.length; ++table_row)
                {
                    tr = document.createElement('tr');
                    tr.className='js_table_row';
                    for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                        {
                            td = document.createElement('td');
                            td.setAttribute("align", "center");
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                }
        }
        let div_tag = document.getElementById('goatmeat-view-new-oders-div');
        req.send(div_tag);
}

// =======================================================================
function Reload_Beefliver_Orders_All () {setInterval(Fetch_Beefliver_Orders_All, reloadsecs);}
function Fetch_Beefliver_Orders_All ()
{
    let req = new XMLHttpRequest();
    req.open('post', neworders_url+'beefliver_view_temporary_orders',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            let orders = results.length;
            document.getElementById("beefliver-status-id").innerText = orders;
            startvibration()

            let tbody = document.getElementById('beefliver-tbody');
            tbody.innerHTML = ' ';

            let td,tr;
            // add table headings
            let th_names = new Array ();
            th_names.push(["Number","Name","Drink","Location", "Contacts","Price","Date","Time"]);
            let columns_to_count = th_names[0].length;
            row = tbody.insertRow(-1);
            for (let looper =0; looper<columns_to_count; ++looper)
                {
                    let headerNames = document.createElement("th");
                    headerNames.className='js_table_headers'
                    headerNames.innerHTML = th_names[0][looper];
                    row.appendChild(headerNames)
                }

            for (let table_row = 0; table_row < results.length; ++table_row)
                {
                    tr = document.createElement('tr');
                    tr.className='js_table_row';
                    for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                        {
                            td = document.createElement('td');
                            td.setAttribute("align", "center");
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td)
                        }
                        tbody.appendChild(tr)
                }
        }
        let div_tag = document.getElementById('beefliver-view-new-oders-div');
        req.send(div_tag);
}
