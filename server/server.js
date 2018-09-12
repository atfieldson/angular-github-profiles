const express= require('express');
const app = express();
const PORT= 5000;

app.listen(PORT, () => {
    console.log( 'Server up on:', PORT);
})

app.route('/server/public').get((req, res) =>{

});