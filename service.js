const dbConnection = require('./dbConnection')

module.exports = {
    findUserById: async (id) => {
        // find the user in database
        try{
            // this call will error out since there is no implementation for the `find` method
            return await dbConnection.findUser(id)
        }catch( err ){
            //console.log(err.typeError)
            console.log("1. DB Error in Service")
            throw(err)
        }
    },

    findAllBooks: async () => {
        try{
            return await dbConnection.findBooks();
        }catch(err){
            console.log("1. DB Error in Service")
            throw(err)
        }
    },

    findAllMovies: async() => {
        // Comment/uncomment the statement as needed
        // Success Case 
        return {message:"All Movies"}

        // Error Case
        //throw ("DB Error in Service")
    }
}