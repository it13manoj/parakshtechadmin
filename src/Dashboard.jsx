import { Editor } from '@tinymce/tinymce-react';


import { useState } from 'react';
import { EditorTool } from './EditorTool';


export const Dashboard = () => {
    const [data, setData] = useState("");

    console.log(data);
    return (
        <>
           
            <div id="page-wrapper">
                <div className="graphs">
                    <div className="col_3">
                        <div className="col-md-3 widget widget1">
                            <div className="r3_counter_box">
                                <i className="pull-left fa fa-thumbs-up icon-rounded"></i>
                                <div className="stats">
                                    <h5><strong>45%</strong></h5>
                                    <span>New Orders</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 widget widget1">
                            <div className="r3_counter_box">
                                <i className="pull-left fa fa-users user1 icon-rounded"></i>
                                <div className="stats">
                                    <h5><strong>1019</strong></h5>
                                    <span>New Visitors</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 widget widget1">
                            <div className="r3_counter_box">
                                <i className="pull-left fa fa-comment user2 icon-rounded"></i>
                                <div className="stats">
                                    <h5><strong>1012</strong></h5>
                                    <span>New Users</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 widget">
                            <div className="r3_counter_box">
                                <i className="pull-left fa fa-dollar dollar1 icon-rounded"></i>
                                <div className="stats">
                                    <h5><strong>$450</strong></h5>
                                    <span>Profit Today</span>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                     <EditorTool />

                    <div className="col_1">
                        <div className="col-md-4 span_7">
                            <div className="cal1 cal_2"><div className="clndr"><div className="clndr-controls"><div className="clndr-control-button"><p className="clndr-previous-button">previous</p></div><div className="month">July 2015</div><div className="clndr-control-button rightalign"><p className="clndr-next-button">next</p></div></div><table className="clndr-table" border="0" cellspacing="0" cellpadding="0"><thead><tr className="header-days"><td className="header-day">S</td><td className="header-day">M</td><td className="header-day">T</td><td className="header-day">W</td><td className="header-day">T</td><td className="header-day">F</td><td className="header-day">S</td></tr></thead><tbody><tr><td className="day adjacent-month last-month calendar-day-2015-06-28"><div className="day-contents">28</div></td><td className="day adjacent-month last-month calendar-day-2015-06-29"><div className="day-contents">29</div></td><td className="day adjacent-month last-month calendar-day-2015-06-30"><div className="day-contents">30</div></td><td className="day calendar-day-2015-07-01"><div className="day-contents">1</div></td><td className="day calendar-day-2015-07-02"><div className="day-contents">2</div></td><td className="day calendar-day-2015-07-03"><div className="day-contents">3</div></td><td className="day calendar-day-2015-07-04"><div className="day-contents">4</div></td></tr><tr><td className="day calendar-day-2015-07-05"><div className="day-contents">5</div></td><td className="day calendar-day-2015-07-06"><div className="day-contents">6</div></td><td className="day calendar-day-2015-07-07"><div className="day-contents">7</div></td><td className="day calendar-day-2015-07-08"><div className="day-contents">8</div></td><td className="day calendar-day-2015-07-09"><div className="day-contents">9</div></td><td className="day calendar-day-2015-07-10"><div className="day-contents">10</div></td><td className="day calendar-day-2015-07-11"><div className="day-contents">11</div></td></tr><tr><td className="day calendar-day-2015-07-12"><div className="day-contents">12</div></td><td className="day calendar-day-2015-07-13"><div className="day-contents">13</div></td><td className="day calendar-day-2015-07-14"><div className="day-contents">14</div></td><td className="day calendar-day-2015-07-15"><div className="day-contents">15</div></td><td className="day calendar-day-2015-07-16"><div className="day-contents">16</div></td><td className="day calendar-day-2015-07-17"><div className="day-contents">17</div></td><td className="day calendar-day-2015-07-18"><div className="day-contents">18</div></td></tr><tr><td className="day calendar-day-2015-07-19"><div className="day-contents">19</div></td><td className="day calendar-day-2015-07-20"><div className="day-contents">20</div></td><td className="day calendar-day-2015-07-21"><div className="day-contents">21</div></td><td className="day calendar-day-2015-07-22"><div className="day-contents">22</div></td><td className="day calendar-day-2015-07-23"><div className="day-contents">23</div></td><td className="day calendar-day-2015-07-24"><div className="day-contents">24</div></td><td className="day calendar-day-2015-07-25"><div className="day-contents">25</div></td></tr><tr><td className="day calendar-day-2015-07-26"><div className="day-contents">26</div></td><td className="day calendar-day-2015-07-27"><div className="day-contents">27</div></td><td className="day calendar-day-2015-07-28"><div className="day-contents">28</div></td><td className="day calendar-day-2015-07-29"><div className="day-contents">29</div></td><td className="day calendar-day-2015-07-30"><div className="day-contents">30</div></td><td className="day calendar-day-2015-07-31"><div className="day-contents">31</div></td><td className="day adjacent-month next-month calendar-day-2015-08-01"><div className="day-contents">1</div></td></tr></tbody></table></div></div>
                        </div>
                        <div className="col-md-4 span_8">
                            <div className="activity_box">
                                <div className="scrollbar" id="style-2">
                                    <div className="activity-row">
                                        <div className="col-xs-1"><i className="fa fa-thumbs-up text-info icon_13"> </i>  </div>
                                        <div className="col-xs-3 activity-img"><img src='images/5.png' className="img-responsive" alt="" /></div>
                                        <div className="col-xs-8 activity-desc">
                                            <h5><a href="#">Lorem Ipsum</a> liked <a href="#">random</a></h5>
                                            <p>Lorem Ipsum is simply dummy</p>
                                            <h6>8:03</h6>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                    <div className="activity-row">
                                        <div className="col-xs-1"><i className="fa fa-comment text-info"></i> </div>
                                        <div className="col-xs-3 activity-img"><img src='images/3.png' className="img-responsive" alt="" /></div>
                                        <div className="col-xs-8 activity-desc">
                                            <h5><a href="#">simply random</a> liked <a href="#">passages</a></h5>
                                            <p>Lorem Ipsum is simply dummy</p>
                                            <h6>8:03</h6>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                    <div className="activity-row">
                                        <div className="col-xs-1"><i className="fa fa-check text-info icon_11"></i></div>
                                        <div className="col-xs-3 activity-img"><img src='images/1.png' className="img-responsive" alt="" /></div>
                                        <div className="col-xs-8 activity-desc">
                                            <h5><a href="#">standard chunk</a> liked <a href="#">model</a></h5>
                                            <p>Lorem Ipsum is simply dummy</p>
                                            <h6>8:03</h6>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                    <div className="activity-row1">
                                        <div className="col-xs-1"><i className="fa fa-user text-info icon_12"></i></div>
                                        <div className="col-xs-3 activity-img"><img src='images/4.png' className="img-responsive" alt="" /></div>
                                        <div className="col-xs-8 activity-desc">
                                            <h5><a href="#">perspiciatis</a> liked <a href="#">donating</a></h5>
                                            <p>Lorem Ipsum is simply dummy</p>
                                            <h6>8:03</h6>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 stats-info">
                            <div className="panel-heading">
                                <h4 className="panel-title">Browser Stats</h4>
                            </div>
                            <div className="panel-body">
                                <ul className="list-unstyled">
                                    <li>Google Chrome<div className="text-success pull-right">12%<i className="fa fa-level-up"></i></div></li>
                                    <li>Firefox<div className="text-success pull-right">15%<i className="fa fa-level-up"></i></div></li>
                                    <li>Internet Explorer<div className="text-success pull-right">18%<i className="fa fa-level-up"></i></div></li>
                                    <li>Safari<div className="text-danger pull-right">17%<i className="fa fa-level-down"></i></div></li>
                                    <li>Opera<div className="text-danger pull-right">10%<i className="fa fa-level-down"></i></div></li>
                                    <li>Mobile &amp; tablet<div className="text-success pull-right">14%<i className="fa fa-level-up"></i></div></li>
                                    <li className="last">Others<div className="text-success pull-right">5%<i className="fa fa-level-up"></i></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>

                    <div className="content_bottom">
                        <div className="col-md-8 span_3">
                            <div className="bs-example1" data-example-id="contextual-table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Column heading</th>
                                            <th>Column heading</th>
                                            <th>Column heading</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="active">
                                            <th scope="row">1</th>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                        </tr>
                                        <tr className="success">
                                            <th scope="row">3</th>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                        </tr>
                                        <tr className="info">
                                            <th scope="row">5</th>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                        </tr>
                                        <tr className="warning">
                                            <th scope="row">7</th>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                        </tr>
                                        <tr className="danger">
                                            <th scope="row">9</th>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-4 span_4">
                            <div className="col_2">
                                <div className="box_1">
                                    <div className="col-md-6 col_1_of_2 span_1_of_2">
                                        <a className="tiles_info">
                                            <div className="tiles-head red1">
                                                <div className="text-center">Orders</div>
                                            </div>
                                            <div className="tiles-body red">10</div>
                                        </a>
                                    </div>
                                    <div className="col-md-6 col_1_of_2 span_1_of_2">
                                        <a className="tiles_info tiles_blue">
                                            <div className="tiles-head tiles_blue1">
                                                <div className="text-center">Sales</div>
                                            </div>
                                            <div className="tiles-body blue1">30</div>
                                        </a>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="box_1">
                                    <div className="col-md-6 col_1_of_2 span_1_of_2">
                                        <a className="tiles_info">
                                            <div className="tiles-head fb1">
                                                <div className="text-center">Facebook</div>
                                            </div>
                                            <div className="tiles-body fb2">10</div>
                                        </a>
                                    </div>
                                    <div className="col-md-6 col_1_of_2 span_1_of_2">
                                        <a className="tiles_info tiles_blue">
                                            <div className="tiles-head tw1">
                                                <div className="text-center">Twitter</div>
                                            </div>
                                            <div className="tiles-body tw2">30</div>
                                        </a>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div className="cloud">
                                <div className="grid-date">
                                    <div className="date">
                                        <p className="date-in">New York</p>
                                        <span className="date-on">°F °C </span>
                                        <div className="clearfix"> </div>
                                    </div>
                                    <h4>30°<i className="fa fa-cloud-upload"> </i></h4>
                                </div>
                                <p className="monday">Monday 10 July</p>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="copy">
                        <p>Copyright &copy; 2015 Modern. All Rights Reserved | Design by <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
                    </div>
                </div>
            </div>
        </>
    )
}