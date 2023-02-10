let currentItem = 0;

const items = document.querySelectorAll('.item')
const maxItems = items.length;



function direction(direc){
    
    var direct = direc;

    if(direct == "left"){
    currentItem -= 1;
    
    }
    
    if( direct == "right"){
        currentItem += 1;
    
    }

    if(currentItem >= maxItems){
        currentItem = 0;
    }
    
    if(currentItem < 0){
        currentItem = maxItems - 1;  
    }

    items.forEach((item) => item.classList.remove("current-item"));


    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"

    });

    items[currentItem].classList.add("current-item");
   
};







 