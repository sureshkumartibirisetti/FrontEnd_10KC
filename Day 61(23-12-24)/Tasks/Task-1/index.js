fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(j=>{
                for(var i=0;i<j.length;i++){
                    console.log(j[i].title);
                }
            }
            )