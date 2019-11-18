import styled  from "styled-components";

const SigninForm = styled.div`
    
    padding: 20px 0px 0px 0px;
    background-color:transparent;
    margin-bottom:0px;
    

    .auth-btn{
        background-color:#874F34;
        border-color:#874F34
    }
    .auth-btn:focus{
        background-color:#663b27;
        border-color:#663b27;
    }
    .auth-btn.active{
        background-color:#663b27;
        border-color:#663b27;
    }
    .form-group Input{
        border:none;
        border-bottom:1px solid lightgrey;
        border-radius:0px;
    }
    .auth-btn:hover{
        background-color:#663b27;
        border-color:#663b27;
     
    }
`;
const FormNote = styled.div`
    text-align:center;
    color:#874F34;
    margin:10px 0px 10px 0px;
`;

export default { 
    SigninForm,
    FormNote 
};