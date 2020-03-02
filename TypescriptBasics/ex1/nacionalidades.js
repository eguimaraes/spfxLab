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
    var italiano = /** @class */ (function (_super) {
        __extends(italiano, _super);
        function italiano() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pais = new ex1.italia();
            return _this;
        }
        return italiano;
    }(ex1.cidadao));
    ex1.italiano = italiano;
    var brasileiro = /** @class */ (function (_super) {
        __extends(brasileiro, _super);
        function brasileiro() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pais = new ex1.brasil();
            return _this;
        }
        return brasileiro;
    }(ex1.cidadao));
    ex1.brasileiro = brasileiro;
    var portugues = /** @class */ (function (_super) {
        __extends(portugues, _super);
        function portugues() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pais = new ex1.portugal();
            return _this;
        }
        return portugues;
    }(ex1.cidadao));
    ex1.portugues = portugues;
    var frances = /** @class */ (function (_super) {
        __extends(frances, _super);
        function frances() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pais = new ex1.franca();
            return _this;
        }
        return frances;
    }(ex1.cidadao));
    ex1.frances = frances;
    var britanico = /** @class */ (function (_super) {
        __extends(britanico, _super);
        function britanico() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pais = new ex1.inglaterra();
            return _this;
        }
        return britanico;
    }(ex1.cidadao));
    ex1.britanico = britanico;
})(ex1 || (ex1 = {}));
