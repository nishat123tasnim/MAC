/* current memory*/

document.getElementById('first-memory').addEventListener('click',function(){

    let MemoryPrice = document.getElementById('memory-price');

    const PreviousMemoryPriceText = MemoryPrice.innerText;
    const PreviousMemoryPrice = parseFloat(PreviousMemoryPriceText);
    const TotalMemoryPrice = PreviousMemoryPrice - 20;
    if(TotalMemoryPrice == 0){

        MemoryPrice.innerText = TotalMemoryPrice;

    const IdTotalPrice = document.getElementById('total-price');
    const PreviousTotalPriceText = IdTotalPrice.innerText;
    const PreviousTotalPrice = parseFloat(PreviousTotalPriceText);

    const NewTotalPrice = PreviousTotalPrice - 20;

    IdTotalPrice.innerText = NewTotalPrice;

    return NewTotalPrice;

    }

   })

/* requirement memory*/

    document.getElementById('second-memory').addEventListener('click',function(){

    let MemoryPrice = document.getElementById('memory-price');

    const PreviousMemoryPriceText = MemoryPrice.innerText;
    const PreviousMemoryPrice = parseFloat(PreviousMemoryPriceText);
    const TotalMemoryPrice = PreviousMemoryPrice + 20;

    if(TotalMemoryPrice == 20){

        MemoryPrice.innerText = TotalMemoryPrice;

        const IdTotalPrice = document.getElementById('total-price');
        const PreviousTotalPriceText = IdTotalPrice.innerText;
        const PreviousTotalPrice = parseFloat(PreviousTotalPriceText);
    
        const NewTotalPrice = PreviousTotalPrice + TotalMemoryPrice;
    
        IdTotalPrice.innerText = NewTotalPrice;

        return NewTotalPrice;
    
    }

   
   })

// first Storage

document.getElementById('first-storage').addEventListener('click',function(){

    let StoragePrice = document.getElementById('storage-price');

    const PreviousStoragePriceText = StoragePrice.innerText;
    const PreviousStoragePrice = parseFloat(PreviousStoragePriceText);
    
    if(PreviousStoragePrice == 20){

        const TotalStoragePrice = PreviousStoragePrice - 20;

        StoragePrice.innerText = TotalStoragePrice;

    const IdTotalPrice = document.getElementById('total-price');
    const PreviousTotalPriceText = IdTotalPrice.innerText;
    const PreviousTotalPrice = parseFloat(PreviousTotalPriceText);

    const NewTotalPrice = PreviousTotalPrice - 20;

    IdTotalPrice.innerText = NewTotalPrice;

    return NewTotalPrice;

    }
     else if(PreviousStoragePrice == 40) 
    {

        const TotalStoragePrice = PreviousStoragePrice - 40;


            StoragePrice.innerText = TotalStoragePrice;
          
        

    const IdTotalPrice = document.getElementById('total-price');
    const PreviousTotalPriceText = IdTotalPrice.innerText;
    const PreviousTotalPrice = parseFloat(PreviousTotalPriceText);

    const NewTotalPrice = PreviousTotalPrice - 40;

    if(NewTotalPrice >= 1299){

        IdTotalPrice.innerText = NewTotalPrice;

    }

    }

  
   else
   {
    const TotalStoragePrice = PreviousStoragePrice - 0;


    StoragePrice.innerText = TotalStoragePrice;
  


const IdTotalPrice = document.getElementById('total-price');
const PreviousTotalPriceText = IdTotalPrice.innerText;
const PreviousTotalPrice = parseFloat(PreviousTotalPriceText);

const NewTotalPrice = PreviousTotalPrice - 0;

IdTotalPrice.innerText = NewTotalPrice;

return NewTotalPrice;
}



})

/*    second storage */

document.getElementById('second-storage').addEventListener('click',function(){

    let StoragePrice = document.getElementById('storage-price');

    const PreviousStoragePriceText = StoragePrice.innerText;
    const PreviousStoragePrice = parseFloat(PreviousStoragePriceText);
    
    if(PreviousStoragePrice == 0){

        const TotalStoragePrice = PreviousStoragePrice + 20;

        StoragePrice.innerText = TotalStoragePrice;

    const IdTotalPrice = document.getElementById('total-price');
    const PreviousTotalPriceText = IdTotalPrice.innerText;
    const PreviousTotalPrice = parseFloat(PreviousTotalPriceText);

    const NewTotalPrice = PreviousTotalPrice + 20;

    IdTotalPrice.innerText = NewTotalPrice;

    return NewTotalPrice;

    }
     else if(PreviousStoragePrice == 40) 
    {

        const TotalStoragePrice = PreviousStoragePrice - 20;


            StoragePrice.innerText = TotalStoragePrice;
          
        

    const IdTotalPrice = document.getElementById('total-price');
    const PreviousTotalPriceText = IdTotalPrice.innerText;
    const PreviousTotalPrice = parseFloat(PreviousTotalPriceText);

    const NewTotalPrice = PreviousTotalPrice - 20;

    if(NewTotalPrice >= 1319){

        IdTotalPrice.innerText = NewTotalPrice;

    }

    }

})

// third Storage

document.getElementById('third-storage').addEventListener('click',function(){

    let StoragePrice = document.getElementById('storage-price');

    const PreviousStoragePriceText = StoragePrice.innerText;
    const PreviousStoragePrice = parseFloat(PreviousStoragePriceText);
    
    if(PreviousStoragePrice == 20){

        const TotalStoragePrice = PreviousStoragePrice + 20;

        StoragePrice.innerText = TotalStoragePrice;

    const IdTotalPrice = document.getElementById('total-price');
    const PreviousTotalPriceText = IdTotalPrice.innerText;
    const PreviousTotalPrice = parseFloat(PreviousTotalPriceText);

    const NewTotalPrice = PreviousTotalPrice + 20;

    IdTotalPrice.innerText = NewTotalPrice;

    return NewTotalPrice;

    }
     else if(PreviousStoragePrice == 0) 
    {

        const TotalStoragePrice = PreviousStoragePrice + 40;


            StoragePrice.innerText = TotalStoragePrice;
          
        

    const IdTotalPrice = document.getElementById('total-price');
    const PreviousTotalPriceText = IdTotalPrice.innerText;
    const PreviousTotalPrice = parseFloat(PreviousTotalPriceText);

    const NewTotalPrice = PreviousTotalPrice + 40;

    if(NewTotalPrice > 1299){

        IdTotalPrice.innerText = NewTotalPrice;

    }

    }

  
   
})

/* delivery */

document.getElementById('delivery').addEventListener('click',function(){

    let DeliveryPrice = document.getElementById('delivery-price');

    const PreviousDeliveryPriceText = DeliveryPrice.innerText;
    const PreviousDeliveryPrice = parseFloat(PreviousDeliveryPriceText);
    const TotalDeliveryPrice = PreviousDeliveryPrice - 5;
    if(TotalDeliveryPrice == 0){

        DeliveryPrice.innerText = TotalDeliveryPrice;

    const IdTotalPrice = document.getElementById('total-price');
    const PreviousTotalPriceText = IdTotalPrice.innerText;
    const PreviousTotalPrice = parseFloat(PreviousTotalPriceText);

    const NewTotalPrice = PreviousTotalPrice - 5;

    IdTotalPrice.innerText = NewTotalPrice;

    return NewTotalPrice;

    }

   })
    // early delivery

    document.getElementById('early-delivery').addEventListener('click',function(){

        let DeliveryPrice = document.getElementById('delivery-price');
    
        const PreviousDeliveryPriceText = DeliveryPrice.innerText;
        const PreviousDeliveryPrice = parseFloat(PreviousDeliveryPriceText);
        const TotalDeliveryPrice = PreviousDeliveryPrice + 5;
        if(TotalDeliveryPrice == 5){
    
            DeliveryPrice.innerText = TotalDeliveryPrice;
    
        const IdTotalPrice = document.getElementById('total-price');
        const PreviousTotalPriceText = IdTotalPrice.innerText;
        const PreviousTotalPrice = parseFloat(PreviousTotalPriceText);
    
        const NewTotalPrice = PreviousTotalPrice + 5;
    
        IdTotalPrice.innerText = NewTotalPrice;
    
        return NewTotalPrice;
    
        }
    
       })