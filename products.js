document.addEventListener("DOMContentLoaded", function(){
  
  
    async function getData() {
        try {
        /*API Call */
        const response = await fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products');
        const data = await response.json();
        /*API Call Ends*/
    
           // storing JSON data in local storage
    
           const key = 'pharmacyProducts';
    
           if (!localStorage.getItem(key)) {
              const jsonData = JSON.stringify(data);   // convert JSON data to a string
              localStorage.setItem('pharmacyProducts', jsonData);   // store the string in local storage
              console.log("API Data stored in Local Storage");
           } 

           /*Date formatting starts */
           function monthNameToIndex(monthName) {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            return months.indexOf(monthName) + 1;
          }
          function monthNameToIndexShort(monthName) {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return months.indexOf(monthName) + 1;
          }
  
           const currentDate = new Date();  // to get current date

           // Get the day, month, and year
           const day = currentDate.getDate();
           const month = currentDate.toLocaleString('default', { month: 'long' }); // Full month name
           const year = currentDate.getFullYear();

           // Format the date in "dd-month-yyyy" format
           const formattedDate = `${day}-${month}-${year}`;
           console.log(formattedDate);
           const customDateParts = formattedDate.split('-');
           const customDay = parseInt(customDateParts[0], 10);   //currentDay
           let customMonth = customDateParts[1];
           const customYear = parseInt(customDateParts[2], 10);   //currentYear

           const customDate = customDay + "-" + monthNameToIndex(customMonth) + "-" + customYear;
           console.log(customDate);
           customMonth = monthNameToIndex(customMonth);     //currentMonth
           console.log("customMonth :" + customMonth);

            /*Date formatting Ends */

           

           let count = data.length;   // counter to keep track of total length of API
           let expiredCounter = 0;
           let lowCounter = 0;
           
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
        detailsHeaderOrders.href = "orders.html";
        detailsHeaderOrders.innerHTML = `Orders`;
      
        const detailsHeaderProducts = document.createElement("a");
        detailsHeaderProducts.classList.add("detailsHeaderCommon");
        detailsHeaderProducts.id = "detailsHeaderProducts";
        detailsHeaderProducts.href = "#"; 
        detailsHeaderProducts.innerHTML = `Products`;
    
        const detailsHeaderUsers = document.createElement("a");
        detailsHeaderUsers.classList.add("detailsHeaderCommon");
        detailsHeaderUsers.href = "users.html"; 
        detailsHeaderUsers.innerHTML = `Users`;
    
        const logOut = document.createElement("a");
        logOut.classList.add("logOut");
        logOut.classList.add("detailsHeaderCommon");
        logOut.href = "index.html"; 
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
    
        const leftCount = document.createElement("p");
        leftCount.classList.add("leftCount");
        leftCount.innerText = "Count: " + count;
       
        /* Left Categories Starts */
        const LeftCategories = document.createElement("div");
        LeftCategories.classList.add("LeftCategories");
    
        /* Expired Starts */
        const leftExpired = document.createElement("div");
        leftExpired.classList.add("leftOptions");
        leftExpired.id = "leftExpiredDiv";
    
        const leftExpiredTick = document.createElement("input");
        leftExpiredTick.type = "checkbox";
        leftExpiredTick.id = "leftExpiredTick";
        leftExpiredTick.checked = true;
    
        const leftExpiredName = document.createElement("div");
        leftExpiredName.innerText = "Expired";
        leftExpiredName.id = "optionHeadingExpired";
    
        leftExpired.append(leftExpiredTick, leftExpiredName);
        /*Expired Ends */
    
        /* Low Stock Starts */
        const leftLow = document.createElement("div");
        leftLow.classList.add("leftOptions");
        leftLow.id = "leftLowDiv";
    
        const leftLowTick = document.createElement("input");
        leftLowTick.type = "checkbox";
        leftLowTick.id = "leftLowTick";
        leftLowTick.checked = true;
    
        const leftLowName = document.createElement("div");
        leftLowName.innerText = "Low Stock";
        leftLowName.id = "optionHeadingLow";
    
        leftLow.append(leftLowTick, leftLowName);
        /*Packed Ends */
    
        LeftCategories.append(leftExpired, leftLow);
        /* Left Categories Ends */
    
        left.append(leftHeading, leftCount, LeftCategories);
        /*Left Ends */ 
    
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
        rightTableHeaderRowCell2.textContent = "Product Name";
        rightTableHeaderRowCell2.classList.add("tableHeadCells");
        const rightTableHeaderRowCell3 = rightTableHeaderRow.insertCell(2);
        rightTableHeaderRowCell3.textContent = "Product Brand";
        rightTableHeaderRowCell3.classList.add("tableHeadCells");
        const rightTableHeaderRowCell4 = rightTableHeaderRow.insertCell(3);
        rightTableHeaderRowCell4.textContent = "Expiry Date";
        rightTableHeaderRowCell4.classList.add("tableHeadCells");
        const rightTableHeaderRowCell5 = rightTableHeaderRow.insertCell(4);
        rightTableHeaderRowCell5.textContent = "Unit Price";
        rightTableHeaderRowCell5.classList.add("tableHeadCells");
        const rightTableHeaderRowCell6 = rightTableHeaderRow.insertCell(5);
        rightTableHeaderRowCell6.textContent = "Stock";
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
            cell2.textContent = item.medicineName;
            cell3.textContent = item.medicineBrand;
            cell4.textContent = item.expiryDate;
            cell5.textContent = "$" + item.unitPrice;
            cell6.textContent = item.stock;
          });
  
        right.append(rightTable);
        /*Right Ends */
        main.append(left, right);
       
    
        /* Main Login Ends */
      
  
        /*Adding Functionality Starts*/
  
  
     // Iterate through the rows of the table to count expiry products 
     for (let i = 1; i < rightTable.rows.length; i++) {
      const row = rightTable.rows[i];
      const cellValue = row.cells[3].textContent; // Get the cell value (e.g., City column)
      
      const customDateAPIParts = cellValue.split('-');
      const customAPIDay = parseInt(customDateAPIParts[0], 10);   //dataDay
      let customAPIMonth = customDateAPIParts[1];
      const customAPIYear = parseInt(customDateAPIParts[2], 10);   //dataYear

      const customAPIDate = customAPIDay + "-" + monthNameToIndexShort(customAPIMonth) + "-" + customAPIYear;
      console.log("Date : " + customAPIDate);
      customAPIMonth = monthNameToIndexShort(customAPIMonth);    //dataMonth



    // Check if the cell value matches a condition
      if (customAPIYear > customYear){
        continue;
        }
       else if(customAPIYear === customYear){
         if(customAPIMonth > customMonth){
            continue;
         }
         else{
            if(customAPIMonth === customMonth){
                if(customAPIDay >= customDay){
                    continue;
                }
                else{
                    expiredCounter++;
                }
            }
         }
       }
       else{ 
        expiredCounter++; 
       }
      }   //for loop ends
      console.log("Expired products: " + expiredCounter);




       // Iterate through the rows of the table to count low stock products 
      for (let i = 1; i < rightTable.rows.length; i++) {
        const row = rightTable.rows[i];
        const cellValue = row.cells[5].textContent; // Get the cell value (e.g., City column)  
  
      // Check if the cell value matches a condition
        if (cellValue < 100){
          lowCounter++;
          }
        }   //for loop ends
        console.log("Low Stock products: " + lowCounter);
  
  
  
        /*Adding click options to whole checkbox div to toggle Starts*/ 
        leftExpired.addEventListener("click", function() {
          // Toggle the checked state of the checkbox
          const checker = document.getElementById("leftExpiredTick");
          if(checker.checked){
            count -= expiredCounter;
            checker.checked = !checker.checked;
          }
          else{
            count += expiredCounter;
            checker.checked = !checker.checked;
          }
          leftCount.innerText = "Count: " + count;
        });
        leftLow.addEventListener("click", function() {
          // Toggle the checked state of the checkbox
          const checker = document.getElementById("leftLowTick");
          if(checker.checked){
            count -= lowCounter;
            checker.checked = !checker.checked;
          }
          else{
            count += lowCounter;
            checker.checked = !checker.checked;
          }
          leftCount.innerText = "Count: " + count;
        });
        /*Adding click options to whole checkbox div to toggle Ends*/ 
  
        
        /*Adding click options only to checkbox to toggle Starts*/
        leftExpiredTick.addEventListener("click", function() {
          // Toggle the checked state of the checkbox
           const checker = document.getElementById("leftExpiredTick");
          if(checker.checked){
            count -= expiredCounter;
            checker.checked = !checker.checked;
          }
          else{
            count += expiredCounter;
            checker.checked = !checker.checked;
          }
          leftCount.innerText = "Count: " + count;
        });
        leftLowTick.addEventListener("click", function() {
          // Toggle the checked state of the checkbox
         const checker = document.getElementById("leftLowTick");
          if(checker.checked){
            count -= lowCounter;
            checker.checked = !checker.checked;
          }
          else{
            count += lowCounter;
            checker.checked = !checker.checked;
          }
          leftCount.innerText = "Count: " + count;
        }); 
        /*Adding click options only to checkbox to toggle Ends*/
        
      
       /*Displaying rows based upon checkbox starts */
       const table = document.getElementById("rightTable");
  
       const expiredChecked = document.getElementById("leftExpiredTick");
       const lowChecked = document.getElementById("leftLowTick");
  
       /*For Displaying Expired Rows starts */
  
       expiredChecked.addEventListener("change", function() {
       const checked = this.checked; // Get the checkbox value
  
    // Iterate through the rows of the table (skip the header row)
       for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        const cellValue = row.cells[3].textContent; // Get the cell value (e.g., City column)
  

        const customDateAPIParts = cellValue.split('-');
      const customAPIDay = parseInt(customDateAPIParts[0], 10);   //dataDay
      let customAPIMonth = customDateAPIParts[1];
      const customAPIYear = parseInt(customDateAPIParts[2], 10);   //dataYear

      const customAPIDate = customAPIDay + "-" + monthNameToIndexShort(customAPIMonth) + "-" + customAPIYear;
      console.log("Date : " + customAPIDate);
      customAPIMonth = monthNameToIndexShort(customAPIMonth);    //dataMonth



    // Check if the cell value matches a condition
      if (checked && customAPIYear > customYear){
        row.style.display = "table-row";
        }
       else if(checked && customAPIYear === customYear){
         if(customAPIMonth > customMonth){
            row.style.display = "table-row";
         }
         else{
            if(customAPIMonth === customMonth){
                if(customAPIDay >= customDay){
                    row.style.display = "table-row";
                }
                else{
                    if(lowChecked.checked && (row.cells[5].textContent) >= 100){
                        row.style.display = "table-row";
                    }
                    else{
                        row.style.display = "none"; 
                    }
                }
            }
         }
       }
       else{ 
        row.style.display = "none"; 
       }
      }
  });
       /*For Displaying Expired Rows Ends */
  
       /*For Displaying Low Stock Rows starts */
  
       lowChecked.addEventListener("change", function() {
       const checked = this.checked; // Get the checkbox value
  
    // Iterate through the rows of the table (skip the header row)
       for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        const cellValue = row.cells[5].textContent; // Get the cell value (e.g., City column)
  
      // Check if the checkbox is checked and the cell value matches a condition
        if (checked && cellValue >= 100) {
          row.style.display = "table-row"; // Show the row
        } else {
          if(expiredChecked.checked){
            const cellValue = row.cells[3].textContent; // Get the cell value (e.g., City column)
  

        const customDateAPIParts = cellValue.split('-');
      const customAPIDay = parseInt(customDateAPIParts[0], 10);   //dataDay
      let customAPIMonth = customDateAPIParts[1];
      const customAPIYear = parseInt(customDateAPIParts[2], 10);   //dataYear

      const customAPIDate = customAPIDay + "-" + monthNameToIndexShort(customAPIMonth) + "-" + customAPIYear;
      console.log("Date : " + customAPIDate);
      customAPIMonth = monthNameToIndexShort(customAPIMonth);    //dataMonth



    // Check if the cell value matches a condition
      if (customAPIYear > customYear){
        row.style.display = "table-row";
        }
       else if(customAPIYear === customYear){
         if(customAPIMonth > customMonth){
            row.style.display = "table-row";
         }
         else{
            if(customAPIMonth === customMonth){
                if(customAPIDay >= customDay){
                    row.style.display = "table-row";
                }
                else{
                    if(lowChecked.checked && (row.cells[5].textContent) >= 100){
                        row.style.display = "table-row";
                    }
                    else{
                        row.style.display = "none"; 
                    }
                }
            }
         }
       }
       else{ 
        row.style.display = "none"; 
       }
          }
          else{
            row.style.display = "none"; 
          }
        }
      }
  });  
       /*For Displaying Low Stock Rows Ends */
  
  
     /*Displaying rows based upon checkbox Ends */
  
  
  
  
          /*Displaying rows based upon checkbox whole div Starts */
          const tableDiv = document.getElementById("rightTable");
  
          const expiredCheckedDiv = document.getElementById("leftExpiredDiv");
          const lowCheckedDiv = document.getElementById("leftLowDiv");
     
          /*For Displaying Expired Rows starts */
     
          expiredCheckedDiv.addEventListener("click", function() {
          const expiredCheckedDivTick = document.getElementById("leftExpiredTick");
          const checked = expiredCheckedDivTick.checked; // Get the checkbox value
     
       // Iterate through the rows of the table (skip the header row)
       for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        const cellValue = row.cells[3].textContent; // Get the cell value (e.g., City column)
  

        const customDateAPIParts = cellValue.split('-');
      const customAPIDay = parseInt(customDateAPIParts[0], 10);   //dataDay
      let customAPIMonth = customDateAPIParts[1];
      const customAPIYear = parseInt(customDateAPIParts[2], 10);   //dataYear

      const customAPIDate = customAPIDay + "-" + monthNameToIndexShort(customAPIMonth) + "-" + customAPIYear;
      console.log("Date : " + customAPIDate);
      customAPIMonth = monthNameToIndexShort(customAPIMonth);    //dataMonth



    // Check if the cell value matches a condition
      if (checked && customAPIYear > customYear){
        row.style.display = "table-row";
        }
       else if(checked && customAPIYear === customYear){
         if(customAPIMonth > customMonth){
            row.style.display = "table-row";
         }
         else{
            if(customAPIMonth === customMonth){
                if(customAPIDay >= customDay){
                    row.style.display = "table-row";
                }
                else{
                    if(lowChecked.checked && (row.cells[5].textContent) >= 100){
                        row.style.display = "table-row";
                    }
                    else{
                        row.style.display = "none"; 
                    }
                }
            }
         }
       }
       else{ 
        row.style.display = "none"; 
       }
      }
  });
          /*For Displaying Expired Rows Ends */
     
          /*For Displaying Low Stock Rows starts */
     
          lowCheckedDiv.addEventListener("click", function() {
          const lowCheckedTick = document.getElementById("leftLowTick");
          const checked = lowCheckedTick.checked; // Get the checkbox value
     
       // Iterate through the rows of the table (skip the header row)
       for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        const cellValue = row.cells[5].textContent; // Get the cell value (e.g., City column)
  
      // Check if the checkbox is checked and the cell value matches a condition
        if (checked && cellValue >= 100) {
          row.style.display = "table-row"; // Show the row
        } else {
          if(expiredChecked.checked){
            const cellValue = row.cells[3].textContent; // Get the cell value (e.g., City column)
  

        const customDateAPIParts = cellValue.split('-');
      const customAPIDay = parseInt(customDateAPIParts[0], 10);   //dataDay
      let customAPIMonth = customDateAPIParts[1];
      const customAPIYear = parseInt(customDateAPIParts[2], 10);   //dataYear

      const customAPIDate = customAPIDay + "-" + monthNameToIndexShort(customAPIMonth) + "-" + customAPIYear;
      console.log("Date : " + customAPIDate);
      customAPIMonth = monthNameToIndexShort(customAPIMonth);    //dataMonth



    // Check if the cell value matches a condition
      if (customAPIYear > customYear){
        row.style.display = "table-row";
        }
       else if(customAPIYear === customYear){
         if(customAPIMonth > customMonth){
            row.style.display = "table-row";
         }
         else{
            if(customAPIMonth === customMonth){
                if(customAPIDay >= customDay){
                    row.style.display = "table-row";
                }
                else{
                    if(lowChecked.checked && (row.cells[5].textContent) >= 100){
                        row.style.display = "table-row";
                    }
                    else{
                        row.style.display = "none"; 
                    }
                }
            }
         }
       }
       else{ 
        row.style.display = "none"; 
       }
          }
          else{
            row.style.display = "none"; 
          }
        }
      }
  });  
          /*For Displaying Low Stock Rows Ends */
     
     
        /*Displaying rows based upon checkbox whole div Ends */
  
  
  
     
    
     /*Adding Functionality Ends*/
  
     
    }   //try Ends
    catch(error) {
      // Handle any errors here
      console.error(error);
    };
    }   //getData function ends
    
    getData();  // function calling the API and executing everything inside this function
  
  });    // End of DOMContentLoaded Event Listener
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  