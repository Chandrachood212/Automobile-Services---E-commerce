var totalsum = 0;
var finalstack = [];

function oncalls(iden){
    var v = document.getElementById(iden).getElementsByTagName("input");
    for(var i=0; i<v.length; i++)
    {
        if(v[i].checked && !(finalstack.includes(v[i].name)))
        {
            finalstack.push(v[i].name);
        }
    }
}

function sends(){
    localStorage.setItem("final",JSON.stringify(finalstack));
    localStorage.setItem("price",JSON.stringify(pricesdict));
}


