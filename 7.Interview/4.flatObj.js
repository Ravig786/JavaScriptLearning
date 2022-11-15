function flat_Obj(obj,parent,res = {}){
    for(let key in obj){
        let propname = parent ? parent + '.' + key : key;
        if(typeof obj[key] === 'object'){
            flat_Obj(obj[key],propname,res);
        }else{
            res[propname] = obj[key];
        }
    }
    return res;
}

let obj = {
    name:'Adam',
    age:20,
    address:{
        city:{
            cityName:'GWL'
        },
        pincode:210309
    }
};

const res = flat_Obj(obj);

console.log(res)
