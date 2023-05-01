function insert(num){
    document.form.textview.value = document.form.textview.value+num
}
function equal(){
    var exp 
    = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp)
    }
}
function clean(){
    document.form.textview.value = "";
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}
function sin(){
    form.textview.value=Math.sin(form.textview.value * Math.PI / 180).toFixed(2);
    
}
function cos(){
    form.textview.value=Math.cos(form.textview.value * Math.PI / 180).toFixed(2);
}
function tan(){
    form.textview.value=Math.tan(form.textview.value * Math.PI / 180).toFixed(2);
    
}
// function cot(){
//     form.textview.value=Math.cot(form.textview.value);
// }
function pow(){
    form.textview.value=Math.pow(form.textview.value, form.textview.value);
}
function sqrt(){
    form.textview.value=Math.sqrt(form.textview.value,2);
}
function log(){
    form.textview.value=Math.log(form.textview.value,);
}
function pi(){
    form.textview.value= 3.141592654;
}
function e(){
    form.textview.value= 2.718281828;
}
function fact(){
    var i, num, f;
    f=1
    num= form.textview.value;
    for(i=1; i<=num; i++){
        f=f*i;
    }
    i=i-1;
    form.textview.value=f;
}