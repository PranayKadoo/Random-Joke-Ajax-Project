let count =0;

function joke(){

    let arr = ["text1.txt","text2.txt","text3.txt","text4.txt","text5.txt","text6.txt","text7.txt"];
   
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            document.getElementById("fc2").innerHTML = this.responseText; 
        }
    };
    xhr.open("GET", "jokes/"+arr[count], true);
    xhr.send();

    if(count == arr.length-1){ count=-1};
    count++;

   
}


