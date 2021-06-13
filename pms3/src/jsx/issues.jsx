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

const sampleIssue = {
    status: 'New',
    owner: 'Khaled',
    effort: 3,
    title: 'Completion date should be optional'
};

class IssueAdd extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.addIssue;
        const issue = {
            status: form.status.value,
            owner: form.owner.value,
            effort: form.effort.value,
            title: form.title.value
        }
        this.props.createIssue(issue);
        form.status.value = "";
        form.owner.value = "";
        form.effort.value = 0;
        form.title.value = "";
    }

    render() {
        return (
            // <div title="Add issue div">{this.props.addIssueDiv}</div>
            <form name="addIssue" onSubmit={this.handleSubmit}>
                <input type="text" name="status" placeholder="Status"/>
                <input type="text" name="owner" placeholder="Owner"/>
                <input type="number" name="effort" min="0" max="21"/>
                <input type="text" name="title" placeholder="Title"/>
                <button>Add</button>
            </form>
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

class IssueList extends React.Component {
    constructor() {
        super();
        this.state = {
            issues: [],
            addIssueDiv: 'This is a placeholder for the issue adder.'
        };
        this.createIssue = this.createIssue.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    createIssue(issue) {
        this.updateAddIssueDiv('Updating the issue table with some fun!');
        const newIssueList = this.state.issues.slice();
        issue.id = this.state.issues.length + 1;
        issue.created = new Date();
        newIssueList.push(issue);
        this.setState({
            issues: newIssueList
        });
        this.updateAddIssueDiv('Sike... just playan');
    }

    updateAddIssueDiv(str) {
        this.setState({
            addIssueDiv: str
        });
    }

    loadData() {
        setTimeout(() => {
            this.setState({
                issues: initialIssues
            });
        }, 5000);
    }

    render() {
        return (
            <>
                <IssueTable issues={this.state.issues}/>
                <hr/>
                <IssueAdd createIssue={this.createIssue} addIssueDiv={this.state.addIssueDiv}/>
            </>
        );
    }
}

const IssueTable = (props) => {
    const issueRows = props.issues.map(
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
}

const IssueRow = (props) => (
    <tr>
        <td>{props.issue.id}</td>
        <td>{props.issue.status}</td>
        <td>{props.issue.owner}</td>
        <td>{props.issue.created.toDateString()}</td>
        <td>{props.issue.effort}</td>
        <td>{props.issue.due ? props.issue.due.toDateString() : ''}</td>
        <td>{props.issue.title}</td>
    </tr>
)

class Issues extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <hr/>
                <IssueFilter/>
                <hr/>
                <IssueList/>
                <hr/>
            </React.Fragment>
        );
    };
}

const element = <Issues/>;
ReactDOM.render(element, document.getElementById('issuesDiv'));
