const continents = ['Africa', 'Antartica', 'Asia', 'Europe', 'North America', 'South America'];
const continentsHello = Array.from(continents, c => `Hello {c}!`); // const continentsMsg = continentsHello.join(' ');

const continentsDiv = /*#__PURE__*/React.createElement("div", {
  title: "Continents div"
}, /*#__PURE__*/React.createElement("h1", null, continentsHello.join(' ')));