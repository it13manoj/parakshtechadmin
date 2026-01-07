import logo from "../images/logo.png"
export const Header = () => {

    return (
        <>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html" style={{display:"flex"}}><img src= {logo} style={{width:"100%"}} /><span style={{fontSize:"58%",color:"red"}}>ARAKSH</span><span  style={{fontSize:"58%",color:"black"}}>TECH</span></a>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-comments-o"></i><span className="badge">4</span></a>
                    <ul className="dropdown-menu">
                        <li className="dropdown-menu-header">
                            <strong>Messages</strong>
                            <div className="progress thin">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>
                                    <span className="sr-only">40% Complete (success)</span>
                                </div>
                            </div>
                        </li>
                        <li className="avatar">
                            <a href="#">
                                <img src="images/1.png" alt="" />
                                <div>New message</div>
                                <small>1 minute ago</small>
                                <span className="label label-info">NEW</span>
                            </a>
                        </li>
                        <li className="avatar">
                            <a href="#">
                                <img src="images/2.png" alt="" />
                                <div>New message</div>
                                <small>1 minute ago</small>
                                <span className="label label-info">NEW</span>
                            </a>
                        </li>
                        <li className="avatar">
                            <a href="#">
                                <img src="images/3.png" alt="" />
                                <div>New message</div>
                                <small>1 minute ago</small>
                            </a>
                        </li>
                        <li className="avatar">
                            <a href="#">
                                <img src="images/4.png" alt="" />
                                <div>New message</div>
                                <small>1 minute ago</small>
                            </a>
                        </li>
                        <li className="avatar">
                            <a href="#">
                                <img src="images/5.png" alt="" />
                                <div>New message</div>
                                <small>1 minute ago</small>
                            </a>
                        </li>
                        <li className="avatar">
                            <a href="#">
                                <img src="images/pic1.png" alt="" />
                                <div>New message</div>
                                <small>1 minute ago</small>
                            </a>
                        </li>
                        <li className="dropdown-menu-footer text-center">
                            <a href="#">View all messages</a>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle avatar" data-toggle="dropdown"><img src="images/1.png" /><span className="badge" >9</span></a>
                    <ul className="dropdown-menu">
                        <li className="dropdown-menu-header text-center">
                            <strong>Account</strong>
                        </li>
                        <li className="m_2"><a href="#"><i className="fa fa-bell-o"></i> Updates <span className="label label-info">42</span></a></li>
                        <li className="m_2"><a href="#"><i className="fa fa-envelope-o"></i> Messages <span className="label label-success">42</span></a></li>
                        <li className="m_2"><a href="#"><i className="fa fa-tasks"></i> Tasks <span className="label label-danger">42</span></a></li>
                        <li><a href="#"><i className="fa fa-comments"></i> Comments <span className="label label-warning">42</span></a></li>
                        <li className="dropdown-menu-header text-center">
                            <strong>Settings</strong>
                        </li>
                        <li className="m_2"><a href="#"><i className="fa fa-user"></i> Profile</a></li>
                        <li className="m_2"><a href="#"><i className="fa fa-wrench"></i> Settings</a></li>
                        <li className="m_2"><a href="#"><i className="fa fa-usd"></i> Payments <span className="label label-default">42</span></a></li>
                        <li className="m_2"><a href="#"><i className="fa fa-file"></i> Projects <span className="label label-primary">42</span></a></li>
                        <li className="divider"></li>
                        <li className="m_2"><a href="#"><i className="fa fa-shield"></i> Lock Profile</a></li>
                        <li className="m_2"><a href="#"><i className="fa fa-lock"></i> Logout</a></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}