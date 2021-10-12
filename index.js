
const express = require('express');
const app = express();

app.get('/success', (req, res) => {
    res.send('success');
})

/*
levels of auth
1. siswa: can only look history and propose a pembayaran to a petugas or admin.
2. petugas: can input data pembayaran to database, and look for history for each and every single siswa. 
3. admin: can do basically anything to the database
*/

//no auth routing, no authenticaion required
app.post('/login-siswa' );
app.post('/login-petugas')
app.post('/login-admin')

//auth routing, siswa only
app.get('/history', auth, (req,res) => {

})
app.post('/pay', auth, (req,res) => {

})

//auth routing, petugas only
app.get('/get/history')
app.get('/get/history/:id_siswa')
app.get('/unprocessed-payments')

app.listen(process.env.SERVER_PORT, function() {
    console.log('server is up and running at port: ' + process.env.SERVER_PORT);
})