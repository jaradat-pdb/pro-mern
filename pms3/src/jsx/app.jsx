class HelloContinentsComponent extends React.Component {
    render() {
        const continents = ['Africa', 'Antartica', 'Australia', 'Asia', 'Europe', 'North America', 'South America'];
        const helloContinents = Array.from(continents, (c, i) => `${i+1}. Hello ${c}!`);
        
        return (
            <div title="Hello Continents div">
                <h1>{helloContinents.join('\r\n')}</h1>
            </div>
        );
    }
}

const element = <HelloContinentsComponent/>;
ReactDOM.render(element, document.getElementById('classDiv'));