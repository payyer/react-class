import React from 'react';


class ChildComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            showJobs: false
        }
    }
    handleShowJobs = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log(job)
        this.props.deleteOneJob(job);
    }

    render() {
        const { listJobs } = this.props
        let { showJobs } = this.state;
        return (
            <>
                {console.log(listJobs)}
                {
                    showJobs === false ?
                        <div>
                            <button onClick={() => this.handleShowJobs()}>Show</button>
                        </div>
                        :
                        <div>
                            {
                                listJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $ <span onClick={() => this.handleOnClickDelete(item)}>X</span>
                                        </div>
                                    );
                                })
                            }

                            <button onClick={() => this.handleShowJobs()}>Hide</button>
                        </div>
                }
            </>
        )
    }
}
// const ChildComponent = (porps) => {
//     const { listJobs } = porps
//     return (
//         <>

//             {
//                 listJobs.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {item.title} - {item.salary}
//                         </div>
//                     )
//                 })
//             }
//         </>
//     );
// }
export default ChildComponent