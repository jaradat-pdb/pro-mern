const continents = [
    'Africa', 'Antartica', 'Asia', 'Europe', 'North America', 'South America'
];
const continentsHello = Array.from(continents, c => `Hello ${c}!`);

const continentsDiv = (
    <div title="Continents div">
        <h1>{continentsHello.join('   ')}</h1>
    </div>
);

ReactDOM.render(continentsDiv, document.getElementById('continentsDiv'));
