const add=document.querySelector("#button");

add.addEventListener('click',async()=>{
    const roll1= String(document.querySelector("#roll").value);
    
    if(roll1==""){
        alert("all fields required");
    }
    else{
        alert("ok");
        await fetch('http://localhost:5000/get',{
            mode:'cors',
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                roll:roll1
                
            })
            
        })
        .then((e)=>{
            
            return e.json()  
        })
        .then(async(e1)=>
        {  
            
            if(e1.length!=0)
            {
            let t=`<tr>
            <th>name</th>
            
          </tr>`;
            let temp ="" ;
            let n1=1;
            // Loop through each data and add a table row
            for(let d of e1)
            {

                temp +=`<tr>
                <th>${d.name}</th>
                
              </tr>
                  `;
                n1+=1;
                t="";
            }

        document.getElementById("result").innerHTML = temp;
        }
        else{
            document.getElementById("result").innerHTML = "No record found";
        }
          
        })
        .catch(async()=>{
            console.log("ERROR");
            result.innerHTML="ERROR";
        })}}
    )
