"use strict";

var continents = ['Africa', 'Antartica', 'Asia', 'Europe', 'North America', 'South America'];
var continentsHello = Array.from(continents, function (c) {
  return "Hello ".concat(c, "!");
});
var continentsDiv = /*#__PURE__*/React.createElement("div", {
  title: "Continents div"
}, /*#__PURE__*/React.createElement("h1", null, continentsHello.join('   ')));
ReactDOM.render(continentsDiv, document.getElementById('continentsDiv'));