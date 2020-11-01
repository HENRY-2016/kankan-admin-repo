


// var ordersreceived_url = "http://192.168.43.140:4444/";
// var ordersreceived_url = "http://127.0.0.1:4444/";
var ordersreceived_url = "http://192.168.43.23:4444/" // laptop


var seconds = 1000;
function showsourcecode ()
{
    // let b = document.getElementsByTagName('body')[0];
    let div = document.getAnimations("plascon-customer-list-div")
    // let o = domJSON.toJSON(b)
    console.log(div);
}

// s = "×"
// console.log(s.charCodeAt(0))
function CreateDynamicList (listoflists)
{
    /*
    This creats the following stracture

        <ul id="myUL">
        <span class="caret">(holds title)
        <ul class="nested">
        <li class="customer-list">
    */
    // create elements
    let htmldiv = document.getElementById("plascon-customer-list-div");
    let outer_ul =  document.createElement('ul');
    let title_span = document.createElement('span');
    let sub_title_label = document.createElement('label'); 
    let nested_ul = document.createElement('ul');
    let customer_li_list = document.createElement('li');
    let stringfromlist;

    // set attribes to css
    outer_ul.setAttribute('id','myUL');
    title_span.setAttribute('class','caret');
    nested_ul.setAttribute('class','nested')
    customer_li_list.setAttribute('class','customer-list')

    // server object ===> re.NAME,re.ORDERNUMBER,re.TOTAL,re.CONTACT,re.DATE,re.LIST
    // split to customer attributs
    name = listoflists[0]
    ordernumember = listoflists[1]
    total = listoflists[2]
    contact = listoflists[3]
    orderdate = listoflists[4]
    customerlist = listoflists[5];

    // set text to created elements
    title_span.innerHTML = name +" | "+ ordernumember;
    sub_title_label.innerHTML =  contact +" | "+ orderdate+" | "+total 
    stringfromlist = customerlist.toString();// convert to string 
    formatedlist =  stringfromlist.replace(/×/g,"<br>") //insert a <br> tag note:: × is different 4m x
    customer_li_list.innerHTML = formatedlist;
    
    // console.log(outer_ul);
    // console.log(title_span);
    // console.log(nested_ul);
    // console.log(customer_li_list);

    // appendChildrens to html
    sub_title_label.appendChild(customer_li_list); // close li
    nested_ul.appendChild(sub_title_label) // close label
    title_span.appendChild(nested_ul); //close ul
    outer_ul.appendChild(title_span); // close span
    htmldiv.appendChild(outer_ul); // close ul
     
    // customer_li_list.appendChild(title_span); // close li
    // sub_title_label.appendChild(customer_li_list)
    // nested_ul.appendChild(sub_title_label) // close label
    // outer_ul.appendChild(nested_ul); //close ul
    // outer_ul.appendChild(title_span); // close span
    // htmldiv.appendChild(outer_ul); // close ul


    // opening and clossing togglers....
    let toggler = document.getElementsByClassName("caret");
    let i;
    for (i = 0; i < toggler.length; i++) 
    {
        toggler[i].addEventListener("click", function() { console.log("clicked....")
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
    });
    }
}

/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           RECIEVED ORDERS
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/


function showdemo ()
{
    let custarray = [[ "Vinyl Matt Lollipop 4ltrs 10 45000 450,000", "05:24:32", "2020-10-28" ],[ "WeatherGuard Black 20ltrs 30 285000 8,550,000", "05:24:31", "2020-10-28"]]
        let list = 0;

        for (i=0; i<=custarray.length;i++)
        {
            // console.log("[][][][][]")
            
            // let firstelement = custarray[0];
            console.log("<><><>")
            console.log(custarray[list])
            let currentlist = custarray[list]
            CreateDynamicList (currentlist)
            list ++;
        }
}
    // ==================
function fetch_orders_received_all_data (endpointurl)
{
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            console.log(results)
            if (! results || !results.length){alert("No results found")}
            else
                {
                    let listindex = 0;
                    for (i=0; i<=results.length;i++)
                    {
                        let currentlistindex = results[listindex]
                        CreateDynamicList (currentlistindex)
                        listindex ++;
                    }
                }
        }
        req.send();
    setTimeout(save_show_all_data, seconds)
}


// ============================= view Today

function fetch_subdealer_orders_received_date_today_data ()
{
    document.getElementById("subdealer-orders-received-loader-date-today").style.display="block";
    setTimeout(subdealer_orders_view_by_date_today,loader_seconds)
}
function subdealer_orders_view_by_date_today ()
{
    document.getElementById("subdealer-orders-received-loader-date-today").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url+'subdealer_orders_view_by_date_today',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('subdealer-date-today-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Name","Avenue","Location", "Contacts","Price","Date","Time","Staff"]);
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
        setTimeout (save_by_date_today_data,seconds);       
}

// ============================= >>> date date
function fetch_subdealer_orders_received_date_date_data ()
{
    document.getElementById("subdealer-orders-received-loader-date-date").style.display="block";
    setTimeout(subdealer_orders_view_by_date_date,loader_seconds)
}
function subdealer_orders_view_by_date_date ()
{
    document.getElementById("subdealer-orders-received-loader-date-date").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url+'subdealer_orders_view_by_date_date',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('subdealer-date-date-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Avenue","Location", "Contacts","Price","Date","Time","Staff"]);
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
        let date = new FormData(document.getElementById('orders-date-date-form'));
        req.send(date);        
        setTimeout(save_date_date_data,seconds);
}

function fetch_subdealer_orders_received_from_to_all_data () 
{
    document.getElementById("subdealer-orders-received-loader-from-to-all").style.display="block";
    setTimeout(subdealer_orders_from_to_all,loader_seconds)
}
function subdealer_orders_from_to_all ()
{
    document.getElementById("subdealer-orders-received-loader-from-to-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url+'subdealer_orders_from_to_all',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('subdealer-from-to-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Avenue","Location", "Contacts","Price","Date","Time","Staff"]);
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
        let date =  new FormData(document.getElementById('subdealer-from-to-form'));
        req.send(date);        
        setTimeout(save_from_to,seconds);
}
// ======================================

// +++++++++++++++++++++++++++++++++++++++>>>
function fetch_subdealer_orders_received_last_week_all_data ()
{
    document.getElementById("subdealer-orders-received-loader-last-week-all").style.display="block";
    setTimeout(subdealer_orders_last_week_all,loader_seconds)
}

function subdealer_orders_last_week_all ()
{
    document.getElementById("subdealer-orders-received-loader-last-week-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url+'subdealer_orders_last_week_all_data',true)
    req.onload = function ()
        {
            document.getElementById("subdealer-orders-received-loader-last-week-all").style.display="none";
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('subdealer-last-week-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Avenue","Location", "Contacts","Price","Date","Time","Staff"]);
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
        setTimeout(save_show_last_week_all,seconds);
}

function fetch_subdealer_orders_received_this_month_all_data ()
{
    document.getElementById("subdealer-orders-received-loader-this-month-all").style.display="block";
    setTimeout(subdealer_orders_this_month_all,loader_seconds)
}

function subdealer_orders_this_month_all ()
{
    document.getElementById("subdealer-orders-received-loader-this-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url+'subdealer_orders_this_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('subdealer-this-month-all-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Name","Avenue","Location", "Contacts","Price","Date","Time","Staff"]);
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
        setTimeout(save_show_this_month_all,seconds);
}


// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_subdealer_orders_received_last_month_all_data ()
{
    document.getElementById("subdealer-orders-received-loader-last-month-all").style.display="block";
    setTimeout(subdealer_orders_last_month_all,loader_seconds)
}

function subdealer_orders_last_month_all ()
{
    document.getElementById("subdealer-orders-received-loader-last-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url+'subdealer_orders_last_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('subdealer-last-month-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Avenue","Location", "Contacts","Price","Date","Time","Staff"]);
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
        setTimeout(save_show_last_month_all,seconds);
}

// ========================================================================
// On storage
function save_show_all_data ()
{
    // let data = document.getElementById ("subdealer-show-all-tbody").innerHTML;
    let data = document.getElementById ("plascon-customer-list-div").innerHTML;

    localStorage.setItem("subdealerall", data);
    console.log("data saved well");
}

function save_by_date_today_data ()
{
    let data = document.getElementById ("subdealer-date-today-tbody").innerHTML;
    localStorage.setItem("subdealerdatetoday", data);
}
function save_date_date_data ()
{
    let data = document.getElementById ("subdealer-date-date-tbody").innerHTML;
    localStorage.setItem("subdealerdatedate", data);
}

function save_from_to ()
{
    let data = document.getElementById("subdealer-from-to-all-tbody").innerHTML;
    localStorage.setItem("subdealerfromtoall",data);
}

function save_show_last_week_all ()
{
    let data = document.getElementById ("subdealer-last-week-all-tbody").innerHTML;
    localStorage.setItem("subdealerlstweekall", data);
}

function save_show_this_month_all ()
{
    let data = document.getElementById ("subdealer-show-all-tbody").innerHTML;
    localStorage.setItem("subdealerdismthall", data);
}

function save_show_last_month_all ()
{
    let data = document.getElementById ("subdealer-last-month-all-tbody").innerHTML;
    localStorage.setItem("subdealerlstmthall", data);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Load_subdealer_Offline_Data () 
{
    document.getElementById("plascon-customer-list-div").innerHTML = localStorage.getItem("subdealerall");
    // document.getElementById("subdealer-date-today-tbody").innerHTML = localStorage.getItem("subdealerdatetoday");
    // document.getElementById("subdealer-date-date-tbody").innerHTML = localStorage.getItem("subdealerdatedate");
    // document.getElementById("subdealer-from-to-all-tbody").innerHTML = localStorage.getItem("subdealerfromtoall")
    // document.getElementById("subdealer-last-week-all-tbody").innerHTML = localStorage.getItem("subdealerlstweekall");
    // document.getElementById("subdealer-this-month-all-tbody").innerHTML = localStorage.getItem("subdealerdismthall");
    // document.getElementById("subdealer-last-month-all-tbody").innerHTML = localStorage.getItem("subdealerlstmthall");
}


function dolist ()
{
arr = [ "WeatherGuard Black 20ltrs 30 285000 8,550,000\n× WeatherGuard2 Black 20ltrs 30 285000 8,550,000\n× Vinyl Matt Lollipop 4ltrs 10 45000 450,000\n×", "Henry2", "2020-10-28" ]
customer_list = arr[0]
list_header = arr[1] + " |" + " "+ arr[2]

document.getElementById("list-header").innerHTML = list_header
// console.log(customer_list)

document.getElementById("customer-list").innerHTML = customer_list


}



// function fetch_orders_received_all_data (endpointurl, htmltbody,showalltbodydiv)
//     {
//         // document.getElementById("subdealer-orders-received-loader-all").style.display="none";
//         let req = new XMLHttpRequest();
//         req.open('post', ordersreceived_url + endpointurl,true)
//         req.onload = function ()
//             {
//                 let results = JSON.parse(this.responseText);
//                 console.log(results)
//                 if (! results || !results.length){alert("No results found")}
//                 else
//                     {
//                         let tbody = document.getElementById(htmltbody);
//                         tbody.innerHTML = ' ';
    
//                         // draw table
//                         let td,tr;
//                         // add table headings
//                         let th_names = new Array ();
//                         th_names.push(["Name","Colour","Location", "Contacts","Price","Date","Time"]);
//                         let columns_to_count = th_names[0].length;
//                         row = tbody.insertRow(-1); 
//                         for (let looper =0; looper<columns_to_count; ++looper)
//                             {
//                                 let headerNames = document.createElement("th");
//                                 headerNames.className='js_table_headers'
//                                 headerNames.innerHTML = th_names[0][looper];
//                                 row.appendChild(headerNames)
//                             }
    
//                         for (let table_row = 0; table_row < results.length; ++table_row)
//                             {
//                                 tr = document.createElement('tr');
//                                 tr.className='js_table_row';
//                                 for (let table_data = 0; table_data< (results[table_row].length);++table_data)
//                                     {
//                                         td = document.createElement('td');
//                                         td.setAttribute("align", "center"); 
//                                         td.innerHTML = results[table_row][table_data];
//                                         tr.appendChild(td)
//                                     }
//                                     tbody.appendChild(tr)
//                             }
//                     }
//             }
//             let div_tag = document.getElementById(showalltbodydiv);
//             req.send(div_tag);  
//             setTimeout(save_show_all_data,seconds);      
//     }