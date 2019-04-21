const router = require('express').Router();
const controller = require('./controller')

// advance router has a function with its own ability to catch error and deal with it
// there will be two advance examples here
// Pattern 2. to have a try/catch block all the way from router to the service
// Pattern 3. to have a asyncWrapper which will take care of the try/catch blocks at all levels

router.get('/no-wrapper/books', async (req,res) =>{
    try{
        return await controller.getBooks();
    }catch(err){
        const errorMessage = "3. Final Error in Router"
        console.log(errorMessage)
        // since the next place this router will return to is the end-user
        // and we do not want our end-user to see an ugly error message
        // it is best that we return a more meaningful error message from here 
        // instead of throwing an error
        res.json(errorMessage)
    }
})



const asyncWrapper = require('./asyncWrapper')
router.get('/wrapper/movies', 
    asyncWrapper(async (req, res)=> {
        const response = await controller.getMovies();
        // In case of error in the Service, 
        // the code doesnt go into the following lines here, 
        // since the error automatically bubbles up to the client
        console.log(`3. ${response}`)
        res.json(response)
    })
)

module.exports = router;
