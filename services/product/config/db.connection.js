const { default: mongoose } = require("mongoose");

module.exports = mongoose.connect("mongodb://localhost:27017/gRPC").then(() => {
    console.log("MongoDB connected successfully");
}).catch(err => {
    console.log(err.messages);
})