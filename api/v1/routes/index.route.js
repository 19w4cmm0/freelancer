const userRoutes = require('./user.route')
const taskRoutes = require('./task.route');



module.exports = (app) => {
    const version = "/api/v1"
    app.use(version + '/tasks', taskRoutes);
    app.use(version + '/users', userRoutes);
}