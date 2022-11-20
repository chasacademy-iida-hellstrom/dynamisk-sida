let url = "index.json"

async function getSomething(result) {

    let response = await fetch(url);

    if(response.ok) {
        let data = await response.json();
        
        
        //console.log(data.workplaces[0].where);

        data.workplaces.forEach(element => {
            let li = document.createElement("li");
        li.innerHTML = element.where  + " , " + element.what + " , " + element.when;

      if(element.completed) {
          li.classList.add("clok")

      }
          document.getElementById("items").appendChild(li);    
       });
       

      data.schools.forEach(element => {
     let li = document.createElement("li");
     li.innerHTML = element.where  + " , " + element.what + " , " + element.when;

    if(element.completed) {
       li.classList.add("clok")

    };

      document.getElementById("where").appendChild(li);     
   }); 

   data.others.forEach(element => {
    let li = document.createElement("li");
    li.innerHTML = element.what  + " , " + element.where + " , " + element.when;

   if(element.completed) {
      li.classList.add("clok")

   };

     document.getElementById("others").appendChild(li);     
  }); 
        
       
            
    }else{
        console.log("HTTP-Error;" + response.status);
    }
} getSomething();









