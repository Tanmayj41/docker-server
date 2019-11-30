const express = require("express");
const router = express();
const db = require("../db.js")
const utils = require("../utils.js")

const connection = db.connect();

router.get("/",(request,response)=>{
    var sql = `select * from product`;
    connection.query(sql,(err,result)=>{
        if(err==null)
        {
            response.send(utils.createResult(err,result))
        }
        else
        {
            response.send(utils.createResult(err,result))
        }
    })
})

router.use(express.json());

router.post("/",(request,response)=>{
    const {id,title,description,price} = request.body;
    var sql = `insert into product values(${id},'${title}','${description}',${price})`;
    connection.query(sql,(err,result)=>{
        if(err==null)
        {
            response.send(utils.createResult(err,result))
        }
        else
        {
            response.send(utils.createResult(err,result))
        }
    })
})


module.exports = router;