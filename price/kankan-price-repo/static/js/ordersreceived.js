


var ordersreceived_url = "http://127.0.0.1:4444/";
// var ordersreceived_url = "http://178.79.182.213:4444/" 



function CreateDynamicCustomerDetails (results,OuterHtmlDiv)
{
    for (i=0;i<results.length;i++)
    {
        // USERNAME,OUTLET,LIST,TOTAL,DATE,ORDERNUMBER,MONTH
    let HtmlDiv = document.getElementById(OuterHtmlDiv);
    let DivContainer = document.createElement('div');
    let User_Name_Label = document.createElement('label');
    let User_Name_Results_Label = document.createElement('label');
    let Outlet_Label = document.createElement('label');
    let Outlet_Results_Label = document.createElement('label');
    let Date_Label = document.createElement('label');
    let Date_Results_Label = document.createElement('label');
    let Amount_Label = document.createElement('label');
    // let Amount_Results_Label = document.createElement('input');
    let Amount_Results_Label = document.createElement('label');
    let List_Label = document.createElement('label');
    let List_Results_Label = document.createElement('label');


    // Set attributs ...
    DivContainer.setAttribute('class','results-div-container');
    User_Name_Label.setAttribute('class','user-name-label');
    User_Name_Results_Label.setAttribute('id','username-results-label');
    Outlet_Label.setAttribute('class','');
    Outlet_Results_Label.setAttribute('id','outlet-results-label')
    Date_Label.setAttribute('class','');
    Date_Results_Label.setAttribute('id','Date-results-label');
    Amount_Label.setAttribute('class','')
    Amount_Results_Label.setAttribute('id','amount-results-label')
    // Amount_Results_Label.setAttribute('class','grand-total-input')
    List_Label.setAttribute('class','')
    List_Results_Label.setAttribute('id','list-results-label')

    // Create text
    User_Name_Label.innerHTML = "<b>UserName::"
    User_Name_Results_Label.innerHTML = results[i][0]+"<br>"
    Outlet_Label.innerHTML = "<b>Outlet::"
    Outlet_Results_Label.innerHTML = results[i][1]+"<br>"
    Date_Label.innerHTML = "<b>Date::"
    Date_Results_Label.innerHTML = results[i][2]+"<br>"
    Amount_Label.innerHTML = "<b>Amount::"
    // Amount_Results_Label.value = results[i][3]
    Amount_Results_Label.innerHTML = results[i][3]
    // List_Label.innerHTML = "<br><b>List::<br>"
    List_Label.innerHTML = "<br><b>-----------------------------<br>"
    list = results[i][4];
    stringfromlist = list.toString();// convert to string 
    formatedlist =  stringfromlist.replace(/×/g,"<br>") //insert a <br> tag note:: × is different 4m x
    List_Results_Label.innerHTML = formatedlist +"================================== <br><br>"

    // appendChild to ....
    List_Label.appendChild(List_Results_Label)
    Amount_Results_Label.appendChild(List_Label);
    Amount_Label.appendChild(Amount_Results_Label);
    Date_Results_Label.appendChild(Amount_Label);
    Date_Label.appendChild(Date_Results_Label);
    Outlet_Results_Label.appendChild(Date_Label);
    Outlet_Label.appendChild(Outlet_Results_Label);
    User_Name_Results_Label.appendChild(Outlet_Label);
    User_Name_Label.appendChild(User_Name_Results_Label);
    DivContainer.appendChild(User_Name_Label);
    HtmlDiv.appendChild(DivContainer);
    }
}

function CreateDynamicCustomerDetailsFromTo (results,OuterHtmlDiv)
{
    for (i=0;i<results.length;i++)
    {
        // USERNAME,OUTLET,LIST,TOTAL,DATE,ORDERNUMBER,MONTH
    let HtmlDiv = document.getElementById(OuterHtmlDiv);
    let DivContainer = document.createElement('div');
    let User_Name_Label = document.createElement('label');
    let User_Name_Results_Label = document.createElement('label');
    let Outlet_Label = document.createElement('label');
    let Outlet_Results_Label = document.createElement('label');
    let Date_Label = document.createElement('label');
    let Date_Results_Label = document.createElement('label');
    let Amount_Label = document.createElement('label');
    // let Amount_Results_Label = document.createElement('input');
    let Amount_Results_Label = document.createElement('label');
    let List_Label = document.createElement('label');
    let List_Results_Label = document.createElement('label');


    // Set attributs ...
    DivContainer.setAttribute('class','results-div-container');
    User_Name_Label.setAttribute('class','user-name-label');
    User_Name_Results_Label.setAttribute('id','username-results-label');
    Outlet_Label.setAttribute('class','');
    Outlet_Results_Label.setAttribute('id','outlet-results-label')
    Date_Label.setAttribute('class','');
    Date_Results_Label.setAttribute('id','Date-results-label');
    Amount_Label.setAttribute('class','')
    Amount_Results_Label.setAttribute('id','amount-results-label')
    // Amount_Results_Label.setAttribute('class','grand-total-input')
    List_Label.setAttribute('class','')
    List_Results_Label.setAttribute('id','list-results-label')

    // Create text
    User_Name_Label.innerHTML = "<b>UserName::"
    User_Name_Results_Label.innerHTML = results[i][1]+"<br>"
    Outlet_Label.innerHTML = "<b>Outlet::"
    Outlet_Results_Label.innerHTML = results[i][2]+"<br>"
    Date_Label.innerHTML = "<b>Date::"
    Date_Results_Label.innerHTML = results[i][5]+"<br>"
    Amount_Label.innerHTML = "<b>Amount::"
    Amount_Results_Label.innerHTML = results[i][4]
    // List_Label.innerHTML = "<br><b>List::<br>"
    List_Label.innerHTML = "<br><b>-----------------------------<br>"
    list = results[i][3];
    stringfromlist = list.toString();// convert to string 
    formatedlist =  stringfromlist.replace(/×/g,"<br>") //insert a <br> tag note:: × is different 4m x
    List_Results_Label.innerHTML = formatedlist +"================================== <br><br>"

    // appendChild to ....
    List_Label.appendChild(List_Results_Label)
    Amount_Results_Label.appendChild(List_Label);
    Amount_Label.appendChild(Amount_Results_Label);
    Date_Results_Label.appendChild(Amount_Label);
    Date_Label.appendChild(Date_Results_Label);
    Outlet_Results_Label.appendChild(Date_Label);
    Outlet_Label.appendChild(Outlet_Results_Label);
    User_Name_Results_Label.appendChild(Outlet_Label);
    User_Name_Label.appendChild(User_Name_Results_Label);
    DivContainer.appendChild(User_Name_Label);
    HtmlDiv.appendChild(DivContainer);
    }
}

/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           RECIEVED ORDERS
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

// ==================
function FetchOrdersDataFromServer  (endpointurl,OuterHtmlDiv)
{

    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    document.getElementById(OuterHtmlDiv).innerText = "";
                    CreateDynamicCustomerDetails(results,OuterHtmlDiv)
                }
        }
        req.send();
}

function FetchOrdersDataFromServerWithAForm  (endpointurl,OuterHtmlDiv,HtmlForm)
{
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length) {alert("No results found")}
            else
                {
                    console.log(results);
                    document.getElementById(OuterHtmlDiv).innerText = "";
                    CreateDynamicCustomerDetailsFromTo(results,OuterHtmlDiv)
                }
        }
        let form = new FormData(document.getElementById(HtmlForm));
        req.send(form);
}

function FetchOrdersDataFromServerLastWeek  (endpointurl,OuterHtmlDiv)
{

    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    document.getElementById(OuterHtmlDiv).innerText = "";
                    CreateDynamicCustomerDetailsFromTo(results,OuterHtmlDiv)
                }
        }
        req.send();
}