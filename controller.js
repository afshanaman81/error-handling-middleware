const service = require('./service')

module.exports = {
    // Pattern 1: called by simple route
    getUser: async (req, res) => {
        // ask the service to read the user from Database
        const { id } = req.params;
        try{
            let response = await service.findUserById(id)
            res.json(response)
        }catch (err){
            const errorMessage = "Service Error in Controller"
            console.log(`2. ${errorMessage}`)
            // since the next place this controller will return to (the router)
            // has no way to catch errors, and we do not want our application to break
            // and we do not want our end-user to see an ugly error message
            // it is best that we return a more meaningful error message from here 
            // instead of throwing an error
            res.json(errorMessage)
        }
    },

    // Pattern 2: called by advance route without wrapper
    getBooks: async () => {
        try{
            return await service.findAllBooks();
        }catch(err){
            console.log("2. Service Error in Controller")
            throw (err)
        }
    },

    // Pattern 3: called by the advance route with wrapper
    getMovies: async () => {
        const response =  await service.findAllMovies();
        // In case of error in the Service, 
        // the code doesnt go into the following lines here, 
        // since the error automatically bubbles up to the router
        console.log(`2. ${response}`)
        return response
    }
}