/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';


var kraken = require('kraken-js'),
    path = require('path'),
    express = require('express'),
    request = require('supertest'),
    spec = require('../lib/spec');


describe('/login', function () {

    var app;


    beforeEach(function (done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: path.resolve(__dirname, '..'),
            onconfig: spec(app).onconfig
        }));

    });


    it('should say "Login"', function (done) {
        request(app)
            .get('/login')
            .expect(200)
            .expect('Content-Type', /html/)
            .expect(/Login/)
            .end(function (err, res) {
                done(err);
            });
    });

});
