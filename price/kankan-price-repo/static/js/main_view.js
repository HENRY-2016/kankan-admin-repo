
    // On ViewOrders Page
    function HideAllVeiwDivs ()
    {
        // =============> RETAIL
        document.getElementById('plascon-retail-view-all-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-date-div').style.display='none'
        document.getElementById('plascon-retail-orders-by-from-to-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-last-week-div').style.display='none';
        document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'none';
        // grand child
        document.getElementById('plascon-retail-by-date-today-grand-child-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-date-date-div').style.display = 'none';
    
    }
    
    
    // ===========> RETAIL 
    function ShowPlasconRetailViewAllDiv ()
    {
        document.getElementById('plascon-retail-orders-by-date-div').style.display='none';
        document.getElementById('plascon-retail-orders-by-from-to-div').style.display='none';
        document.getElementById('plascon-retail-orders-by-last-week-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'none';
        document.getElementById('plascon-retail-view-all-div').style.display = 'block';
    
    }
    
    function ShowPlasconRetailOrdersByDateDiv ()
    {
        document.getElementById('plascon-retail-view-all-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-from-to-div').style.display='none';
        document.getElementById('plascon-retail-orders-by-last-week-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-date-div').style.display='block';
    
    }
    
    function ShowPlasconRetailOrdersByFromToDiv ()
    {
        document.getElementById('plascon-retail-view-all-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-date-div').style.display='none';
        document.getElementById('plascon-retail-orders-by-last-week-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-from-to-div').style.display='block';
    }
    function ShowPlasconRetailOrdersByLastWeekDiv ()
    {
        document.getElementById('plascon-retail-view-all-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-date-div').style.display='none';
        document.getElementById('plascon-retail-orders-by-from-to-div').style.display='none';
        document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-last-week-div').style.display = 'block';
    }
    
    function ShowPlasconRetailOrdersByThisMonthDiv ()
    {
        document.getElementById('plascon-retail-view-all-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-date-div').style.display='none';
        document.getElementById('plascon-retail-orders-by-from-to-div').style.display='none';
        document.getElementById('plascon-retail-orders-by-last-week-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'block';
    }
    
    function ShowPlasconRetailOrdersByLastMonthDiv ()
    {
        document.getElementById('plascon-retail-view-all-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-date-div').style.display='none';
        document.getElementById('plascon-retail-orders-by-from-to-div').style.display='none';
        document.getElementById('plascon-retail-orders-by-last-week-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-this-month-div').style.display = 'none';
        document.getElementById('plascon-retail-orders-by-last-month-div').style.display = 'block';
    }
    
    // Grand children
    function ShowPlasconRetailByDateTodayGrandChildDiv ()
    {document.getElementById('plascon-retail-orders-by-date-date-div').style.display = 'none';document.getElementById('plascon-retail-by-date-today-grand-child-div').style.display = 'block';}
    
    function ShowPlasconRetailOrdersByDateDateDiv ()
    {document.getElementById('plascon-retail-by-date-today-grand-child-div').style.display = 'none';document.getElementById('plascon-retail-orders-by-date-date-div').style.display = 'block';}
    
