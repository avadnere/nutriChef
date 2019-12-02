import styled from "styled-components";

const container = styled.div`
    padding:30px;
    font-family: 'Comfortaa', cursive;
    .frame{
        margin-bottom:20px;
        padding:25px;
        text-align:left;
        text-align:justify;
    }
    .box-head{
        font-weight:500;
        font-size:150%;
        padding:10px;
    }
    .table-div{
        padding:30px;
    }
    .quotes{
        padding:10px;
    }
    .piechart{
        width:80%;
        height:80%;
        align-self:center;
    }
    .custom-pad-div{
        padding:20px;
        text-align:center;
       
    }
    .metric{
        padding:10px;
        border-right:1px solid lightgrey;
        .value{
            font-size:320%;
            font-weight:600;
            text-decoration:underline;
        }
        .unit{
            font-size:100%;
            font-weight:600;
        }
    }
    .bmi-indicator{
        height:100%;
        width:100%;
    }
    .metric-sm{
        padding:10px;
        .value{
            font-size:150%;
            font-weight:600;
        }
        .unit{
            font-size:100%;
            font-weight:600;
        }
    }
`
const CalorieMeterLabel = styled.div`
    padding:10px;
    font-family: 'Comfortaa', cursive;
    font-weight:600;
   
`

export default {
    container,
    CalorieMeterLabel
};