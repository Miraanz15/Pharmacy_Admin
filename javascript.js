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
        
          detailsHeader.append(detailsHeaderOrders, detailsHeaderProducts, detailsHeaderUsers);
        
          head.append(comp, detailsHeader);
        
          /* Header Ends*/


          /* Main Login Starts */
          var main = document.getElementById("main");

          var mainHeading = document.createElement("h1");
          mainHeading.innerText = "Sign In";
          mainHeading.id = "mainHeading";

          var userName = document.createElement("input");
          userName.type = "text";
          userName.placeholder = "Enter Username";

          var userPassword = document.createElement("input");
          userPassword.type = "text";
          userPassword.placeholder = "Enter Password";

          var login = document.createElement("button");
          login.innerText = "Login";
          login.id = "login";

          main.append(mainHeading, userName, userPassword, login);

          /* Main Login Ends */
        
  
  });    // End of DOMContentLoaded Event Listener
  
  
  
  
  
  
     
     
  
     
   
     
  
  
  
    
  