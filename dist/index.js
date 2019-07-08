"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var romanMapping_1 = require("./romanMapping");
var RomanMap = new Map();
exports.romanToArabic = function (str) {
    var res = 0;
    Object.entries(romanMapping_1.IRomanNumeral).map(function (_a) {
        var key = _a[0], value = _a[1];
        RomanMap.set(key, value);
    });
    for (var i = 0; i < str.length; i++) {
        var curr = RomanMap.get(str.charAt(i));
        if (i + 1 < str.length) {
            var next = RomanMap.get(str.charAt(i + 1));
            if (curr < next) {
                res += next - curr;
                i++;
            }
            else {
                res += curr;
            }
        }
        else {
            res += curr;
        }
    }
    return res;
};
