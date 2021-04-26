const issues = [
    {
        id: 1,
        status: 'New',
        owner: 'Waleed',
        effort: 5,
        created: new Date('2021-04-20'),
        due: undefined,
        title: 'Error in console when clicking Add'
    },
    {
        id: 2,
        status: 'Assigned',
        owner: 'Nasser',
        effort: 7,
        created: new Date('2021-04-18'),
        due: new Date('2021-05-01'),
        title: 'Missing bottom border on panel'
    }
];

class HelloContinentsComponent extends React.Component {
    render() {
        const continents = [
            'Africa', 'Antartica', 'Australia', 'Asia', 'Europe', 'North America', 'South America'
        ];
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
