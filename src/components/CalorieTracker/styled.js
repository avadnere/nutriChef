import  styled  from "styled-components";

const Container = styled.div`
    padding:20px;
    text-align:left;
    font-family: 'Comfortaa', cursive;
    h2{
        font-size:28px;
        font-weight:600;
    }
    .circular-bar{
        max-height:50vh;
    }
    .progress-tracker{
        margin:20px;
        
    }
    .custom-primary-btn{
        background-color:#874F34;
        border-color:#874F34;
    }
    .pull-right{
        text-align:right;
        Button{
            margin:5px;
        }
        .primary{
            background-color:#874F34;
        }
        .secondary{
            background-color:grey;
        }
    }
`
export default { Container };