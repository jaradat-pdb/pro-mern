const initialIssues = [
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
    constructor() {
        super();
        this.state = {
            issues: []
        };
    };

    componentDidMount() {
        this.loadData();
    };

    loadData() {
        setTimeout(() => {
            this.setState({
                issues: initialIssues
            });
        }, 5000);
    };

    render() {
        const issueRows = this.state.issues.map(
            issue => <IssueRow key={issue.id} issue={issue}/>
        );
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Due Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {issueRows}
                </tbody>
            </table>
        );
    };
}

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.due ? issue.due.toDateString() : ''}</td>
                <td>{issue.title}</td>
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
