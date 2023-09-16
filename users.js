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
  
  
     // Iterate through the rows of the table to get values of each type of status 
     for (let i = 1; i < rightTable.rows.length; i++) {
      const row = rightTable.rows[i];
      const cellValue = row.cells[4].textContent; // Get the cell value (e.g., City column)
  
    // Check if the cell value matches a condition
      if (cellValue === "New") {
        newCounter++; 
      } 
     else if(cellValue === "Packed"){
         packedCounter++; 
      }
     else if(cellValue === "InTransit"){
           transitCounter++; 
       }
     else{
            deliveredCounter++;
       }
      }
  
      console.log(newCounter);
      console.log(packedCounter);
      console.log(transitCounter);
      console.log(deliveredCounter);
  
  
  
        /*Adding click options to whole checkbox div to toggle Starts*/ 
        leftNew.addEventListener("click", function() {
          // Toggle the checked state of the checkbox
          const checker = document.getElementById("leftNewTick");
          if(checker.checked){
            count -= newCounter;
            checker.checked = !checker.checked;
          }
          else{
            count += newCounter;
            checker.checked = !checker.checked;
          }
          leftCount.innerText = "Count: " + count;
        });
        leftPacked.addEventListener("click", function() {
          // Toggle the checked state of the checkbox
          const checker = document.getElementById("leftPackedTick");
          if(checker.checked){
            count -= packedCounter;
            checker.checked = !checker.checked;
          }
          else{
            count += packedCounter;
            checker.checked = !checker.checked;
          }
          leftCount.innerText = "Count: " + count;
        });
        leftTransit.addEventListener("click", function() {
          // Toggle the checked state of the checkbox
          const checker = document.getElementById("leftTransitTick");
          if(checker.checked){
            count -= transitCounter;
            checker.checked = !checker.checked;
          }
          else{
            count += transitCounter;
            checker.checked = !checker.checked;
          }
          leftCount.innerText = "Count: " + count;
        });
        leftDelivered.addEventListener("click", function() {
          // Toggle the checked state of the checkbox
          const checker = document.getElementById("leftDeliveredTick");
          if(checker.checked){
            count -= deliveredCounter;
            checker.checked = !checker.checked;
          }
          else{
            count += deliveredCounter;
            checker.checked = !checker.checked;
          }
          leftCount.innerText = "Count: " + count;
        });
        /*Adding click options to whole checkbox div to toggle Ends*/ 
  
        
        /*Adding click options only to checkbox to toggle Starts*/
        leftNewTick.addEventListener("click", function() {
          // Toggle the checked state of the checkbox
           const checker = document.getElementById("leftNewTick");
          if(checker.checked){
            count -= newCounter;
            checker.checked = !checker.checked;
          }
          else{
            count += newCounter;
            checker.checked = !checker.checked;
          }
          leftCount.innerText = "Count: " + count;
        });
        leftPackedTick.addEventListener("click", function() {
          // Toggle the checked state of the checkbox
         const checker = document.getElementById("leftPackedTick");
          if(checker.checked){
            count -= packedCounter;
            checker.checked = !checker.checked;
          }
          else{
            count += packedCounter;
            checker.checked = !checker.checked;
          }
          leftCount.innerText = "Count: " + count;
        });
        leftTransitTick.addEventListener("click", function() {
          // Toggle the checked state of the checkbox
          const checker = document.getElementById("leftTransitTick");
          if(checker.checked){
            count -= transitCounter;
            checker.checked = !checker.checked;
          }
          else{
            count += transitCounter;
            checker.checked = !checker.checked;
          }
          leftCount.innerText = "Count: " + count;
        });
        leftDeliveredTick.addEventListener("click", function() {
          // Toggle the checked state of the checkbox
         const checker = document.getElementById("leftDeliveredTick");
          if(checker.checked){
            count -= deliveredCounter;
            checker.checked = !checker.checked;
          }
          else{
            count += deliveredCounter;
            checker.checked = !checker.checked;
          }
          leftCount.innerText = "Count: " + count;
        });   
        /*Adding click options only to checkbox to toggle Ends*/
        
      
       /*Displaying rows based upon checkbox starts */
       const table = document.getElementById("rightTable");
  
       const newChecked = document.getElementById("leftNewTick");
       const packedChecked = document.getElementById("leftPackedTick");
       const transitChecked = document.getElementById("leftTransitTick");
       const deliveredChecked = document.getElementById("leftDeliveredTick");
  
       /*For Displaying New Rows starts */
  
       newChecked.addEventListener("change", function() {
       const checked = this.checked; // Get the checkbox value
  
    // Iterate through the rows of the table (skip the header row)
       for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        const cellValue = row.cells[4].textContent; // Get the cell value (e.g., City column)
  
      // Check if the checkbox is checked and the cell value matches a condition
        if (checked && cellValue === "New") {
          row.style.display = "table-row"; // Show the row
        } else {
            if(packedChecked.checked && cellValue === "Packed"){
              row.style.display = "table-row"; // Show the row
            }
            else if(transitChecked.checked && cellValue === "InTransit"){
              row.style.display = "table-row"; // Show the row
            }
            else if(deliveredChecked.checked && cellValue === "Delivered"){
              row.style.display = "table-row"; // Show the row
            }
            else{
              row.style.display = "none"; 
            }
        }
      }
  });
       /*For Displaying New Rows Ends */
  
       /*For Displaying Packed Rows starts */
  
       packedChecked.addEventListener("change", function() {
       const checked = this.checked; // Get the checkbox value
  
    // Iterate through the rows of the table (skip the header row)
       for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        const cellValue = row.cells[4].textContent; // Get the cell value (e.g., City column)
  
      // Check if the checkbox is checked and the cell value matches a condition
        if (checked && cellValue === "Packed") {
          row.style.display = "table-row"; // Show the row
        } else {
          if(newChecked.checked && cellValue === "New"){
            row.style.display = "table-row"; // Show the row
          }
          else if(transitChecked.checked && cellValue === "InTransit"){
            row.style.display = "table-row"; // Show the row
          }
          else if(deliveredChecked.checked && cellValue === "Delivered"){
            row.style.display = "table-row"; // Show the row
          }
          else{
            row.style.display = "none"; 
          }
        }
      }
  });  
       /*For Displaying Packed Rows Ends */
  
     /*For Displaying Transit Rows starts */
  
       transitChecked.addEventListener("change", function() {
     const checked = this.checked; // Get the checkbox value
  
  // Iterate through the rows of the table (skip the header row)
     for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      const cellValue = row.cells[4].textContent; // Get the cell value (e.g., City column)
  
    // Check if the checkbox is checked and the cell value matches a condition
      if (checked && cellValue === "InTransit") {
        row.style.display = "table-row"; // Show the row
      } else {
        if(newChecked.checked && cellValue === "New"){
          row.style.display = "table-row"; // Show the row
        }
        else if(packedChecked.checked && cellValue === "Packed"){
          row.style.display = "table-row"; // Show the row
        }
        else if(deliveredChecked.checked && cellValue === "Delivered"){
          row.style.display = "table-row"; // Show the row
        }
        else{
          row.style.display = "none"; 
        }
      }
    }
  });  
     /*For Displaying Transit Rows Ends */
  
     /*For Displaying Delivered Rows starts */
  
      deliveredChecked.addEventListener("change", function() {
     const checked = this.checked; // Get the checkbox value
  
  // Iterate through the rows of the table (skip the header row)
     for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      const cellValue = row.cells[4].textContent; // Get the cell value (e.g., City column)
  
    // Check if the checkbox is checked and the cell value matches a condition
      if (checked && cellValue === "Delivered") {
        row.style.display = "table-row"; // Show the row
      } else {
        if(newChecked.checked && cellValue === "New"){
          row.style.display = "table-row"; // Show the row
        }
        else if(packedChecked.checked && cellValue === "Packed"){
          row.style.display = "table-row"; // Show the row
        }
        else if(transitChecked.checked && cellValue === "InTransit"){
          row.style.display = "table-row"; // Show the row
        }
        else{
          row.style.display = "none"; 
        }
      }
    }
  });  
     /*For Displaying Delivered Rows Ends */
  
     /*Displaying rows based upon checkbox Ends */
  
  
  
  
          /*Displaying rows based upon checkbox whole div Starts */
          const tableDiv = document.getElementById("rightTable");
  
          const newCheckedDiv = document.getElementById("leftNewDiv");
          const packedCheckedDiv = document.getElementById("leftPackedDiv");
          const transitCheckedDiv = document.getElementById("leftTransitDiv");
          const deliveredCheckedDiv = document.getElementById("leftDeliveredDiv");
     
          /*For Displaying New Rows starts */
     
          newCheckedDiv.addEventListener("click", function() {
          const newCheckedDivTick = document.getElementById("leftNewTick");
          const checked = newCheckedDivTick.checked; // Get the checkbox value
     
       // Iterate through the rows of the table (skip the header row)
          for (let i = 1; i < table.rows.length; i++) {
           const row = table.rows[i];
           const cellValue = row.cells[4].textContent; // Get the cell value (e.g., City column)
     
         // Check if the checkbox is checked and the cell value matches a condition
           if (checked && cellValue === "New") {
             row.style.display = "table-row"; // Show the row
           } else {
               if(packedChecked.checked && cellValue === "Packed"){
                 row.style.display = "table-row"; // Show the row
               }
               else if(transitChecked.checked && cellValue === "InTransit"){
                 row.style.display = "table-row"; // Show the row
               }
               else if(deliveredChecked.checked && cellValue === "Delivered"){
                 row.style.display = "table-row"; // Show the row
               }
               else{
                 row.style.display = "none"; 
               }
           }
         }
     });
          /*For Displaying New Rows Ends */
     
          /*For Displaying Packed Rows starts */
     
          packedCheckedDiv.addEventListener("click", function() {
          const packedCheckedTick = document.getElementById("leftPackedTick");
          const checked = packedCheckedTick.checked; // Get the checkbox value
     
       // Iterate through the rows of the table (skip the header row)
          for (let i = 1; i < table.rows.length; i++) {
           const row = table.rows[i];
           const cellValue = row.cells[4].textContent; // Get the cell value (e.g., City column)
     
         // Check if the checkbox is checked and the cell value matches a condition
           if (checked && cellValue === "Packed") {
             row.style.display = "table-row"; // Show the row
           } else {
             if(newChecked.checked && cellValue === "New"){
               row.style.display = "table-row"; // Show the row
             }
             else if(transitChecked.checked && cellValue === "InTransit"){
               row.style.display = "table-row"; // Show the row
             }
             else if(deliveredChecked.checked && cellValue === "Delivered"){
               row.style.display = "table-row"; // Show the row
             }
             else{
               row.style.display = "none"; 
             }
           }
         }
     });  
          /*For Displaying Packed Rows Ends */
     
        /*For Displaying Transit Rows starts */
     
        transitCheckedDiv.addEventListener("click", function() {
          const transitCheckedTick = document.getElementById("leftTransitTick");
          const checked = transitCheckedTick.checked; // Get the checkbox value
     
     // Iterate through the rows of the table (skip the header row)
        for (let i = 1; i < table.rows.length; i++) {
         const row = table.rows[i];
         const cellValue = row.cells[4].textContent; // Get the cell value (e.g., City column)
     
       // Check if the checkbox is checked and the cell value matches a condition
         if (checked && cellValue === "InTransit") {
           row.style.display = "table-row"; // Show the row
         } else {
           if(newChecked.checked && cellValue === "New"){
             row.style.display = "table-row"; // Show the row
           }
           else if(packedChecked.checked && cellValue === "Packed"){
             row.style.display = "table-row"; // Show the row
           }
           else if(deliveredChecked.checked && cellValue === "Delivered"){
             row.style.display = "table-row"; // Show the row
           }
           else{
             row.style.display = "none"; 
           }
         }
       }
     });  
        /*For Displaying Transit Rows Ends */
     
        /*For Displaying Delivered Rows starts */
     
        deliveredCheckedDiv.addEventListener("click", function() {
          const deliveredCheckedTick = document.getElementById("leftDeliveredTick");
          const checked = deliveredCheckedTick.checked; // Get the checkbox value
     
     // Iterate through the rows of the table (skip the header row)
        for (let i = 1; i < table.rows.length; i++) {
         const row = table.rows[i];
         const cellValue = row.cells[4].textContent; // Get the cell value (e.g., City column)
     
       // Check if the checkbox is checked and the cell value matches a condition
         if (checked && cellValue === "Delivered") {
           row.style.display = "table-row"; // Show the row
         } else {
           if(newChecked.checked && cellValue === "New"){
             row.style.display = "table-row"; // Show the row
           }
           else if(packedChecked.checked && cellValue === "Packed"){
             row.style.display = "table-row"; // Show the row
           }
           else if(transitChecked.checked && cellValue === "InTransit"){
             row.style.display = "table-row"; // Show the row
           }
           else{
             row.style.display = "none"; 
           }
         }
       }
     });  
        /*For Displaying Delivered Rows Ends */
     
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  