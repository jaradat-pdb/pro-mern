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
        const rowStyle = {border: "1px solid silver", padding: 4};
        return (
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style={rowStyle}>ID</th>
                        <th style={rowStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow rowStyle={rowStyle} issue_id={1}>Error in console when clicking Add</IssueRow>
                    <IssueRow rowStyle={rowStyle} issue_id={2}>Missing <b>bottom</b> border on panel</IssueRow>
                </tbody>
            </table>
        );
    };
}

class IssueRow extends React.Component {
    render() {
        const style = this.props.rowStyle;
        return (
            <tr>
                <td style={style}>{this.props.issue_id}</td>
                <td style={style}>{this.props.children}</td>
            </tr>
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
