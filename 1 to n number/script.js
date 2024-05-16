function loop1(){
    let n = parseInt(document.getElementById('num').value);
    let msg = "";

    let i;
    for(v=1;v<=n;v++){
        msg +=v;
        msg+="<br>"
    }
    document.getElementById('inp').innerHTML = msg;
}