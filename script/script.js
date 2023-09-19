let count = 1;



function check(v){
    count = v;
    document.getElementById("radio"+count).checked = true;
 
}

setInterval(function(){
    nextImage();
   
}, 10000);

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    };
    document.getElementById("radio"+count).checked = true;
};


