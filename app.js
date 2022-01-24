var a=0

// while (a>=0) {
//     document.write(a+"<br>")
//     a--
// }

// do {
//     document.write(a+"<br>")
//     a++
// } while (a<=10);

function clar(){
    var cl=document.getElementById('clr')
    cl.value=""
}
function getValue(a){
    var ok=document.getElementById('clr')
    ok.value +=a
}
function result(){
    var rs=document.getElementById('clr')
    rs.value = eval(rs.value)
    
}
function del(a){
    var de=document.getElementById('clr')
    de.value =de.value.slice(0,-1)         
}