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

module.exports = controller;