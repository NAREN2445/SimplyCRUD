const add=document.querySelector("#button");

add.addEventListener('click',async()=>{
    const roll1= String(document.querySelector("#roll").value);
    
    if(roll1==""){
        alert("all fields required");
    }
    else{
        alert("ok");
        fetch('http://localhost:5000/del',{
            mode:'cors',
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                roll:roll1
                
            })
        })
        
        .then(async(e)=>{
            const data=await e.json();
            
            result.innerHTML="deleted successfully";
        })
        .catch(async()=>{
            console.log("ERROR");
            result.innerHTML="ERROR";
        })
    }
})
