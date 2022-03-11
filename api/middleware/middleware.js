const User = require('../users/users-model')

function logger(req, res, next) {

  console.log('Logger')
  const timestamp = new Date().toLocaleString()
  const method = req.method
  const url = req.originalUrl
  console.log(`[${timestamp}] ${method} to ${url}`)
  next()
}

async function validateUserId(req, res, next) {
 
  try{
    const user = await User.getById(req.params.id)
    if(!user) {
      res.status(404).json({
        message: 'user not found'
      })
    } else {
       req.user
    }
  }catch (err) {
    res.status(500).json()
  }
next()
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  next()
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  next()
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
}
