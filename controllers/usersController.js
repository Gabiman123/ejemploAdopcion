let controller = {};
let format = require("../format").format;
const jwt = require("jsonwebtoken");
const db = require("../database").config;

controller.getLogin = (req, res) => {
	const user = {
		id : req.body.id,
		time : new Date().getTime()
	};
	const token = jwt.sign({user}, db.secret_key, {expiresIn:'1m'});
	res.status(200);
	format.success = true;
	format.code = 200;
	format.message = "Token";
	format.data = token;
	res.json(format);
};
controller.getUser = (req, res) =>
{
    const sql = "SELECT * FROM users WHERE id = ?";
	req.getConnection((error,conn) => {
        if(error)
        {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        }
        else
        {
            conn.query(sql, [req.query.id] ,(err, results) =>{
                if(err)
                {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                }
                else
                {
                    format.code = 200;
                    format.message = "Success";
                    format.success = true;
                    format.data = results;
                    res.status(200);
                    res.json(format);
                }
                
            })
        }
		
	});
};

controller.getUsers = (req, res) =>
{
    const sql = "SELECT * FROM users";
	req.getConnection((error,conn) => {
        if(error)
        {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        }
        else
        {
            conn.query(sql, [req.query.id] ,(err, results) => {
                if(err)
                {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                }
                else
                {
                    format.code = 200;
                    format.message = "Success";
                    format.success = true;
                    format.data = results;
                    res.status(200);
                    res.json(format);
                }
                
            })
        }
    })
}

controller.postUser = (req, res) =>
{
    const sql = "INSERT INTO users SET ?";
    req.getConnection((error,conn) => {
        if(error)
        {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        }
        else
        {
            conn.query(sql, [req.body] ,(err, results) => {
                if(err)
                {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                }
                else
                {
                    format.code = 201;
                    format.message = "User add";
                    format.success = true;
                    format.data = results.insertId;
                    res.status(201);
                    res.json(format);
                }
                
            })
        }
    })
}

controller.putUser = (req, res) =>
{
    const sql = "UPDATE users SET ? WHERE id = ?";
	req.getConnection((error,conn) => {
        if(error)
        {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        }
        else
        {
            conn.query(sql, [req.body, req.body.id] ,(err, results) => {
                if(err)
                {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                }
                else
                {
                    if(results.affectedRows > 0)
                    {
                        format.code = 200;
                        format.message = "User updated";
                        format.success = true;
                        format.data = results;
                        res.status(200);
                        res.json(format);
                    }
                    else
                    {
                        format.code = 404;
                        format.message = "User can't be updated, please confirm data";
                        format.success = false;
                        format.data = results;
                        res.status(404);
                        res.json(format);
                    }
                    
                }
            })
        }
    })
}

controller.deleteUser = (req, res) =>
{
    const sql = "DELETE from users WHERE id = ?";
    req.getConnection((error,conn) => {
        if(error)
        {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        }
        else
        {
            conn.query(sql, [req.body.id] ,(err, results) => {
                if(err)
                {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                }
                else
                {
                    if(results.affectedRows > 0)
                    {
                        format.code = 204;
                        format.message = "User deleted";
                        format.success = true;
                        format.data = results;
                        res.status(204);
                        res.json(format);
                    }
                    else
                    {
                        format.code = 404;
                        format.message = "User can't be deleted, please confirm data";
                        format.success = false;
                        format.data = results;
                        res.status(404);
                        res.json(format);
                    }
                    
                }
            })
        }
    })
}
module.exports = controller;