const service = require('./service')

module.exports = {
    // called by simple route
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

    // called by advance route without wrapper
    getBooks: async (req, res) => {
        try{
            return await service.findAllBooks();
        }catch(err){
            console.log("2. Service Errro in Controller")
            throw (err)
        }
    },

    // called by the advance route with wrapper
    getMovies: async(req, res)=>{
        const response =  await service.findAllMovies();
        // In case of error in the Service, 
        // the code doesnt go into the following lines, 
        // since the error automatically bubbles up to the router
        console.log(`2. ${response}`)
        return response
    }
}