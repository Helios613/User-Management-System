const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8000;

exports.homeRoutes = (req, res)=>{
    axios.get(`http://localhost:${PORT}/api/users`)
    .then(function(response){
        res.render('index', {users: response.data})
    }).catch(err=>{
        res.send(err);
    });

   
}

exports.addUser = (req, res)=>{
    res.render("add_user");
}

exports.updateUser = (req, res)=>{
    axios.get(`http://localhost:${PORT}/api/users`, {params: {id: req.query.id}})
    .then(userdata=>{
        res.render('update_user', {data: userdata.data});
    })
    .catch(err=>{
        res.send(err);
    })
}