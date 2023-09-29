let promise = new Promise(function(resolve,resolved){
    setTimeout(function(){
        resolve('Promise Resolved')
    },4000)
}
);
async function restfullAPI(){
    let result = await promise;
    console.log(result);
    console.log('success');
}

export default restfullAPI;