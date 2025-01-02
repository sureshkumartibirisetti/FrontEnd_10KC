let o={
    "method":"POST",
    "headers":{
        "Content-Type" : "application/json"
    },
    "body":JSON.stringify({
        "id":4,
        "name":"Devara"
    })

}
 fetch("http://localhost:3000/students",o)
    .then(d=>{
        if(d.ok){
            console.log("Data submitted",d.status,d.statusText);
        }else{
            console.log("failed to store");
        }
    }
    )
    .catch(()=>console.log("error"))


    // By default GET
    // let o={
    //     "method":"GET"
    // }
    //  fetch("http://localhost:3000/students",o)
    //     .then(res=>res.json())
    //     .then(d=>{
    //         console.log(d)
    //     }
    //     )
    //     .catch(()=>console.log("error"))

    //pagination is nothing but divide entire page into pages

    //fetch("http://localhost:3000/students?_limit=1",o)
    // ? -> params
    // _limit=value ->taken elements 
    // _sort=element -> ascending
    // _sort=-element -> descending
    //_sort=-id&_limit=3 -> both are applied
