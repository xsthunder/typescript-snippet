
 /**
  * 
  * @param string url 
  * @param {*} obj 一层obj,不可嵌套obj，如果是多层，需要对第二层作JSON.stringify
  * @param instance axios instance
  */
const postFormData = (url, obj, instance)=>{
    const bodyFormData = new FormData(); 
    Object.entries(obj).map(([k,v])=>bodyFormData.set(k,v)); 
    return instance('', { 
        method: 'post', 
        url: url, 
        headers: {'Content-Type': 'multipart/form-data' } 
    })        
}
