document.addEventListener("DOMContentLoaded", function(){
  
  
    /* Header starts*/
    var head = document.getElementById("head");
  
    var comp = document.createElement("div");
    comp.id = "comp";

    var compLogo = document.createElement("img");
    compLogo.id = "compLogo";
    compLogo.src = "https://edu-web-fundamentals.web.app/static/media/logo.58169365.png";
    compLogo.alt = "Kafene Logo";

    var compName = document.createElement("div");
    compName.innerText = "Kafene";
    compName.id = "compName";

    comp.append(compLogo, compName);

    
    var detailsHeader = document.createElement("div");
    detailsHeader.id = "detailsHeader";
  
    var detailsHeaderOrders = document.createElement("a");
    detailsHeaderOrders.classList.add("detailsHeaderCommon");
    detailsHeaderOrders.href = "#";
    detailsHeaderOrders.innerHTML = `Orders`;
  
    var detailsHeaderProducts = document.createElement("a");
    detailsHeaderProducts.classList.add("detailsHeaderCommon");
    detailsHeaderProducts.href = "#"; 
    detailsHeaderProducts.innerHTML = `Products`;

    var detailsHeaderUsers = document.createElement("a");
    detailsHeaderUsers.classList.add("detailsHeaderCommon");
    detailsHeaderUsers.href = "#"; 
    detailsHeaderUsers.innerHTML = `Users`;

    var logOut = document.createElement("a");
    logOut.classList.add("logOut");
    logOut.classList.add("detailsHeaderCommon");
    logOut.href = "#"; 
    logOut.innerHTML = `Logout`;
  
    detailsHeader.append(detailsHeaderOrders, detailsHeaderProducts, detailsHeaderUsers, logOut);
  
    head.append(comp, detailsHeader, logOut);
  
    /* Header Ends*/


    /* Main Login Starts */
    var main = document.getElementById("main");
    
    /*Left Starts */
    var left = document.createElement("div");
    left.id = "left";

    var leftHeading = document.createElement("div");
    leftHeading.classList.add("leftHeading");
    leftHeading.innerText = "Filters";

    var leftCount = document.createElement("div");
    leftCount.classList.add("leftCount");
    leftCount.innerText = "Count: ";
   
    /* Left Categories Starts */
    var LeftCategories = document.createElement("div");
    LeftCategories.classList.add("LeftCategories");

    /* New Starts */
    var leftNew = document.createElement("div");
    leftNew.classList.add("leftOptions");

    var leftNewTick = document.createElement("input");
    leftNewTick.type = "checkbox";
    leftNewTick.classList.add("tick");

    var leftNewName = document.createElement("div");
    leftNewName.innerText = "New";
    leftNewName.classList.add("optionHeading");

    leftNew.append(leftNewTick, leftNewName);
    /*New Ends */

    /* Packed Starts */
    var leftPacked = document.createElement("div");
    leftPacked.classList.add("leftOptions");

    var leftPackedTick = document.createElement("input");
    leftPackedTick.type = "checkbox";
    leftPackedTick.classList.add("tick");

    var leftPackedName = document.createElement("div");
    leftPackedName.innerText = "Packed";
    leftPackedName.classList.add("optionHeading");

    leftPacked.append(leftPackedTick, leftPackedName);
    /*Packed Ends */

    /* InTransit Starts */
    var leftTransit = document.createElement("div");
    leftTransit.classList.add("leftOptions");

    var leftTransitTick = document.createElement("input");
    leftTransitTick.type = "checkbox";
    leftTransitTick.classList.add("tick");

    var leftTransitName = document.createElement("div");
    leftTransitName.innerText = "InTransit";
    leftTransitName.classList.add("optionHeading");

    leftTransit.append(leftTransitTick, leftTransitName);
    /*InTransit Ends */ 
  
    /* Delivered Starts */
    var leftDelivered = document.createElement("div");
    leftDelivered.classList.add("leftOptions");

    var leftDeliveredTick = document.createElement("input");
    leftDeliveredTick.type = "checkbox";
    leftDeliveredTick.classList.add("tick");

    var leftDeliveredName = document.createElement("div");
    leftDeliveredName.innerText = "Delivered";
    leftDeliveredName.classList.add("optionHeading");

    leftDelivered.append(leftDeliveredTick, leftDeliveredName);
    /*Delivered Ends */ 
    LeftCategories.append(leftNew, leftPacked, leftTransit, leftDelivered);
    /* Left Categories Ends */

    left.append(leftHeading, leftCount, LeftCategories);
    /*Left Ends */ 

    /*Right Starts */
    var right = document.createElement("div");
    
    /*Right Ends */
    main.append(left);
   

    /* Main Login Ends */


});    // End of DOMContentLoaded Event Listener
















