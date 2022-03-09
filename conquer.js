var snd = new Audio();
snd.src = "button.mp3"; 

let countera = 0;
document.querySelector('#va').onclick = function() {
    countera++;
    document.querySelector('#atg').innerHTML = countera;
    
    
    blnk = document.querySelector('#blnkalex');
    
    var myVar; 
    function blink()
    {
     
        if (blnk.style.visibility == 'visible')
        {
            blnk.style.visibility = 'hidden'; 
        }
        else
        {
            blnk.style.visibility = 'visible';  
        }
        
    }
    
    function stop()
    {
        clearInterval(myVar);
        blnk.style.visibility = 'visible'; 
    }
    
    myVar = setInterval(blink, 200); 
    setTimeout(stop, 1500);
    
    
 
    
};

let countert = 0;
document.querySelector('#vt').onclick = function() {
    countert++;
    document.querySelector('#tane').innerHTML = countert;
    
    
    blnk = document.querySelector('#blnktim');
    
    var myVar; 
    function blink()
    {
     
        if (blnk.style.visibility == 'visible')
        {
            blnk.style.visibility = 'hidden'; 
        }
        else
        {
            blnk.style.visibility = 'visible';  
        }
        
    }
    
    function stop()
    {
        clearInterval(myVar);
        blnk.style.visibility = 'visible'; 
    }
    
    myVar = setInterval(blink, 200); 
    setTimeout(stop, 1500);
    
    
 
    
};

let counterh = 0;
document.querySelector('#vh').onclick = function() {
    counterh++;
    document.querySelector('#ahun').innerHTML = counterh;
    
    
    blnk = document.querySelector('#blnkhun');
    
    var myVar; 
    function blink()
    {
     
        if (blnk.style.visibility == 'visible')
        {
            blnk.style.visibility = 'hidden'; 
        }
        else
        {
            blnk.style.visibility = 'visible';  
        }
        
    }
    
    function stop()
    {
        clearInterval(myVar);
        blnk.style.visibility = 'visible'; 
    }
    
    myVar = setInterval(blink, 200); 
    setTimeout(stop, 1500);
    
    
 
    
};

let counterg = 0;
document.querySelector('#vg').onclick = function() {
    counterg++;
    document.querySelector('#gkhan').innerHTML = counterg;
    
    
    blnk = document.querySelector('#blnkkhan');
    
    var myVar; 
    function blink()
    {
     
        if (blnk.style.visibility == 'visible')
        {
            blnk.style.visibility = 'hidden'; 
        }
        else
        {
            blnk.style.visibility = 'visible';  
        }
        
    }
    
    function stop()
    {
        clearInterval(myVar);
        blnk.style.visibility = 'visible'; 
    }
    
    myVar = setInterval(blink, 200); 
    setTimeout(stop, 1500);
    
      
 
    
};




    
