import styled from 'styled-components';

const headbanner = styled.div `
    
    background-image:url( ${require("../../Images/banner.jpg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-color:transparent;
    border-radius:0px;
    color:white;
    min-height:30em;
`;
const centerblock = styled.div `
    
    text-align:center;
    margin: auto;
    width: 50%;
    
    h2 {
        font-size: 250%;
        padding:10px;
        font-weight: 300;
        color:#874F34;
        text-shadow:0px 1px black;
        font-family: 'Comfortaa', cursive;
    }
    h3{
        font-size: 150%;
        padding:10px;
        color:#874F34;
        font-wight:bolder;
        font-family: 'Comfortaa', cursive;
      
    }
    .promo-head-btn{
        background-color:#7B3942;
        border-color:transparent;
        font-family: 'Comfortaa', cursive;
        box-shadow:1px 2px 3px 1px grey;
    }
`;
const searchbar = styled.div `
    
    max-width:60%;
    min-width:80px;
    padding:20px;
    
    .search-bar-input {
        padding:15px;
        height: 60px;
        width: 100%;
        color:black!important;
        box-shadow: none;
        border:none;
    }
    
    .search-bar-input:focus{
        box-shadow: none;
        border:none;
      }
`;
const dietInfo = styled.div `
    padding:10px;
    .diet-image-container{
        margin:0px;
    }
    .dietary-image{
        min-height:200px;
        width:100%;
    }
    .diet-description{
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 300px;
        q{
            font-family: 'Cedarville Cursive', cursive;
            font-weight:300;
            font-size:150%;
        }
    }
    .diet-blog{
        margin:50px;
        padding:40px;
        box-shadow:1px 2px 5px 1px;
    }
    
`;
const servicecontainer = styled.div `
    
    padding-bottom:50px;
    .operation-line{
        font-weight:bold;
        text-align:center;
        padding:90px;
        font-family: 'Comfortaa', cursive;
        font-size:2em;
    }
`;
const dietPost = styled.div `
    
    margin:50px;
    
    p{
        padding:10px;
        text-align:justify;
        font-family: 'Comfortaa', cursive;
        font-size:100%;
    }
   
`;
const logo = styled.span `
    
    color:#874F34 !important;
    font-family: 'Pacifico', cursive;
    font-weight: normal;
    font-size:150%;
`;

const service = styled.span `

    text-align:center;
    color:black;
    
    #rent{
        height:50%;
        width:80%;
        min-width:100px;
        min-height:150px;
    }
    #buy{
        height:50%;
        width:45%;
        min-width:100px;
        min-height:150px;
    }
    .service-heading{
        font-weight:500;
        text-shadow: 0.5px 0.1px ;
        font-family: 'DM Serif Display', serif;
        font-size:150%;
        padding:20px;
    }
    .service-description{
        padding:10px;
    }
    .service-btn{
        background-color:white;
        border-color:grey;
        color:#082937;
    }
    .service-btn:hover, .service-btn:active{
        background-color:#082937;
        border-color:#082937;
        color:white;
    }
`;
const servicecapsule = styled.div `
    
    padding:10px;
    
    .row-content{
        box-shadow:2px 2px 10px 0px;
        padding:30px;
    }
`;
const center = styled.div `
    
    display: flex;
    justify-content: center;
`;
const midnav = styled.div `

    text-align:center;
    font-weight:700;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 120%;
    color:black;
    padding:2%;
    background-color:#E8E8E8;
`;
const footer = styled.div `
    
    text-align:center;
    .footer-desc{
        padding:10px;
    }
    .footer-image{
        width:100%; 
    }
`;

export default {
    headbanner,
    centerblock,
    searchbar,
    center,
    logo,
    midnav,
    service,
    servicecapsule,
    servicecontainer,
    footer,
    dietInfo,
    dietPost
};