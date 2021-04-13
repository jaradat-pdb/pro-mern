"use strict";

var elementDiv = React.createElement('div', {
  title: 'Element div'
}, [React.createElement('h1', null, 'Hola Mundo'), React.createElement('h2', null, 'que te pasa putas!')]);
var jsxDiv = /*#__PURE__*/React.createElement("div", {
  title: "JSX div"
}, /*#__PURE__*/React.createElement("h3", null, "por que muy serioso?"));
ReactDOM.render(jsxDiv, document.getElementById('jsxDiv'));
ReactDOM.render(elementDiv, document.getElementById('elementDiv'));