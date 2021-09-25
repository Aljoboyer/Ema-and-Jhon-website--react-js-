const AddedProduct = (key) =>{
   const exists = localStorage.getItem('shopping-cart')
   let dataStoring = {}
   if(!exists)
   {
    dataStoring[key] = 1;
   }
   else{
    dataStoring = JSON.parse(exists)
    if(dataStoring[key])
    {
        const newcount = dataStoring[key] + 1;
        dataStoring[key] = newcount
    }
    else{
     dataStoring[key] = 1
    }

   }
   const stringdata = JSON.stringify(dataStoring);
   localStorage.setItem('shopping-cart', stringdata)
}
const RemoveProduct = (key) =>{
    const exists = localStorage.getItem('shopping-cart')
    let dataStoring = {}
    if(exists)
    {
            dataStoring = JSON.parse(exists)
        if(dataStoring[key] === 1)
        {
           delete dataStoring[key]
        }
        else{
            const newcount = dataStoring[key] - 1;
            dataStoring[key] = newcount
        }
    }
    else{
     
 
    }
    const stringdata = JSON.stringify(dataStoring);
    localStorage.setItem('shopping-cart', stringdata)
 }
 const Getproduct = () => {
     const exists = localStorage.getItem('shopping-cart')
     return exists ? JSON.parse(exists) : ''
 }
export{AddedProduct,RemoveProduct,Getproduct}