import styled  from "styled-components";
import { Form } from 'react-bootstrap'

const AuthenticationForm = styled.div`
    padding: 20px 0px 0px 0px;
    background-color:transparent;
    margin-bottom:0px;

    .auth-btn{
        background-color:#874F34;
        border-color:#874F34;
    }
    .form-group Input{
        border:none;
        border-bottom:1px solid lightgrey;
        border-radius:0px;
    }
`;

const FormText = styled(Form.Text)`
    padding-left:5px;
    margin-bottom:15px;     
    color:red;
`;

const ConfirmationText = styled.div`

    text-align:center;
    margin:10px 0px 10px 0px ;
    font-size:13px;
    font-family:'Comfortaa', cursive;
`;

export default { 
    AuthenticationForm,
    FormText,
    ConfirmationText 
};