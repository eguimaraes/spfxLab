"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ex1;
(function (ex1) {
    var brasil = /** @class */ (function (_super) {
        __extends(brasil, _super);
        function brasil() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nome = "Brasil";
            _this.lingua = "Português";
            _this.bandeira = "br.jpg";
            _this.cidania = "Brasileiro";
            return _this;
        }
        return brasil;
    }(ex1.pais));
    ex1.brasil = brasil;
    var italia = /** @class */ (function (_super) {
        __extends(italia, _super);
        function italia() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nome = "Italia";
            _this.lingua = "Italiano";
            _this.bandeira = "it.jpg";
            _this.cidania = "Italiano";
            return _this;
        }
        return italia;
    }(ex1.pais));
    ex1.italia = italia;
    var franca = /** @class */ (function (_super) {
        __extends(franca, _super);
        function franca() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nome = "França";
            _this.lingua = "Francês";
            _this.bandeira = "fr.jpg";
            _this.cidania = "Francês";
            return _this;
        }
        return franca;
    }(ex1.pais));
    ex1.franca = franca;
    var portugal = /** @class */ (function (_super) {
        __extends(portugal, _super);
        function portugal() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nome = "Portugal";
            _this.lingua = "Português";
            _this.bandeira = "pt.jpg";
            _this.cidania = "português";
            return _this;
        }
        return portugal;
    }(ex1.pais));
    ex1.portugal = portugal;
    var espanha = /** @class */ (function (_super) {
        __extends(espanha, _super);
        function espanha() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nome = "Espanha";
            _this.lingua = "Espanhol";
            _this.bandeira = "es.jpg";
            _this.cidania = "Espanhol";
            return _this;
        }
        return espanha;
    }(ex1.pais));
    ex1.espanha = espanha;
    var alemanha = /** @class */ (function (_super) {
        __extends(alemanha, _super);
        function alemanha() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nome = "Alemanha";
            _this.lingua = "Alemão";
            _this.bandeira = "de.jpg";
            _this.cidania = "Alemão";
            return _this;
        }
        return alemanha;
    }(ex1.pais));
    ex1.alemanha = alemanha;
    var inglaterra = /** @class */ (function (_super) {
        __extends(inglaterra, _super);
        function inglaterra() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nome = "inglaterra";
            _this.lingua = "Inglês";
            _this.bandeira = "eng.jpg";
            _this.cidania = "Inglês";
            return _this;
        }
        return inglaterra;
    }(ex1.pais));
    ex1.inglaterra = inglaterra;
})(ex1 || (ex1 = {}));
