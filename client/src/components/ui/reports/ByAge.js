import React, { Component } from 'react'
import { ageReportMale } from '../../../functions/Users'
import { ageReportFemale } from '../../../functions/Users'
import '../../../assets/vendors4/jquery-toggles/css/toggles.css'
import '../../../assets/vendors4/jquery-toggles/css/themes/toggles-light.css'
import '../../../assets/dist/css/style.css'
import { Doughnut, HorizontalBar } from 'react-chartjs-2'



class ByAge extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            maleData: {},
            femaleData: {}
        };
    }

    componentDidMount() {
        ageReportFemale().then(res=>{
            const data = res.members[0]
            const ageGroup = data.map(age => age.age)
            const total = data.map(t => t.total)
            
            this.setState({
                femaleData: {
                    type: 'doughnut', 
                    labels: ageGroup,
                   datasets: [{
                       label: 'Female',
                       data: total,
                       backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)'
                    ],
                   }]
                }
            })
            
            
        })

        //same data for male population
        ageReportMale().then(res=>{
            const data = res.members[0]
            const ageGroup = data.map(age => age.age)
            const total = data.map(t => t.total)
            
            this.setState({
                maleData: {
                    type: 'doughnut', 
                    labels: ageGroup,
                   datasets: [{
                       label: 'Male',
                       data: total,
                       backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)'
                    ],
                   }]
                }
            })
            
            
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="hk-wrapper hk-vertical-nav" style={{ marginTop: "120px", marginLeft: "240px" }}>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="hk-pg-header">
                            <h4 className="hk-pg-title"><span className="pg-title-icon"><span className="feather-icon"><i data-feather="share-2"></i></span></span>Gender Analysis</h4>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <section className="hk-sec-wrapper">
                                    <h6 className="hk-sec-title">Number of Males by Territory</h6>
                                    <div className="row">
                                        <div className="col-sm">
                                            <div id="m_chart_2" className="" style={{height:"294px"}}>
                                            <Doughnut 
                                                data ={ this.state.maleData} 
                                                width={100}
                                                height={50}
                                                options={{
                                                    maintainAspectRatio: false
                                                }}
                                                />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="hk-sec-wrapper">
                                    <h6 className="hk-sec-title">Number of Females by Territory</h6>
                                    <div className="row">
                                        <div className="col-sm">
                                            <div id="m_chart_4" className="" style={{height:"294px"}}>
                                            <Doughnut 
                                                data ={ this.state.femaleData} 
                                                width={100}
                                                height={50}
                                                options={{
                                                    maintainAspectRatio: false
                                                }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ByAge
