class IssueAdd extends React.Component {
    render() {
        return (
            <div title="Add issue div">This is a placeholder for a form to add an issue.</div>
        );
    };
}

class IssueFilter extends React.Component {
    render() {
        return (
            <div title="Filter issue div">This is a placeholder for the issue filter.</div>
        );
    };
}

class IssueTable extends React.Component {
    render() {
        return (
            <div title="Table issue div">This is a placeholder for a table of issues.</div>
        );
    };
}

class Issues extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <hr/>
                <IssueFilter/>
                <hr/>
                <IssueTable/>
                <hr/>
                <IssueAdd/>
            </React.Fragment>
        );
    };
}

const element = <Issues/>;
ReactDOM.render(element, document.getElementById('issuesDiv'));
