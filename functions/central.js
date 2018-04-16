router.post('/central', cors(), (req, res) => { 
const rice = req.body.rice;
console.log(rice);
const wheat = req.body.wheat;
console.log(wheat);
// const phonenumber = parseInt(req.body.phonenumber);
//console.log(phonenumber);

const kerosene = req.body.kerosene;
console.log(kerosene);
const transactionstring = ({
    rice:rice,
    wheat:wheat,
    kerosene:kerosene,
    
    
});
console.log(transactionstring)
if (!rice || !wheat || !kerosene  ) {        res
        .status(400)
        .json({
            message: 'Invalid Request !'
        });    } else {        state
        .central(transactionstring)
        .then(result => {                res.send({
                "message": "Commandities allocated",
                "status": true,                });            })
        .catch(err => res.status(err.status).json({
            message: err.message
        }).json({
            status: err.status
        }));
}
});
