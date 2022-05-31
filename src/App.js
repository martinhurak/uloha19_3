import VilageItem from "./VilageItem";

const village_aray = [{ type: 'building', color: 'gray', size: '50px' },
{ type: 'car-side', color: 'red', size: '20px' },
{ type: 'home', color: '#000000', size: '30px' },
{ type: 'building', color: 'yellow', size: '80px' },
{ type: 'tree', color: 'green', size: '40px' },
{ type: 'tree', color: 'green', size: '60px' },
{ type: 'tree', color: 'green', size: '15px' },
{ type: 'home', color: 'brown', size: '25px' },
{ type: 'home', color: '#88cfe5', size: '35px' }];


function Village() { // atribut je v zatvorke 

  


        return village_aray.map ( (e)=> 
        
      <VilageItem  type={e.type} color={e.color} size={e.size}/>
        );
    
}


export default Village;