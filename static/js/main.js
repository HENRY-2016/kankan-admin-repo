
// 192.168.43.23


function CreateCustomAlertBox()
{
    this.render = function(dialog){
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        let AlertBoxDisplayArea = document.getElementById('alert-box-display-area');
        let HtmlAlertBox = document.getElementById('alert-box');
        AlertBoxDisplayArea.style.display = "block";
        AlertBoxDisplayArea.style.height = winH+"px";
        HtmlAlertBox.style.left = (winW/2) - (550 * .5)+"px";
        HtmlAlertBox.style.top = "100px";
        HtmlAlertBox.style.display = "block";
        document.getElementById('alert-box-header').innerHTML = "Network Or Server Error ";
        document.getElementById('alert-box-body').innerHTML = dialog;
        document.getElementById('alert-box-footer').innerHTML = '<button class="ok-alert-btn" onclick="Alert.ok()">OK</button>';
    }
    this.ok = function()
        {
            document.getElementById('alert-box').style.display = "none";
            document.getElementById('alert-box-display-area').style.display = "none";
        }
}
var Alert = new CreateCustomAlertBox();

function ShowAlertBox (){Alert.render('<center>Please turn on <br> your network <br>and <br> Try Again</center>')}


// Adonoi
function LoadAdonoiUsingGitHub ()
{
    if(!navigator.onLine)
    {
        CreateCustomAlertBox ()
    }
    
    if(navigator.onLine)
    {window.location='https://henry-2016.github.io/bigtime-admin-server-repo/'}
    
}

function LoadAdonoiUsingRaspberry ()

{
    if(!navigator.onLine)
        {CreateCustomAlertBox ()}
    if(navigator.onLine)
        {window.location="http://192.168.43.140:80/bigtime-admin-server-repo/index.html"}
}

