import  styled  from "styled-components";

const Container = styled.div`
    padding:20px
    .jumbotron{
        padding:5px;
        background-color:white;
    }
    .card-view{
        margin-bottom:25px;
    }
    .card{
        color:white;
        font-family: 'Comfortaa', cursive;
        font-weight:600;
    }
    .breakfast-card{
        background-image:url(${require("../../Images/card-background-2.jpg")});
    }
    .cal-display{
        font-family: 'Comfortaa', cursive;
    }
    .cal-value{
        font-weight:600;
    }
    .metric-val{
        font-size:15vh;
    }
    .metric-unit{
        font-size:80%;
    }
    .cal-desc{
        font-size:250%:
    }
    .lunch-card{
        background-image:url(${require("../../Images/lunch-bg.jpg")});
    }
    .dinner-card{
        background-image:url(${require("../../Images/dinner-bg.jpg")});
    }
    .week-meal{
        background-image:url(${require("../../Images/whole_meal.jpg")});
    }
    .service-btn{
        background-color:#874F34;
        border-color:transparent;
        font-family: 'Comfortaa', cursive;
    }
    .service-btn:hover, .service-btn:active{
        background-color:#7B3942;
        border-color:transparent;
        font-family: 'Comfortaa', cursive;
    }
    .toggle-btn {
        background-color:transparent ;
        border-color:transparent ;
        text-align:left;
        padding-left:10px;
    }
    .toggle-btn:active {
        background-color:transparent ;
        border-color:transparent ;
        text-align:left;
    }
    .btn-icon{
        height:35px;
        width:35px;
    }
    .left-alignment{
        text-align:left;
    }
`;

export default { Container };