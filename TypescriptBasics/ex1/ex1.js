"use strict";
var ex1;
(function (ex1) {
    var zelig = new ex1.brasileiro("Zelig");
    var rito = new ex1.italiano("Don Rit�o");
    var rita = new ex1.frances("Rita");
    var chiquinha = new ex1.italiano("Chiquinha");
    var sherlock = new ex1.britanico("Sherlock");
    var watson = new ex1.britanico("Watson");
    var equipe = new Array(zelig, rito, rita, chiquinha, sherlock, watson);
    equipe.forEach(function (cidadao) {
        console.log(cidadao.nome + " e" + cidadao.pais.cidania);
    });
})(ex1 || (ex1 = {}));
