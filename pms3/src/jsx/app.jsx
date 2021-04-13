const elementDiv = React.createElement(
    'div',
    { title: 'Element div' },
    [
        React.createElement(
            'h1',
            null,
            'Hola Mundo'
        ),
        React.createElement(
            'h2',
            null,
            'que te pasa putas!'
        )
    ]
);
const jsxDiv = (
    <div title="JSX div">
        <h3>por que muy serioso?</h3>
    </div>
);
ReactDOM.render(jsxDiv, document.getElementById('jsxDiv'));
ReactDOM.render(elementDiv, document.getElementById('elementDiv'));