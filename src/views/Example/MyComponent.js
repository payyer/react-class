import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
export default class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            listJobs: [
                { id: 1, title: 'Developer', salary: `1000$` },
                { id: 2, title: 'Tester', salary: `800$` },
                { id: 3, title: 'DevOps', salary: `1200$` },
            ]
        };
    }

    addNewJob = (job) => { // có 2 cách
        // let currentListJobs = this.state.listJobs;
        // currentListJobs.push(job);
        // this.setState({
        //     listJobs: currentListJobs
        // })
        console.log('accept from parent', job);
        this.setState({
            listJobs: [...this.state.listJobs, job]
        })
    }

    deleteOneJob = (job) => {
        let currentListJob = this.state.listJobs;
        currentListJob = currentListJob.filter(item => item.id !== job.id);
        this.setState({
            listJobs: currentListJob
        })
    }
    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponent listJobs={this.state.listJobs} deleteOneJob={this.deleteOneJob} />
            </>
        );
    }
}
