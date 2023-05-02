const add=document.querySelector("#b1");

add.addEventListener('click',async()=>{
    const name1=String(document.querySelector("#name").value);
    const roll1= String(document.querySelector("#roll").value);
    const gend=String(document.querySelector("#gender").value);
    const dept=String(document.querySelector("#Dept").value);
    
    if(name1==""||roll1==""||gend==""||dept==""){
        alert("all fields required");
    }
    else{
        alert("ok");
        fetch('http://localhost:5000/',{
            mode:'cors',
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                name:name1,
                roll:roll1,
                gend:gend,
                dept:dept,
                
            })
        })
        .then(async(e)=>{
            const data=await e.json();
        })
        .catch(async()=>{
            console.log("ERROR");
            result.innerHTML="ERROR";
        })
    }
})