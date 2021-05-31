import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Carousel } from "antd";
import { Routes } from "../../constants/routes";
import "./Home.css";

class Home extends React.Component {
  onRedirectHandler = () => {
    this.props.history.push(Routes.SIGNUP);
  };

  render() {
    const { isAuthenticated } = this.props;
    
    return (
      <div className="wrapper wrapper--home d-flex space-between align-items-center">
        <div>
          <h1 className="title">
          Smart Salon 
            </h1>

            
            <h3 className="title">
          The Place Where Beauty Begins...
            
            <h3 className="title"></h3>
           We Offer Services: Cuts, Colour Specialists, Hair, Waxing for Men & Women
            </h3>
            
            <h3 className="title">Contact Us: 
            Anshul Bahadure,  
            Mob no. 8275299090
            <h3 className="title"></h3>  
            Vaishnavi Tambe, 
            Mob no. 9546780769     

            <h3 className="title"></h3>
            Address: Smart Salon, Near Panchali Hotel, JM Road, Shivajinagar, Pune
            </h3>
            
          {isAuthenticated ? (
            <Link to="/appointment">
              <Button type="primary" size={"large"} className="button-main">
                Book an appointment
              </Button>
            </Link>
          ) : (
            <Button
              type="primary"
              size={"large"}
              className="button-main"
              onClick={this.onRedirectHandler}
            >
              Sign up for booking
            </Button>
          )}
        </div>
        <Carousel dotPosition="bottom" autoplay="true">
          <div className="slide">
            <img
              src="/images/stylist-2.png"
              alt="Anshul is a cutting Specialist"
            ></img>
            <h3>Anshul</h3>
            <div>Cutting Specialist</div>
          </div>
          <div>
            <img
              src="/images/stylist-3.jpg"
              alt="vaishnavi is a Makeup Artist and a Facial Waxing Specialist"
            ></img>
            <h3>Vaishnavi</h3>
            <div>
              Makeup Artist,
              <br /> Facial Waxing Specialist
            </div>
          </div>
          <div>
            <img
              src="/images/stylist-1.jpg"
              alt="Anna is a Master Colorist"
            ></img>
            <h3>Anna</h3>
            <div>Master Colorist</div>
          </div>
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Home);
