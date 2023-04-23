Q.1 
var array = [34,45,65,23,5,676,32,34];
var target = 66;

for(i=0; i<array.length; i++){
    console.log(array[i]);
}

 


Q.2
var start = 5768;
var end = 78656;

var addn = 0;
for(i = start; i<= end; i++){
    // console.log(i);
    addn += i;
}
console.log(addn);



Q.3
var number = 9;
var array = [3,5,79,45,0,-67,23,77,19,78,12];

flag = false;
for(i=0; i<array.length; i++){
    if(number == array[i]){
        // console.log(i);
        flag = true;
    }
}
if(!flag){
    console.log("Not Found");
}else{
    console.log(number);
}


Q.4
var array = [34,45,567,78,89,34,67,87,34,78,89];
for(var i = 0; i<array.length; i++){
    // console.log(i ,":", array[i]);
    // console.log(array[i]);
    var obj = {[i]:array[i]};
    console.log(obj);
}
