/* add code after this comment */


document.addEventListener("DOMContentLoaded", function() {
    const main = document.querySelector('main');
    // loop through stock data and output each one in a div
    // for (let stock of stocks) {
    // // create img and div container for img
    // let img = document.createElement('img'); 
    
    // img.setAttribute('src',`logos/${stock.symbol}.svg`); 
    // img.setAttribute('title', stock.symbol); 
    // let div = document.createElement('div'); 
    // div.setAttribute('class','item');

    // // add img to div and div to <main>
    // div.appendChild(img);
    // main.appendChild(div);


   // use delegation to handle click events for all the images
   document.querySelector('main').addEventListener('click', function (e) {
    // verify user has clicked on image within <main>

    let rosamond = document.querySelector('.rosamondDetails');
    let dorothea = document.querySelector('.doroDetails');
    let casaubon = document.querySelector('.casaDetails');
    let will = document.querySelector('.willDetails');
    let lydgate = document.querySelector('.lydDetails');
    let fred = document.querySelector('.fredDetails');
    let bul = document.querySelector('.bulDetails');
    let james = document.querySelector('.jamesDetails');
    let mary = document.querySelector('.maryDetails');
    let feather = document.querySelector('.featherDetails');
    let caleb = document.querySelector('.calebDetails');
    let brooke = document.querySelector('.brookeDetails');


    if (e.target && e.target.nodeName.toLowerCase() == "img") {

        let aside = document.querySelectorAll('aside');
       

        aside.forEach(a => {
            if(a.classList.contains('block')){
                hideDetails(a);
            }
          
        })
      
        displayDetails(e);
    
       
    }
    function hideDetails(a){
        a.classList.remove('block');
        a.classList.add('hidden');
    }

    function displayDetails(e){

         if(e.target.classList.value === 'rosamond' ){
            debugger;
            rosamond.classList.remove('hidden');
            rosamond.classList.add('block');
        
             
         } else if(e.target.classList.value === 'dorothea'){
            
           dorothea.classList.remove('hidden');
           dorothea.classList.add('block');
         }
         else if(e.target.classList.value === 'casaubon'){
            
            casaubon.classList.remove('hidden');
            casaubon.classList.add('block');
          }
          else if(e.target.classList.value === 'will'){
            
            will.classList.remove('hidden');
            will.classList.add('block');
          }
          else if(e.target.classList.value === 'lydgate'){
            
            lydgate.classList.remove('hidden');
            lydgate.classList.add('block');
          }
          else if(e.target.classList.value === 'fred'){
            
            fred.classList.remove('hidden');
            fred.classList.add('block');
          }
          else if(e.target.classList.value === 'bul'){
            
            bul.classList.remove('hidden');
            bul.classList.add('block');
          }
          else if(e.target.classList.value === 'james'){
            
            james.classList.remove('hidden');
            james.classList.add('block');
          }
          else if(e.target.classList.value === 'mary'){
            
            mary.classList.remove('hidden');
            mary.classList.add('block');
          }
          else if(e.target.classList.value === 'feather'){
            
            feather.classList.remove('hidden');
            feather.classList.add('block');
          }
          else if(e.target.classList.value === 'caleb'){
            
            caleb.classList.remove('hidden');
            caleb.classList.add('block');
          }
          else if(e.target.classList.value === 'brooke'){
            
            brooke.classList.remove('hidden');
            brooke.classList.add('block');
          }
     }
    
    });

    




 //}
});