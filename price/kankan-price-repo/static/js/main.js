// ============================================================
//
//			PRODUCTS PRICES
//
//	===========================================================

/**
 * fast dry 1 ltr
 */
let server_url = 'http://127.0.0.1:4444/'
// let server_url = 'http://178.79.182.213:4444/'


function LoadOrdersViewPage () {window.location="ViewOrders.html";}
function LoadOrdersPostPage () {window.location="index.html";}


var Paint_Factory_Prices = 
				{
                    'Colourant PB':[0,0,24500],
                    'Colourant PC':[0,0,23800],
                    'Colourant PD':[0,0,35500],
                    'Colourant PE':[0,0,32900],
                    'Colourant PF':[0,0,37200],
                    'Colourant PG':[0,0,75300],
                    'Colourant PH':[0,0,80600],
                    'Colourant PJ':[0,0,34900],
                    'Colourant PK':[0,0,36100],
                    'Colourant PL':[0,0,26500],
                    'Colourant PI':[0,0,67500],
                    'Colourant PP':[0,0,113600],
                    'Colourant PQ':[0,0,112800],
                    'Colourant PR':[0,0,68800],
                    'Colourant PU':[0,0,92400],
                    'Colourant PV':[0,0,76300],

                    'Base E W/G':[267330,56210,15190],
                    'Base W2 W/G':[267330,56210,15190],
                    'Base Wo W/G':[267330,56210,15190],

                    'Base E V/S':[251860,50960,13720],
                    'Base W2 V/S':[251860,50960,13720],
                    'Base Wo V/S':[251860,50960,13720],

                    'Base E V/M':[206080,41370,10640],
                    'Base W2 V/M':[206080,41370,10640],
                    'Base Wo V/M':[206080,41370,10640],

                    'Base E S/G':[311640,63420,17290],
                    'Base W2 S/G':[311640,63420,17290],
                    'Base W3 S/G':[311640,63420,17290],
                    'Base Wo S/G':[311640,63420,17290],

                    'Faast Dry':[0,63600,0],
                    'Thinner Stardand':[0,50232,10530],



                    'Graffiante':[147800,0,0],
                    'Epoxy Hardener':[0,0,37207],
                    'Epoxy Floor White':[0,111618,0],


					'Anti-Mosquito':[331500,67080,18720],
					'Vinyl Matt':[218712,43914,11310],
					'Wall Cover':[195390,40170,9906],
                    'Vinyl Silk':[267306,54054,14586],
					'Matt Acrylic':[320580,66066,17940], 

					'Budget Emulsion':[ 63700,18130,0],
					'Budget Gloss':[35182,11300,5800],
                    'Undercoat':[57200,18130],
                    'Nc Seading Sealer':[0,88218,0],


                    'WeatherGuard':[283686,59670,16146],
					'WeatherGuard Textured':[305136,63882,17316],
					'WeatherGuard Extreme':[305136,63882,17316],
					'Ceiling Emulsion':[153270,31980,0],
					'Plaster Primer':[110916,25584,0], 

					'Acrylic Binder':[301938,60996,15600],
                    'Beads Binder':[301938,60996,15600],
					'Italian Stucco':[219414,49296,0],

					'Super Gloss':[330720,67314,18330],
					'Eggshell':[347490,72306,19890],

					'Hi Opacity Undercoat':[271752,56082,17550],
                    'Acrylic Primer Sealer Undercoat':[277446,57174,18330],

					'Wood Primer':[273858,55848,15912],
					'Aluminium Wood Primer':[303576,62010 ,17316],
					'Alkali Resistant Primer':[334074,68016,18330],
					'Penetrating Primer':[256854,52650,14664],
					'Red Oxide Primer ':[287352,58266,14664],
					'RedOxide Zinc Chromate Primer':[303576,62010,15288],
					'Zinc Chromate Primer':[311532,63414,17316],
					'Zinc Phosphate Primer':[0,77454,19890],
                    '2 Pack Etch Primer (with Hardener)':[0,105534,26520],


					'Matt Varnish':[279396,57252,14352],
					'Roof Paint':[304512,61698,16614], 
					'Floor Paint ':[304512,61698,16614],
					'Etch Acid':[0,68172,20046],
					'Acrylic Roof/Floor':[302562,62400,16848],
					'Road Marking White/Black ':[394758,79716,20748],
					'Road Marking Yellow/Red  ':[451854,91572,23790],
					'Aluminox Bronze Green':[377832,80730,21294],
					'Blackboard Paint':[319176,69264,16300],
					'Stain Sealer':[383604,77454,21684],
					'Paint Remover':[383604,77454,21684],
					'White Spirit':[155688,40404,9282],
					'High Gloss Thinner':[237354,60450,13572],
					'Road Marking Thinner':[192036,49062,11076],
					'Graffiante ':[171054,0,0],
					'Dampseal':[0,74100,19500],
					'Brickseal':[0,78,000,20514],
                }

                
function DisplayCostPrice (type_id,size_id,cost_input_id)
{
    console.log("DisplayCostPrice is called...")
    type = document.getElementById(type_id).value;
    size = document.getElementById(size_id).value;

    console.log('Paint Type::'+type);
    console.log('Paint Size::'+size);

    halfltr = "0.5ltr"
    oneltr = "1ltr"
    fourltrs = "4ltrs"
    twentyltrs = "20ltrs"

    //Paint_Factory_Prices  {"Eggshel": ["200000", "75000", "20000"], "Super": ["330000", "70000", "20000"]}

    // Get the product type name selected.....
    Paint_Name_Type = Object.keys(Paint_Factory_Prices).filter(key => key == type)
    console.log('Paint_Name_Type :: '+Paint_Name_Type);
    Paint_Name_Type_string = Paint_Name_Type.toString() // convert from arrary to string
    console.log('Paint_Name_Type_string :: '+ Paint_Name_Type_string)
    // Get the product cost basesing on the size
    if (size == twentyltrs)
        {
            console.log('Calculating 20 Ltrs Price...')
            // Cost_Price = Object.values(Paint_Factory_Prices[Paint_Name_Type_string][0]) // fst index
            Cost_Price = Paint_Factory_Prices[Paint_Name_Type_string][0] // fst index
            console.log(Cost_Price)
            // convert from arrary to string & rmv commas
            price = Cost_Price.toString().split(",").join("");
            document.getElementById(cost_input_id).value = price;
        }

    else if (size == fourltrs)
        {
            Cost_Price = Paint_Factory_Prices[Paint_Name_Type_string][1] // sce index
            // convert from arrary to string & rmv commas
            price = Cost_Price.toString().split(",").join("");
            document.getElementById(cost_input_id).value = price;
        }
    else if (size == oneltr)
        {
            Cost_Price = Paint_Factory_Prices[Paint_Name_Type_string][2] // thrd index
            // convert from arrary to string & rmv commas
            price = Cost_Price.toString().split(",").join("");
            document.getElementById(cost_input_id).value = price;
        }
    else if (size == halfltr)
        {
            Cost_Price = Paint_Factory_Prices[Paint_Name_Type_string][2] // fth index bg
            // convert from arrary to string & rmv commas
            price = Cost_Price.toString().split(",").join("");
            document.getElementById(cost_input_id).value = price;
        }
    else {alert("... Invalid input ...");}
}


                // ===================
                // ON CUSTOMER LIST
                // ===================
// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) 
{
    let span = document.createElement("SPAN");
    // let txt = document.createTextNode("\u00D7");
    let txt = document.createTextNode("X");
    span.className = "close";
    
    // txt.setAttribute('onclick','closediv()')
    span.appendChild(txt);
    console.log('span is ... ::: '+ span);
    myNodelist[i].appendChild(span);
}

// Create a new list item when clicking on the "Add" button
function CreatCustomerList(typeinputid, sizeinputid, qtyinputid,amountinputid,totalinputid,unorderedlistid) 
{
    let li = document.createElement("li");
    li.className= "list-class"
    // get input values
    let type = document.getElementById(typeinputid).value;
    let size = document.getElementById(sizeinputid).value;
    // let colour = document.getElementById(colourinputid).value;
    let qty = document.getElementById(qtyinputid).value;
    let amount = document.getElementById(amountinputid).value;
    let total = document.getElementById(totalinputid).value;
    // creat a string
    let liststring = type  + " "+" "+" "+" "+size + " "+ " "+" "+ qty + " "+" "+" " +" " + amount + " "+ " " +" " + " "+ total 
    console.log(liststring)
    // liststring.className = 'created-list-string-class';
    let customerlist = document.createTextNode(liststring);
    li.appendChild(customerlist);
    if (type === '' || size == ''|| qty === '') 
        {
            // alert("Enter Type,Size, Quantity");
            document.getElementById('display-msg-label').style.display='block';
        } 
    else {document.getElementById(unorderedlistid).appendChild(li);}
    
    // clear the inputs
    document.getElementById(typeinputid).value = "";
    document.getElementById(sizeinputid).value = "";
    // document.getElementById(colourinputid).value = "";
    document.getElementById(qtyinputid).value = "";
    document.getElementById(amountinputid).value = "";
    document.getElementById(totalinputid).value = "";

    let span = document.createElement("SPAN");
    let x_txt = document.createTextNode("\u00D7");
    span.className = "close-x-on-lists";
    // span.
    span.appendChild(x_txt);
    li.appendChild(span);

    // click on a close button to remove a div on the current list item
    let close = document.getElementsByClassName("close-x-on-lists");
    for (i = 0; i < close.length; i++) 
        {
            close[i].onclick = function() 
            {
                console.log("Clossing a div body")
                let div = this.parentElement;
                div.style.display = "none";
                div.remove()
            }
        }
}




// collecting data
// var customer_order_list;
// function CreateArray ()
// {
//     let listarrary =[]
//     $("#un-ordered-list-id li").each((id, elem) => {console.log(elem.innerText); listarrary.push(elem.innerText) });

// console.log(listarrary)
// console.log("listarrary.join(' ').trim()")
// let stringfromarray =  listarrary.join(' ').trim()
// customer_order_list = stringfromarray
// }


function CalculateSubtotalAutomatically ()
{
    // this computs the sub - tatol automatically
    // let type_input_id = document.getElementById("type-input-id").value;
    // let size_input_id = document.getElementById("size-input-id").value;
    // let colour_input_id  = document.getElementById("colour-input-id").value;
    let qty_input_id  = document.getElementById("qty-input-id").value;
    let cost_price_id = document.getElementById("cost-price-id").value;

    if (!cost_price_id == '' & !qty_input_id =='')
        {
            // qty_input_id.isInteger()    
            let price = parseFloat(qty_input_id) * parseFloat(cost_price_id);    
            let formatedprice = price.toLocaleString();
            document.getElementById("total-input-id").value =  formatedprice;

        }
    // else{alert("feild cost_price_id or qty_price_id is empty")}
}

function CalculateGrandtotalAutomatically ()
    {
        let total = 0;
        $("li").each( function () 
            {
                str = $(this).text().replace(" ", "-")
                len = str.length
                for (let i =0; i< len; i++)
                    {
                        str = str.replace(" ", "-")
                    }
                // alert(str) 
                subtotal = str.split("-").pop()                            
                subtotal1  = subtotal.slice(0, -1)
                comasoutnum =  subtotal1.replace(/,/g,"")
                subtotalint = parseInt(comasoutnum)
                total += subtotalint 
                document.getElementById("final-total-id").value = total.toLocaleString()+' /=';
                console.log(total);
            });
    }



function SubmiteData ( urlendpoint)
// function SubmiteData ()
{
    // collecting data
    let customer_order_list;
    let listarrary =[]
    $("#un-ordered-list-id li").each((id, elem) => {listarrary.push(elem.innerText) });
    let stringfromarray =  listarrary.join(' ').trim() // make a string from array
    customer_order_list = stringfromarray

    console.log(customer_order_list)


    // process data submision
    $.ajax({
            data :
                {
                    username : $("#username-input-id").val(),
                    outlet : $("#outlet-input-id").val(),
                    total : $("#final-total-id").val(),
                    items_list: customer_order_list
                },

                url : server_url + urlendpoint,
                type : 'POST',
                encode : true
            })

    // callback function 
    // .done(function (data)
    //     {
    //         if(data.error)
    //             {
    //                 console.log("Something went wrong")
    //             }
    //         else {console.log("sumited well..")}

    //     }
    // );
            
}

























function autocomplete(inp, arr) 
{
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    console.log('autocomplete fun called...')
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) 
        {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) 
                {
                /*check if the item starts with the same letters as the text field value:*/
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) 
                    {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                            b.addEventListener("click", function(e) {
                            /*insert the value for the autocomplete text field:*/
                            inp.value = this.getElementsByTagName("input")[0].value;
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                            closeAllLists();
                        });
                        a.appendChild(b);
                    }
                }
        });
        

    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) 
        {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) 
                {
                    /*If the arrow DOWN key is pressed,
                    increase the currentFocus variable:*/
                    currentFocus++;
                    /*and and make the current item more visible:*/
                    addActive(x);
                } 
            else if (e.keyCode == 38) 
            { //up
                /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
                currentFocus--;
                /*and and make the current item more visible:*/
                addActive(x);
            } 
            else if (e.keyCode == 13) 
            {
                /*If the ENTER key is pressed, prevent the form from being submitted,*/
                e.preventDefault();
                if (currentFocus > -1) 
                    {
                        /*and simulate a click on the "active" item:*/
                        if (x) x[currentFocus].click();
                    }
            }
        });

    function addActive(x) 
        {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
        }
    function removeActive(x) 
        {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) 
                {
                    x[i].classList.remove("autocomplete-active");
                }
        }
    function closeAllLists(elmnt) 
        {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) 
                {
                    if (elmnt != x[i] && elmnt != inp) 
                    {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
        }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {closeAllLists(e.target);});
} 
// // Create an array of Names From Paint_Factory_Prices
// Paint_types = Object.keys(Paint_Factory_Prices); 
// console.log(Paint_types)
// autocomplete(document.getElementById("type-input-id"), Paint_types)
                