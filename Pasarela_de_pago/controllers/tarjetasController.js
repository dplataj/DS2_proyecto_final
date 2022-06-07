const { NULL } = require("mysql/lib/protocol/constants/types");

const controller = {}

//Home Page route
controller.init = (req,res) => {
    req.getConnection((err,conn)=> {
        if(err){
            res.json(err);
        }
        res.render('index');
    })
}

//Pago cred page route

controller.cred = (req,res) => {
    req.getConnection((err,conn)=> {
        if(err){
            res.json(err);
        }
        res.render('credito');
    })
}

//Pago debt page route

controller.debt = (req,res) => {
    req.getConnection((err,conn)=> {
        if(err){
            res.json(err);
        }
        res.render('debito');
    })
}

//Procesar Transacción
controller.save = (req,res) => {
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO transaccion SELECT ?, ?, ?, ?, ?, ?, ?, ?  WHERE EXISTS (SELECT * FROM tarjeta WHERE card_num = ? AND expmonth = ? AND expyear = ? AND ccv = ?);', 
        [BigInt(data.cardnum), parseFloat(data.monto), data.userName, data.email, data.address, data.city, data.country, data.postcode, BigInt(data.cardnum),data.expmonth,data.expyear,data.ccv], 
        (err,tarjeta)=>{
            if(err){
                res.redirect('/fail')
            }
            if(tarjeta.affectedRows == 0){
                res.redirect('/fail')
            }else{
                res.redirect('/exito');
            }
        })
    })
}

//CARD LIST 
controller.list = (req, res)=> {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM tarjeta', (err, tarjeta) =>{
        if(err){
            res.json(err);
        }
        res.render('tarjeta',{
            data: tarjeta
        });
     });
    });
}

//TRANSACCION LIST 
controller.listTran = (req, res)=> {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM transaccion', (err, transaccion) =>{
        if(err){
            res.json(err);
        }
        res.render('transaccion',{
            data: transaccion
        });
     });
    });
}

//Exito page

controller.exito = (req,res) => {
    req.getConnection((err,conn)=> {
        if(err){
            res.json(err);
        }
        res.render('exito');
    })
}

//Consultar Saldo page route

controller.view = (req,res) => {
    req.getConnection((err,conn)=> {
        if(err){
            res.json(err);
        }
        res.render('saldo');
    })
}
//Consultar Saldo-Action route

controller.consultar = (req,res) => {
    const data = req.body;
    req.getConnection((err, conn) =>{
        conn.query('SELECT card_num, ccv, expyear  FROM tarjeta WHERE card_num = ? and ccv = ?;',
        [BigInt(data.cardnum),data.ccv],
        (err, tarjeta) =>{
        if(err){
            res.json(err);
        }else if(tarjeta.length > 0 ){
            res.render('resultadoConsulta',{
                data: tarjeta
            });
        }else{
            res.redirect('/fail');
        }       
     });
    });
}
//Resultado exitoso consulta de saldo Saldo page route

controller.resultadoConsulta = (req,res) => {
    req.getConnection((err,conn)=> {
        if(err){
            res.json(err);
        }
        res.render('ResultadoConsulta');
    })
}

//Fail page

controller.fail= (req,res) => {
    req.getConnection((err,conn)=> {
        if(err){
            res.json(err);
        }
        res.render('fail');
    })
}
module.exports = controller;