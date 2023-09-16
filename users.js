document.addEventListener("DOMContentLoaded", function(){
  
  
    async function getData() {
        try {
        /*API Call */
        const response = await fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users');
        const data = await response.json();
        /*API Call Ends*/
    
           // storing JSON data in local storage
    
           const key = 'pharmacyUsers';
    
           if (!localStorage.getItem(key)) {
              const jsonData = JSON.stringify(data);   // convert JSON data to a string
              localStorage.setItem('pharmacyUsers', jsonData);   // store the string in local storage
              console.log("API Data stored in Local Storage");
           } 
  
           let count = data.length;   // counter to keep track of total length of API
          
           
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
        detailsHeaderUsers.id = "detailsHeaderUsers";
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


        /* Search Starts */
        const search = document.getElementById("search");
        
        const write = document.createElement("input");
        write.type="search";
        write.placeholder="Search by Name";
        write.name="searchItem";
        write.id = "searchItem";

        const resetButton = document.createElement("button");
        resetButton.innerText = "Reset";
        resetButton.id = "login";

        search.append(write, resetButton) ;


        /* Search Ends */
    
    
        /* Main Login Starts */
        const main = document.getElementById("main");
        
    
        /*Right Starts */
        const right = document.createElement("div");
        right.classList.add("right");
  
        const rightTable = document.createElement("table");
        rightTable.id = "rightTable";
  
        const rightTableHeaderRow = rightTable.insertRow(0);
        rightTableHeaderRow.classList.add("tableHeadRow");
        const rightTableHeaderRowCell1 = rightTableHeaderRow.insertCell(0);
        rightTableHeaderRowCell1.textContent = "ID";
        rightTableHeaderRowCell1.classList.add("tableHeadCells");
        const rightTableHeaderRowCell2 = rightTableHeaderRow.insertCell(1);
        rightTableHeaderRowCell2.textContent = "User Avatar";
        rightTableHeaderRowCell2.classList.add("tableHeadCells");
        const rightTableHeaderRowCell3 = rightTableHeaderRow.insertCell(2);
        rightTableHeaderRowCell3.textContent = "Full Name";
        rightTableHeaderRowCell3.classList.add("tableHeadCells");
        const rightTableHeaderRowCell4 = rightTableHeaderRow.insertCell(3);
        rightTableHeaderRowCell4.textContent = "DoB";
        rightTableHeaderRowCell4.classList.add("tableHeadCells");
        const rightTableHeaderRowCell5 = rightTableHeaderRow.insertCell(4);
        rightTableHeaderRowCell5.textContent = "Gender";
        rightTableHeaderRowCell5.classList.add("tableHeadCells");
        const rightTableHeaderRowCell6 = rightTableHeaderRow.insertCell(5);
        rightTableHeaderRowCell6.textContent = "Current Location";
        rightTableHeaderRowCell6.classList.add("tableHeadCells");
  
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
            const cell6 = row.insertCell(5);
            cell6.classList.add("rowCells");
          
            cell1.textContent = item.id;
            const avatar = document.createElement("img");
            avatar.src = item.profilePic;
            cell2.appendChild(avatar);
            cell3.textContent = item.fullName;
            cell4.textContent = item.dob;
            cell5.textContent = item.gender;
            cell6.textContent = item.currentCity;
          });
  
        right.append(rightTable);
        /*Right Ends */
        main.append(right);
       
    
        /* Main Login Ends */
      
  
        /*Adding Functionality Starts*/

        const searchInput = document.getElementById("search");
  

        

        searchInput.addEventListener('input', function(event) {
          if(event.target.value.length >= 2){
            const searchValue = event.target.value.toLowerCase();
            console.log(searchValue);
             
         
           // Loop through all items and hide/show based on search value
          for (let i = 1; i < rightTable.rows.length; i++) {
            const row = rightTable.rows[i];
            const cellValue = row.cells[2].textContent;
            const itemValue = cellValue.toLowerCase();
      
            if(searchValue === ""){
              row.style.display = "table-row";
            }
             else if (itemValue.includes(searchValue)) {
               row.style.display = "table-row"; 
             } else {
              row.style.display = 'none';
             }
           }
          }
          else{
            alert("Please enter at least 2 characters");
          }
           
       }); 

      /* Reset Button Functionality Starts*/

      resetButton.addEventListener("click", function() {
  
        document.getElementById("searchItem").value = "";
        for (let i = 1; i < rightTable.rows.length; i++) {
          const row = rightTable.rows[i];
          row.style.display = "table-row"; 
        }

      });
      /* Reset Button Functionality Ends*/

       

        /*Adding Functionality Ends*/
     
    }   //try Ends
    catch(error) {
      // Handle any errors here
      console.error(error);
    };
    }   //getData function ends
    
    getData();  // function calling the API and executing everything inside this function
  
  });    // End of DOMContentLoaded Event Listener
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  