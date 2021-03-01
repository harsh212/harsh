import React,{Component} from 'react';
class Contact extends Component
{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render()
    {
        return(
            <div className="container-fluid" id="contact">
                <form className="form-page"action="mailto:harsh.307.shuklaaa@gmail.com" method="post" enctype="text/plain" >
                    <div className="form">
                        <div><label for="name"><span className="glyphicon glyphicon-user"></span></label><input type="text" name="name" placeholder="Your Name here. . . " required/></div>
                        <div><label for="email"><span className="glyphicon glyphicon-envelope"></span> </label><input type="email" name="email" placeholder="Your Email here. . ."required/></div>
                        <div><label for="msg"><span className="glyphicon glyphicon-comment"></span> </label><textarea  rows="4" name="message" placeholder="Your Message here. . . "required/></div>
                        <div><button type="submit" ><span className="glyphicon glyphicon-send"> Send </span></button></div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Contact;