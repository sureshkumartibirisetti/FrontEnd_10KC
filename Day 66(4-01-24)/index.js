async function getData(){
    try{
        let res=await fetch("http://localhost:3000/products")
        if(!res.ok){
            throw new error("failed")
        }
        let data=await res.json();
        printData(data)
    }
    catch(error){
        console.log(error);
    }

}
function printData(data){
    //Table creation
    let table=document.createElement("table");
    //table head
    let thead=document.createElement("thead");
    //table row head
    //first index object
    let obj=data[0];
    //headings
    let headings=[];
    for(i in obj){
        if(i!=="rating"){
            headings.push(i);
        }
    }
    headings.push("Delete button")
    headings.forEach(ele=>{
        let th=document.createElement("th");
        th.innerText=ele;
        thead.appendChild(th);
    }
    )
    // body
    let tbody=document.createElement("tbody");
    data.forEach(objj=>{
        let tr=document.createElement("tr");
        for(key in objj){
            let td=document.createElement("td");
            if(key==="image"){
                let img=document.createElement("img");
                img.src=objj[key];
                td.appendChild(img);
            }
            else if(key!=="rating"){
                td.innerText=objj[key];
            }else{
                let button=document.createElement("button");
                button.innerText="Delete";
                td.appendChild(button);
            }
            tr.appendChild(td)
        }
        tbody.appendChild(tr);
    })

    table.append(thead,tbody);
    document.body.appendChild(table);
    

}
getData()