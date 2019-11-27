import styled from "styled-components";
import { Modal } from 'react-bootstrap';

const Container = styled.div`
   
    .custom-modal{
        .modal-body{
            padding-bottom:2px;
        }
        .modal-title{
            padding:15px;
        }
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
    
`;
const Footer = styled.div`

    width:100%;  
    text-align:center;
    font-size:15px;
    font-family:'Comfortaa', cursive;

`
export default { 
    Container,
    ModalHeader,
    ModalBody,
    Footer

};