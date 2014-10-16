/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';


var kraken = require('kraken-js'),
    path = require('path'),
    express = require('express'),
    request = require('supertest'),
    spec = require('../lib/spec');


describe('/profile', function () {

    var app;


    beforeEach(function (done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: path.resolve(__dirname, '..'),
            onconfig: spec(app).onconfig
        }));
    });


    it('should say "hello"', function (done) {
        request(app)
            .get('/profile')
            .expect(302)
            .end(function (err, res) {
                done(err);
            });
    });

});
