import data from '../component/main.json'
let fetchData = (url, callback) => {
  fetch(url) 
    .then(response=>response.json())
    .then(res=>{
      callback(res)
    }).catch(function (e) {
    	 callback(e)
    })
}

export default fetchData





