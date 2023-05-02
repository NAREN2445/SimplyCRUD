const add=document.querySelector("#button");
const ad=document.querySelector("#button1");

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
        .then(async(e)=>{
            const data=await e.json();
            res1.innerHTML=data.name;
            res2.innerHTML=data.roll;
            res3.innerHTML=data.gender;
            res4.innerHTML=data.Dept;
        })
        .catch(async()=>{
            console.log("ERROR");
            result.innerHTML="ERROR";
        })
    }
})
ad.addEventListener('click',async()=>{
    const nam= String(document.querySelector("#n1").value);
    
    const roll1= String(document.querySelector("#roll").value);
    if(nam==""){
        alert("all fields required");
    }
    else{
        alert("ok");
        await fetch('http://localhost:5000/up',{
            mode:'cors',
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                name:nam,
                roll:roll1
                
            })
            
        })
        .then(async(e)=>{
            const data=await e.json();
            res1.innerHTML=data.name;
            res2.innerHTML=data.roll;
            res3.innerHTML=data.gender;
            res4.innerHTML=data.Dept;
        })
        .catch(async()=>{
            console.log("ERROR");
            result.innerHTML="ERROR";
        })
    }
})
