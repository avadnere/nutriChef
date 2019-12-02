import React, { Component } from 'react';
import Styled from "./styled";
import Authentication from "../Authentication";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";


class Landing extends Component {
  state = {
    hasError: false,
    signInModalShow: false,
  }
  authToggle = () =>{
    const { auth } = this.props;
    if (!auth.uid) {
      this.props.authModalToggle()
    }
    else{
      this.props.history.push("/user")
    }
  }

  signInToggle() {
    this.setState({
      signInModalShow: !this.state.signInModalShow,
    })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <>
        <Styled.headbanner className="jumbotron" >
          <Styled.centerblock className="center-block">
            <h2 className="display-3">You can have your cake and lose weight, too!</h2>
            <h3 className="display-3">Get your customize dieteary plan, inspired from you BMI </h3>
            <button type="button" onClick={this.authToggle} className="btn btn-primary btn-lg promo-head-btn">Start Now</button>
          </Styled.centerblock>
        </Styled.headbanner>
        <Styled.servicecontainer className="container">
          <div className="mx-auto operation-line">
            <p>Now get your dietary cheat sheet and track the calorie intake </p>
            <p>with <Styled.logo>Nutri-Chef</Styled.logo></p>
            <hr />
          </div>
          <Styled.dietPost>
            <div className="row">
              <div className="col-sm-5  col-lg-5 col-md-5">
                <h4 className="display-4">You can't be fat and fast, too; so lift, run, diet and work. </h4>
              </div>
              <div className="col-sm-7  col-lg-7 col-md-7 ">
                <p>
                  People are often shocked when I prescribe some sweets as part of a “balanced diet.”
                  I’m not saying that cake is more nutritious than kale, just that a bit of cake won’t
                  kill you.  And, allowing yourself some of the so called “bad” foods has been proven
                  to keep most people from overindulging in these foods. What is the quickest recipe for
                  binging when dessert rolls around?  Commit to never eat dessert again. Then you’ll
                  really want dessert and you’ll eat too much dessert. Don’t make cake
                  (or your indulgence of choice) forbidden, just watch your portion size and
                  frequency of consumption. You can have something sweet (or savory or fried)
                  each day if you have just a little bit. Enjoy the foods you love with a focus
                  on moderation and the stress of eating will lessen tremendously.
              </p>
              </div>
            </div>


          </Styled.dietPost>

          <div className="row">
            <Styled.dietInfo className="col-sm-12">
              <div className="diet-blog">
                <div className="row ">
                  <div className="col-sm-5 col-lg-5 col-md-5 diet-image-container">
                    <img alt="diet-flyer-1" className="dietary-image" src={require('../../Images/flyer_1.jpg')} />
                  </div>
                  <div className="col-sm-6  col-lg-6 col-md-6 diet-description">
                    <q cite="Steve Maraboli">By choosing healthy over skinny, you are choosing self-love over self-judgement.</q>
                  </div>
                </div>
              </div>
            </Styled.dietInfo>
          </div>
        </Styled.servicecontainer>
        <Styled.midnav className="jumbotron">
          <div className="row">
            <span className="col-sm-12 col-lg-3 col-md-3">About Us</span>
            <span className="col-sm-12 col-lg-3 col-md-3">Advertise</span>
            <span className="col-sm-12 col-lg-3 col-md-3">Blog</span>
            <span className="col-sm-12 col-lg-3 col-md-3">How Nutri-Chef works?</span>
          </div>
        </Styled.midnav>
        <Styled.footer className="container">
          <div className="footer-desc">
            <p>Nutri-Chef is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please contact us.</p>
            <p>Copyright 2019 Nutri-Chef. All Rights Reserved.</p>
          </div>
        </Styled.footer>
        <Authentication show={this.props.authModalShow} onHide={this.props.authModalToggle} />

      </>
    );
  }
}
const mapStateToProps = state =>{
  return{
    authModalShow: state.authModalShow,
    auth:state.firebase.auth
  };
}

const mapDispatchToProps = dispatch => {
  return {
    authModalToggle:() => dispatch({type:"AUTH_MODAL_TOGGLE"})
    
  };
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Landing));