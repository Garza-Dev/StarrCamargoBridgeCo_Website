//Booleans 
var HrsOfOpBtnIsOn;
var CrgHrBtnIsOn;
var FrSchBtnIsOn;
var PermItsBtnIsOn;
var ProhItsBtnIsOn;


//Main Hours Info Button Functions

function HrsOfOpBtn() {

    HrsOfOpBtnIsOn = true;
    CrgHrBtnIsOn = false;
    FrSchBtnIsOn = false;
    PermItsBtnIsOn = false;
    ProhItsBtnIsOn = false;

    //Changes Look of Button/Subheading Title
    ChangeAllButtons();

    //Change InfoBox Header Text
    ChangeInfoBoxHeader();
}

function CrgHrsBtn() {
    
    HrsOfOpBtnIsOn = false;
    CrgHrBtnIsOn = true;
    FrSchBtnIsOn = false;
    PermItsBtnIsOn = false;
    ProhItsBtnIsOn = false;
    
    //Changes Look of Button/Subheading Title
    ChangeAllButtons();

    //Change InfoBox Header Text
    ChangeInfoBoxHeader();
}

function FrSchBtn() {
   
    HrsOfOpBtnIsOn = false;
    CrgHrBtnIsOn = false;
    FrSchBtnIsOn = true;
    PermItsBtnIsOn = false;
    ProhItsBtnIsOn = false;
    
    //Changes Look of Button/Subheading Title
    ChangeAllButtons();

    //Change InfoBox Header Text
    ChangeInfoBoxHeader();
}

function PermItsBtn() {
   
    HrsOfOpBtnIsOn = false;
    CrgHrBtnIsOn = false;
    FrSchBtnIsOn = false;
    PermItsBtnIsOn = true;
    ProhItsBtnIsOn = false;
    
    //Changes Look of Button/Subheading Title
    ChangeAllButtons();

    //Change InfoBox Header Text
    ChangeInfoBoxHeader();
}

function ProhItsBtn() {

    HrsOfOpBtnIsOn = false;
    CrgHrBtnIsOn = false;
    FrSchBtnIsOn = false;
    PermItsBtnIsOn = false;
    ProhItsBtnIsOn = true;
    
    //Changes Look of Button/Subheading Title
    ChangeAllButtons();

    //Change InfoBox Header Text
    ChangeInfoBoxHeader();
}

function ChangeAllButtons() {

    //Hours Of Operation Button Style
    if(HrsOfOpBtnIsOn == true) 
    {
        document.getElementById("wavyPHoursOp").style.display = "inline-block";
        document.getElementById("nonwavyPHoursOp").hidden = true;

        document.getElementById("HoursOpBtn").style.borderBottomColor = "white";
        document.getElementById("HoursOpBtn").style.backgroundColor = "white";
        document.getElementById("HoursOpBtn").style.height = "68px";
        document.getElementById("HoursOpBtn").style.width = "auto";
        document.getElementById("HoursOpBtn").style.transform = "translateY(2px)";
    }
    if(HrsOfOpBtnIsOn == false) 
    {
        document.getElementById("wavyPHoursOp").style.display = "none";
        document.getElementById("nonwavyPHoursOp").hidden = false;

        document.getElementById("HoursOpBtn").style.backgroundColor = "rgb(209, 209, 209)";
        document.getElementById("HoursOpBtn").style.height = "56px";
        document.getElementById("HoursOpBtn").style.width = "auto";
        document.getElementById("HoursOpBtn").style.transform = "translateY(12px)";
        document.getElementById("HoursOpBtn").style.borderBottomColor = "black";
    }

    //Cargo Vehicle Hours Button Style
    if(CrgHrBtnIsOn == true)
    {
        document.getElementById("wavyPCargoHr").style.display = "inline-block";
        document.getElementById("nonwavyPCargoHr").hidden = true;

        document.getElementById("CargoHrBtn").style.borderBottomColor = "white";
        document.getElementById("CargoHrBtn").style.backgroundColor = "white";
        document.getElementById("CargoHrBtn").style.height = "68px";
        document.getElementById("CargoHrBtn").style.width = "auto";
        document.getElementById("CargoHrBtn").style.transform = "translateY(2px)";
    }
    if(CrgHrBtnIsOn == false)
    {
        document.getElementById("wavyPCargoHr").style.display = "none";
        document.getElementById("nonwavyPCargoHr").hidden = false;

        document.getElementById("CargoHrBtn").style.backgroundColor = "rgb(209, 209, 209)";
        document.getElementById("CargoHrBtn").style.height = "56px";
        document.getElementById("CargoHrBtn").style.width = "auto";
        document.getElementById("CargoHrBtn").style.transform = "translateY(12px)";
        document.getElementById("CargoHrBtn").style.borderBottomColor = "black";
    }

    //Fare Schedules Button Style
    if(FrSchBtnIsOn == true)
    {
        document.getElementById("wavyPFareSch").style.display = "inline-block";
        document.getElementById("nonwavyPFareSch").hidden = true;

        document.getElementById("FareSchBtn").style.borderBottomColor = "white";
        document.getElementById("FareSchBtn").style.backgroundColor = "white";
        document.getElementById("FareSchBtn").style.height = "68px";
        document.getElementById("FareSchBtn").style.width = "auto";
        document.getElementById("FareSchBtn").style.transform = "translateY(2px)";
    }
    if(FrSchBtnIsOn == false)
    {
        document.getElementById("wavyPFareSch").style.display = "none";
        document.getElementById("nonwavyPFareSch").hidden = false;

        document.getElementById("FareSchBtn").style.backgroundColor = "rgb(209, 209, 209)";
        document.getElementById("FareSchBtn").style.height = "56px";
        document.getElementById("FareSchBtn").style.width = "auto";
        document.getElementById("FareSchBtn").style.transform = "translateY(12px)";
        document.getElementById("FareSchBtn").style.borderBottomColor = "black";
    }

    //Permitted Items Button Style
    if(PermItsBtnIsOn == true)
    {
        document.getElementById("wavyPPermIts").style.display = "inline-block";
        document.getElementById("nonwavyPPermIts").hidden = true;

        document.getElementById("PermItsBtn").style.borderBottomColor = "white";
        document.getElementById("PermItsBtn").style.backgroundColor = "white";
        document.getElementById("PermItsBtn").style.height = "68px";
        document.getElementById("PermItsBtn").style.width = "auto";
        document.getElementById("PermItsBtn").style.transform = "translateY(2px)";
    }
    if(PermItsBtnIsOn == false)
    {
        document.getElementById("wavyPPermIts").style.display = "none";
        document.getElementById("nonwavyPPermIts").hidden = false;
        
        document.getElementById("PermItsBtn").style.backgroundColor = "rgb(209, 209, 209)";
        document.getElementById("PermItsBtn").style.height = "56px";
        document.getElementById("PermItsBtn").style.width = "auto";
        document.getElementById("PermItsBtn").style.transform = "translateY(12px)";
        document.getElementById("PermItsBtn").style.borderBottomColor = "black";
    }
    
    //Prohibited Items Button Style
    if(ProhItsBtnIsOn == true)
    {
        document.getElementById("wavyPProhIts").style.display = "inline-block";
        document.getElementById("nonwavyPProhIts").hidden = true;

        document.getElementById("ProhItsBtn").style.borderBottomColor = "white";
        document.getElementById("ProhItsBtn").style.backgroundColor = "white";
        document.getElementById("ProhItsBtn").style.height = "68px";
        document.getElementById("ProhItsBtn").style.width = "auto";
        document.getElementById("ProhItsBtn").style.transform = "translateY(2px)";
    }
    if(ProhItsBtnIsOn == false)
    {
        document.getElementById("wavyPProhIts").style.display = "none";
        document.getElementById("nonwavyPProhIts").hidden = false;

        document.getElementById("ProhItsBtn").style.backgroundColor = "rgb(209, 209, 209)";
        document.getElementById("ProhItsBtn").style.height = "56px";
        document.getElementById("ProhItsBtn").style.width = "auto";
        document.getElementById("ProhItsBtn").style.transform = "translateY(12px)";
        document.getElementById("ProhItsBtn").style.borderBottomColor = "black";
    }    

}

function ChangeInfoBoxHeader() {
    if(HrsOfOpBtnIsOn == true)
    {
        document.getElementById("BodyTollInfoBoxHeader").textContent = "Hours Of Operation"
    }

    if(CrgHrBtnIsOn == true)
    {
        document.getElementById("BodyTollInfoBoxHeader").textContent = "Cargo Vehicle Hours"
    }
    
    if(FrSchBtnIsOn == true)
    {
        document.getElementById("BodyTollInfoBoxHeader").textContent = "Fare Schedules"
    }

    if(PermItsBtnIsOn == true)
    {
        document.getElementById("BodyTollInfoBoxHeader").textContent = "Permitted Items"
    }

    if(ProhItsBtnIsOn == true)
    {
        document.getElementById("BodyTollInfoBoxHeader").textContent = "Prohibited Items"
    }
}