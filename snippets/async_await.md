
# Async Await
 


```javascript


    const asyncTask = (thing)=>{
        return new Promise((resolve, reject)=>{
            if(thing){
                return   setInterval(()=>{
                    resolve("you got some shitty")
                }, 3000)
            }else{
                return   setInterval(()=>{
                    reject("error please try again")
                }, 3000)
            }
        })
    }

    async function appInit(){

        try {
            const post = await asyncTask( )
            renderPost(post)
        } catch (error) {
            console.log(error)
        }

    }


    appInit();



    function renderPost(aPost){
        console.log(aPost)

}

```