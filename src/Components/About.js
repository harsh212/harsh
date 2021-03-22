import React, {Component} from "react";
import './index.css'
import MyImage from './../myimage.jpg';
class TxtRotate {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10)||2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if(this.isDeleting && this.period==1)
            return;
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }

        else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            that.tick();
        }, delta);
    }
}
class About extends Component
{
    componentDidMount() {
        var elements=document.getElementsByClassName('txt-rotate');
    for(let i=0;i<elements.length;i++)
    {
        let toRotate=elements[i].getAttribute('data-rotate');
        let period=elements[i].getAttribute('data-period');
        if(toRotate)
        {
            new TxtRotate(elements[i],JSON.parse(toRotate),period);
        }
    }
    var myname=document.getElementsByClassName('name-rotate');
    for(let i=0;i<myname.length;i++)
    {
        let toRotate=myname[i].getAttribute('data-rotate');
        let period=myname[i].getAttribute('data-period');
        if(toRotate)
        {
            new TxtRotate(myname[i],JSON.parse(toRotate),1);
        }
    }
    }
    render() {
        return(
            <div id='home'>
                <section data-aos='fade-down' data-aos-duration='800'>
                    <img class="img-circle image"  src={MyImage} alt="Harsh Shukla " width="250vw" height="200vw"></img><br/>
                    <a href="https://www.facebook.com/sunita.shukla.336/" target="_blank" class="fa fa-facebook img-circle"></a>
                    <a href="https://twitter.com/Harsh_s212" target="_blank" class="fa fa-twitter"></a>
                    <a href="https://www.instagram.com/harshshukla930/" target="_blank" class="fa fa-instagram"></a>
                    <a href="https://www.linkedin.com/in/harsh-shukla-09b459171/" target="_blank" class="fa fa-linkedin"></a>
                    <h1><b className="name-rotate" data-period='1' data-rotate='["Harsh Shukla "]'></b></h1>
                    <h2> Studying CSE <br/><br/>Jaypee Institue of Information Technology <br/><br/> Noida, Delhi NCR (201309)</h2>
                    <h2>I'm <small><span className='txt-rotate' data-period='2000' data-rotate='["Focused","Passionate","Enthusiastic","Learner","Harsh"]'></span></small></h2>
                    <br/><br/><br/>
                    <p>Scroll down Slowly! ! !</p>
                </section>
            </div>
        );
    }
}
export default About;