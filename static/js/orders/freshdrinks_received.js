


var freshdrinks_url = "http://192.168.43.140:6060/";
// var freshdrinks_url = "http://172.105.158.108:6060/";


var seconds = 1000;
var loader_seconds = 3000;

/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           RECIEVED ORDERS
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

function fetch_fresh_drinks_orders_received_all_data ()
{
    document.getElementById("fresh-drinks-orders-received-loader-all").style.display="block";
    setTimeout(freshdrinks_orders_view_all,loader_seconds)
}

    // ==================
function freshdrinks_orders_view_all ()
    {
        document.getElementById("fresh-drinks-orders-received-loader-all").style.display="none";
        let req = new XMLHttpRequest();
        req.open('post', freshdrinks_url+'freshdrinks_view_all_orders',true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length){alert("No results found")}
                else
                    {
                        let tbody = document.getElementById('fresh-drinks-show-all-tbody');
                        tbody.innerHTML = ' ';
    
                        // draw table
                        let td,tr;
                        // add table headings
                        let th_names = new Array ();
                        th_names.push(["Name","Drink","Location", "Contacts","Price", "Date","Time", "Staff"]);
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
            let div_tag = document.getElementById('fresh-drinks-show-all-tbody-div');
            req.send(div_tag);  
            setTimeout(freshdrinks_save_show_all_data,seconds);      
    }
    

// ============================= view Today

function fetch_fresh_drinks_orders_received_date_today_data ()
{
    document.getElementById("fresh-drinks-orders-received-loader-date-today").style.display="block";
    setTimeout(freshdrink_orders_view_by_date_today,loader_seconds)
}
function freshdrink_orders_view_by_date_today ()
{
    document.getElementById("fresh-drinks-orders-received-loader-date-today").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', freshdrinks_url+'freshdrinks_orders_view_by_date_today',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('fresh-drinks-date-today-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Name","Drink","Location", "Contacts", "Price","Date","Time", "Staff"]);
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
        let data = document.getElementById('orders-view-by-date-today-div');
        req.send(data); 
        setTimeout (freshdrinks_save_by_date_today_data,seconds);       
}

// ============================= >>> date date
function fetch_fresh_drinks_orders_received_date_date_data ()
{
    document.getElementById("fresh-drinks-orders-received-loader-date-date").style.display="block";
    setTimeout(freshdrinks_orders_view_by_date_date,loader_seconds)
}
function freshdrinks_orders_view_by_date_date ()
{
    document.getElementById("fresh-drinks-orders-received-loader-date-date").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', freshdrinks_url+'freshdrinks_orders_view_by_date_date',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('fresh-drinks-date-date-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Drink","Location", "Contacts","Price", "Date","Time", "Staff"]);
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
        let date = new FormData(document.getElementById('fresh-drink-orders-date-date-form'));
        req.send(date);        
        setTimeout(freshdrinks_save_date_date_data,seconds);
}

function fetch_fresh_drinks_orders_received_from_to_all_data () 
{
    document.getElementById("fresh-drinks-orders-received-loader-from-to-all").style.display="block";
    setTimeout(freshdrinks_orders_from_to_all,loader_seconds)
}
function freshdrinks_orders_from_to_all ()
{
    document.getElementById("fresh-drinks-orders-received-loader-from-to-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', freshdrinks_url+'freshdrinks_orders_from_to_all',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('fresh-drinks-from-to-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Drink","Location", "Contacts","Price", "Date","Time", "Staff"]);
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
                            for (let table_data = 1; table_data< (results[table_row].length-1);++table_data)
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
        let date =  new FormData(document.getElementById('fresh-drinks-from-to-form'));
        req.send(date);        
        setTimeout(freshdrinks_save_from_to,seconds);
}
// ======================================

// +++++++++++++++++++++++++++++++++++++++>>>
function fetch_fresh_drinks_orders_received_last_week_all_data ()
{
    document.getElementById("fresh-drinks-orders-received-loader-last-week-all").style.display="block";
    setTimeout(freshdrinks_orders_last_week_all,loader_seconds)
}

function freshdrinks_orders_last_week_all ()
{
    document.getElementById("fresh-drinks-orders-received-loader-last-week-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', freshdrinks_url+'freshdrinks_orders_last_week_all_data',true)
    req.onload = function ()
        {
            document.getElementById("fresh-drinks-orders-received-loader-last-week-all").style.display="none";
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('fresh-drinks-last-week-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Drink","Location", "Contacts","Price", "Date","Time", "Staff"]);
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
                            for (let table_data = 1; table_data< (results[table_row].length-1);++table_data)
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
        let date = document.getElementById('last-week-all-grand-child-div');
        req.send(date);        
        setTimeout(freshdrinks_save_show_last_week_all,seconds);
}

function fetch_fresh_drinks_orders_received_this_month_all_data ()
{
    document.getElementById("fresh-drinks-orders-received-loader-this-month-all").style.display="block";
    setTimeout(freshdrinks_orders_this_month_all,loader_seconds)
}

function freshdrinks_orders_this_month_all ()
{
    document.getElementById("fresh-drinks-orders-received-loader-this-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', freshdrinks_url+'freshdrinks_orders_this_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('fresh-drinks-this-month-all-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Name","Drink","Location", "Contacts","Price", "Date","Time", "Staff"]);
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
                            // class="w3-hover-black"
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            // tr.className='js_table';
                            //draw td
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 

                                    // put in data
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('this-month-all-grand-child-div');
        req.send(date);        
        setTimeout(freshdrinks_save_show_this_month_all,seconds);
}


// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_fresh_drinks_orders_received_last_month_all_data ()
{
    document.getElementById("fresh-drinks-orders-received-loader-last-month-all").style.display="block";
    setTimeout(freshdrinks_orders_last_month_all,loader_seconds)
}

function freshdrinks_orders_last_month_all ()
{
    document.getElementById("fresh-drinks-orders-received-loader-last-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', freshdrinks_url+'freshdrinks_orders_last_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('fresh-drinks-last-month-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Drink","Location", "Contacts", "Price","Date","Time", "Staff"]);
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
        let date = document.getElementById('last-month-all-grand-child-div');
        req.send(date);        
        setTimeout(freshdrinks_save_show_last_month_all,seconds);
}

// ========================================================================
// On storage
function freshdrinks_save_show_all_data ()
{
    let data = document.getElementById ("fresh-drinks-show-all-tbody").innerHTML;
    localStorage.setItem("freshdrinksall", data);
}

function freshdrinks_save_by_date_today_data ()
{
    let data = document.getElementById ("fresh-drinks-date-today-tbody").innerHTML;
    localStorage.setItem("freshdrinksdatetoday", data);
}
function freshdrinks_save_date_date_data ()
{
    let data = document.getElementById ("fresh-drinks-date-date-tbody").innerHTML;
    localStorage.setItem("freshdrinksdatedate", data);
}

function freshdrinks_save_from_to ()
{
    let data = document.getElementById("fresh-drinks-from-to-all-tbody").innerHTML;
    localStorage.setItem("freshdrinksfromtoall",data);
}

function freshdrinks_save_show_last_week_all ()
{
    let data = document.getElementById ("fresh-drinks-last-week-all-tbody").innerHTML;
    localStorage.setItem("freshdrinkslstweekall", data);
}

function freshdrinks_save_show_this_month_all ()
{
    let data = document.getElementById ("fresh-drinks-show-all-tbody").innerHTML;
    localStorage.setItem("freshdrinksdismthall", data);
}

function freshdrinks_save_show_last_month_all ()
{
    let data = document.getElementById ("fresh-drinks-last-month-all-tbody").innerHTML;
    localStorage.setItem("freshdrinkslstmthall", data);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Load_Drinks_Offline_Data () 
{
    document.getElementById("fresh-drinks-show-all-tbody").innerHTML = localStorage.getItem("freshdrinksall");
    document.getElementById("fresh-drinks-date-today-tbody").innerHTML = localStorage.getItem("freshdrinksdatetoday");
    document.getElementById("fresh-drinks-date-date-tbody").innerHTML = localStorage.getItem("freshdrinksdatedate");
    document.getElementById("fresh-drinks-from-to-all-tbody").innerHTML = localStorage.getItem("freshdrinksfromtoall")
    document.getElementById("fresh-drinks-last-week-all-tbody").innerHTML = localStorage.getItem("freshdrinkslstweekall");
    document.getElementById("fresh-drinks-this-month-all-tbody").innerHTML = localStorage.getItem("freshdrinksdismthall");
    document.getElementById("fresh-drinks-last-month-all-tbody").innerHTML = localStorage.getItem("freshdrinkslstmthall");
}


