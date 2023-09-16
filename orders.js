document.addEventListener("DOMContentLoaded", function(){
  
  
    async function getData() {
        try {
        /*API Call */
        const response = await fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders');
        const data = await response.json();
        /*API Call Ends*/
    
           // storing JSON data in local storage
    
           const key = 'pharmacyOrders';
    
           if (!localStorage.getItem(key)) {
              const jsonData = JSON.stringify(data);   // convert JSON data to a string
              localStorage.setItem('pharmacyOrders', jsonData);   // store the string in local storage
              console.log("API Data stored in Local Storage");
           } 
       
        /* Header starts*/
        const head = document.getElementById("head");
      
        const comp = document.createElement("div");
        comp.id = "comp";
    
        const compLogo = document.createElement("img");
        compLogo.id = "compLogo";
        compLogo.src = "https://edu-web-fundamentals.web.app/static/media/logo.58169365.png";
        compLogo.alt = "Kafene Logo";
    
        const compName = document.createElement("div");
        compName.innerText = "Kafene";
        compName.id = "compName";
    
        comp.append(compLogo, compName);
    
        
        const detailsHeader = document.createElement("div");
        detailsHeader.id = "detailsHeader";
      
        const detailsHeaderOrders = document.createElement("a");
        detailsHeaderOrders.classList.add("detailsHeaderCommon");
        detailsHeaderOrders.href = "#";
        detailsHeaderOrders.innerHTML = `Orders`;
      
        const detailsHeaderProducts = document.createElement("a");
        detailsHeaderProducts.classList.add("detailsHeaderCommon");
        detailsHeaderProducts.href = "#"; 
        detailsHeaderProducts.innerHTML = `Products`;
    
        const detailsHeaderUsers = document.createElement("a");
        detailsHeaderUsers.classList.add("detailsHeaderCommon");
        detailsHeaderUsers.href = "#"; 
        detailsHeaderUsers.innerHTML = `Users`;
    
        const logOut = document.createElement("a");
        logOut.classList.add("logOut");
        logOut.classList.add("detailsHeaderCommon");
        logOut.href = "#"; 
        logOut.innerHTML = `Logout`;
      
        detailsHeader.append(detailsHeaderOrders, detailsHeaderProducts, detailsHeaderUsers, logOut);
      
        head.append(comp, detailsHeader, logOut);
      
        /* Header Ends*/
    
    
        /* Main Login Starts */
        const main = document.getElementById("main");
        
        /*Left Starts */
        const left = document.createElement("div");
        left.id = "left";
    
        const leftHeading = document.createElement("div");
        leftHeading.classList.add("leftHeading");
        leftHeading.innerText = "Filters";
    
        const leftCount = document.createElement("div");
        leftCount.classList.add("leftCount");
        leftCount.innerText = "Count: ";
       
        /* Left Categories Starts */
        const LeftCategories = document.createElement("div");
        LeftCategories.classList.add("LeftCategories");
    
        /* New Starts */
        const leftNew = document.createElement("div");
        leftNew.classList.add("leftOptions");
    
        const leftNewTick = document.createElement("input");
        leftNewTick.type = "checkbox";
        leftNewTick.classList.add("tick");
    
        const leftNewName = document.createElement("div");
        leftNewName.innerText = "New";
        leftNewName.classList.add("optionHeading");
    
        leftNew.append(leftNewTick, leftNewName);
        /*New Ends */
    
        /* Packed Starts */
        const leftPacked = document.createElement("div");
        leftPacked.classList.add("leftOptions");
    
        const leftPackedTick = document.createElement("input");
        leftPackedTick.type = "checkbox";
        leftPackedTick.classList.add("tick");
    
        const leftPackedName = document.createElement("div");
        leftPackedName.innerText = "Packed";
        leftPackedName.classList.add("optionHeading");
    
        leftPacked.append(leftPackedTick, leftPackedName);
        /*Packed Ends */
    
        /* InTransit Starts */
        const leftTransit = document.createElement("div");
        leftTransit.classList.add("leftOptions");
    
        const leftTransitTick = document.createElement("input");
        leftTransitTick.type = "checkbox";
        leftTransitTick.classList.add("tick");
    
        const leftTransitName = document.createElement("div");
        leftTransitName.innerText = "InTransit";
        leftTransitName.classList.add("optionHeading");
    
        leftTransit.append(leftTransitTick, leftTransitName);
        /*InTransit Ends */ 
      
        /* Delivered Starts */
        const leftDelivered = document.createElement("div");
        leftDelivered.classList.add("leftOptions");
    
        const leftDeliveredTick = document.createElement("input");
        leftDeliveredTick.type = "checkbox";
        leftDeliveredTick.classList.add("tick");
    
        const leftDeliveredName = document.createElement("div");
        leftDeliveredName.innerText = "Delivered";
        leftDeliveredName.classList.add("optionHeading");
    
        leftDelivered.append(leftDeliveredTick, leftDeliveredName);
        /*Delivered Ends */ 
        LeftCategories.append(leftNew, leftPacked, leftTransit, leftDelivered);
        /* Left Categories Ends */
    
        left.append(leftHeading, leftCount, LeftCategories);
        /*Left Ends */ 
    
        /*Right Starts */
        const right = document.createElement("div");
        right.classList.add("right");

        const rightTable = document.createElement("table");

        const rightTableHeaderRow = rightTable.insertRow(0);
        rightTableHeaderRow.classList.add("tableHeadRow");
        const rightTableHeaderRowCell1 = rightTableHeaderRow.insertCell(0);
        rightTableHeaderRowCell1.textContent = "ID";
        rightTableHeaderRowCell1.classList.add("tableHeadCells");
        const rightTableHeaderRowCell2 = rightTableHeaderRow.insertCell(1);
        rightTableHeaderRowCell2.textContent = "Customer";
        rightTableHeaderRowCell2.classList.add("tableHeadCells");
        const rightTableHeaderRowCell3 = rightTableHeaderRow.insertCell(2);
        rightTableHeaderRowCell3.textContent = "Date";
        rightTableHeaderRowCell3.classList.add("tableHeadCells");
        const rightTableHeaderRowCell4 = rightTableHeaderRow.insertCell(3);
        rightTableHeaderRowCell4.textContent = "Amount";
        rightTableHeaderRowCell4.classList.add("tableHeadCells");
        const rightTableHeaderRowCell5 = rightTableHeaderRow.insertCell(4);
        rightTableHeaderRowCell5.textContent = "Status";
        rightTableHeaderRowCell5.classList.add("tableHeadCells");

        const tableBody = document.createElement("tbody");
        tableBody.classList.add("tableBody");
        data.forEach((item, index) => {
            const row = rightTable.insertRow(index + 1); // +1 to skip the header row
            row.classList.add("tableRows");
            const cell1 = row.insertCell(0);
            cell1.classList.add("rowCells");
            const cell2 = row.insertCell(1);
            cell2.classList.add("rowCells");
            const cell3 = row.insertCell(2);
            cell3.classList.add("rowCells");
            const cell4 = row.insertCell(3);
            cell4.classList.add("rowCells");
            const cell5 = row.insertCell(4);
            cell5.classList.add("rowCells");
          
            cell1.textContent = item.id;
            cell2.textContent = item.customerName;
            cell3.textContent = item.orderDate + "    " + item.orderTime;
            cell4.textContent = "$" + item.amount;
            cell5.textContent = item.orderStatus;
          });

        right.append(rightTable);
        /*Right Ends */
        main.append(left, right);
       
    
        /* Main Login Ends */
     
    }   //try Ends
    catch(error) {
      // Handle any errors here
      console.error(error);
    };
    }   //getData function ends
    
    getData();  // function calling the API and executing everything inside this function

});    // End of DOMContentLoaded Event Listener























