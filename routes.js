const axios = require('axios');

const HOST = process.env.HOST || '192.168.0.3';

var appRouter = function (app, cors) {

    app.get("/", function(req, res) {

        axios.get('http://' + HOST + ':8081')
        .then(response => {
            res.status(200).send("o" + response.data);
        })
        .catch(error => {
            res.status(500).send(error);
        })
    })
}

module.exports = appRouter;