import React, { Component } from "react";
import 'react-bootstrap';
import './index.css';
class Resume extends Component
{

    render(){
        return(
            <div className="container-fluid" id="resume" >
                <div className="row">
                    <div className='col-sm-2'></div>
                    <div className="col-sm-3 flip-box" data-aos='flip-left' data-aos-duration='800'>
                        <div className="toprow"><h1>Selected Works</h1></div>
                        <table className="table table-hover">
                        <tr className="container-fluid">
                            <td><strong>Quiz-Application</strong><blockquote>
                                    <ul>
                                        <li>A web-based project which provide user an interactive environment where user can 
                                            self assess himself.  </li>
                                    </ul>
                                    </blockquote>
                            </td>
                        </tr> 
                        <tr className="container-fluid">
                            <td><strong>Meet-Application</strong><blockquote>
                                    <ul>
                                        <li>A Real Time Meeting  Web-Application containing Video Conferencing, Text
                                            Chat and White Board Sharing. </li>
                                    </ul>
                                    </blockquote>
                            </td>
                        </tr>
                        <tr className="container-fluid">
                            <td><strong>ToMYSQL</strong><blockquote>
                                    <ul>
                                        <li>Cross Platform Software ToMYSQL that converts MS Excel spreadsheet to MYSQL Database </li>
                                    </ul>
                                    </blockquote>
                            </td>
                        </tr>                                     
                        </table>
                    </div>
                    <div className='col-sm-2'></div>
                    <div className="col-sm-3 flip-box" data-aos='flip-right' data-aos-duration='800'>
                        <div className="toprow"><h1>Knows About</h1></div>
                        <table className="table table-hover">
                        <tr className="container-fluid">
                                <td>C,C++</td>
                                <td className="progress">
                                    <span className="progress-bar progress-bar-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>Experienced</span>
                                </td>
                        </tr>
                        <tr className="container-fluid">
                                <td>HTML, CSS, JS</td>
                                <td className="progress">
                                    <span className="progress-bar progress-bar-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>Experienced</span>
                                </td>
                        </tr>
                        <tr className="container-fluid">
                                <td>Bootstrap3, MYSQL</td>
                                <td className="progress">
                                    <span className="progress-bar progress-bar-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>Experienced</span>
                                </td>
                        </tr>
                        <tr className="container-fluid">
                                <td>React</td>
                                <td className="progress">
                                    <span className="progress-bar progress-bar-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>Familiar</span>
                                </td>
                        </tr>
                        <tr className="container-fluid">
                                <td>Python, Java</td>
                                <td className="progress">
                                    <span className="progress-bar progress-bar-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>Familiar</span>
                                </td>
                        </tr>
                        <tr className="container-fluid">
                                <td>Node, Socket.io</td>
                                <td className="progress">
                                    <span className="progress-bar progress-bar-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>Learning</span>
                                </td>
                        </tr>
                        <tr className="container-fluid">
                                <td>Linux, Git</td>
                                <td className="progress">
                                    <span className="progress-bar progress-bar-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>Learning</span>
                                </td>
                        </tr>
                        <tr className="container-fluid">
                                <td>QT, Octave</td>
                                <td className="progress">
                                    <span className="progress-bar progress-bar-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"40%"}}>Learning</span>
                                </td>
                        </tr>
                        
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Resume;