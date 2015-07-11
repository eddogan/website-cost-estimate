/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

 var webtype_prices = new Array();
 webtype_prices["custom"]=1500;
 webtype_prices["theme"]=350;
 webtype_prices["themetwo"]=250;

 var mobwebtype_prices = new Array();
 mobwebtype_prices["mobcustom"]=400;
 mobwebtype_prices["mobtheme"]=50;
 mobwebtype_prices["noneed"]=0;

 var pt_prices = new Array();
 pt_prices["one"]=1;
 pt_prices["six"]=1.5;
 pt_prices["eleven"]=2;

 var p_prices = new Array();
 p_prices["zero"]=1;
 p_prices["ten"]=1.25;
 p_prices["twentyfive"]=1.5;
 p_prices["fifty"]=1.75;

 function getwebtypePrice()
{  
    var webtypePrice=0;
    var theForm = document.forms["cakeform"];
    var webtype = theForm.elements["type"];
    for(var i = 0; i < webtype.length; i++)
    {
        if(webtype[i].checked)
        {
            webtypePrice = webtype_prices[webtype[i].value];
            break;
        }
    }
    return webtypePrice;
}

function getmobwebtypePrice()
{  
    var mobwebtypePrice=0;
    var theForm = document.forms["cakeform"];
    var mobwebtype = theForm.elements["mobtype"];
    for(var i = 0; i < mobwebtype.length; i++)
    {
        if(mobwebtype[i].checked)
        {
            mobwebtypePrice = mobwebtype_prices[mobwebtype[i].value];
            break;
        }
    }
    return mobwebtypePrice;
}

function getptPrice()
{  
    var ptPrice=0;
    var theForm = document.forms["cakeform"];
    var pt = theForm.elements["pt"];
    for(var i = 0; i < pt.length; i++)
    {
        if(pt[i].checked)
        {
            ptPrice = pt_prices[pt[i].value];
            break;
        }
    }
    return ptPrice;
}

function getpPrice()
{  
    var pPrice=0;
    var theForm = document.forms["cakeform"];
    var p = theForm.elements["p"];
    for(var i = 0; i < p.length; i++)
    {
        if(p[i].checked)
        {
            pPrice = p_prices[p[i].value];
            break;
        }
    }
    return pPrice;
}
 
function ecommercePrice()
{
    var ecomPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var ecom = theForm.elements["ecom"];

    //If they checked the box set candlePrice to 5
    if(ecom.checked==true)
    {
        ecomPrice=500;
    }
    //finally we return the candlePrice
    return ecomPrice;
}

function ecommercePrice2()
{
    var ecomPrice2=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var ecom2 = theForm.elements["ecom2"];

    //If they checked the box set candlePrice to 5
    if(ecom2.checked==true)
    {
        ecomPrice2=1500;
    }
    //finally we return the candlePrice
    return ecomPrice2;
}

function membershipPrice()
{
    var memPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var mem = theForm.elements["mem"];

    //If they checked the box set candlePrice to 5
    if(mem.checked==true)
    {
        memPrice=500;
    }
    //finally we return the candlePrice
    return memPrice;
}

function membershipPrice2()
{
    var memPrice2=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var mem2 = theForm.elements["mem2"];

    //If they checked the box set candlePrice to 5
    if(mem2.checked==true)
    {
        memPrice2=750;
    }
    //finally we return the candlePrice
    return memPrice2;
}

function apiPrice()
{
    var apiPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var api = theForm.elements["api"];

    //If they checked the box set candlePrice to 5
    if(api.checked==true)
    {
        apiPrice=500;
    }
    //finally we return the candlePrice
    return apiPrice;
}

function conPrice()
{
    var conPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var con = theForm.elements["con"];

    //If they checked the box set candlePrice to 5
    if(con.checked==true)
    {
        conPrice=500;
    }
    //finally we return the candlePrice
    return conPrice;
}

function seoPrice()
{
    var seoPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var seo = theForm.elements["seo"];

    //If they checked the box set candlePrice to 5
    if(seo.checked==true)
    {
        seoPrice=500;
    }
    //finally we return the candlePrice
    return seoPrice;
}

function speedPrice()
{
    var speedPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var speed = theForm.elements["speed"];

    //If they checked the box set candlePrice to 5
    if(speed.checked==true)
    {
        speedPrice=500;
    }
    //finally we return the candlePrice
    return speedPrice;
}

function copyPrice()
{
    var copyPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var copy = theForm.elements["copy"];

    //If they checked the box set candlePrice to 5
    if(copy.checked==true)
    {
        copyPrice=500;
    }
    //finally we return the candlePrice
    return copyPrice;
}

function mediaPrice()
{
    var mediaPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var media = theForm.elements["media"];

    //If they checked the box set candlePrice to 5
    if(media.checked==true)
    {
        mediaPrice=500;
    }
    //finally we return the candlePrice
    return mediaPrice;
}

function qualityPrice()
{
    var qualityPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var quality = theForm.elements["quality"];

    //If they checked the box set candlePrice to 5
    if(quality.checked==true)
    {
        qualityPrice=500;
    }
    //finally we return the candlePrice
    return qualityPrice;
}
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var totalwebPrice = getwebtypePrice() + getmobwebtypePrice() + ecommercePrice() + ecommercePrice2() + membershipPrice() + membershipPrice2() + apiPrice() + conPrice() + seoPrice() + speedPrice() + qualityPrice() + mediaPrice() + copyPrice();
    var grandtotalwebPrice = getptPrice() * totalwebPrice * getpPrice();
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For Your Website $"+grandtotalwebPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}