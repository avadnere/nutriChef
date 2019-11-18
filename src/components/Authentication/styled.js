import  styled  from "styled-components";
import { Modal } from 'react-bootstrap';

const AuthenticationModal = styled.div`
    .modal-body{
        padding-bottom:2px;
    }
`;
const ModalHeader = styled(Modal.Header)`
    
    border-bottom:none;
    padding-bottom:1px;

    .title{
        font-family:'Comfortaa', cursive;
        font-weight: bolder;
    }
`;
const ModalBody = styled(Modal.Body)`

    padding-bottom:2px;
    .authenticationTabs  .nav-link.active{
        color:#874F34 !important;
        background-color:transparent;
        font-family:'Comfortaa', cursive;
        border-radius:0px;
    }
    .authenticationTabs  .nav-link{
        color:lightgrey !important;
        border-radius:0px;
        background-color:transparent;
    }
`;

const Logo = styled.span`
    
    color:#874F34 !important;
    font-family: 'Pacifico', cursive;
    font-weight: normal;
    font-size:150%;
`;

const Footer = styled.div`

    width:100%;  
    text-align:center;
    font-size:15px;
    font-family:'Comfortaa', cursive;

    .social-media-btn{
        font-size:15px;
    }

`
const authError = styled.div`
    font-size:80%;
    color:red;
    padding:0px;
    text-align:center;
    font-family:'Comfortaa', cursive;
    margin:0px !important;
    
    p{
        padding:0px;
        font-family:'Comfortaa', cursive;
        margin:0px !important;
    }
`
export default { 
    AuthenticationModal,
    Logo,
    Footer,
    ModalHeader,
    ModalBody,
    authError
};