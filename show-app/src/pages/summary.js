import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container ,Row,Col } from "react-bootstrap";


export const Msummary =()=>{
    let param=useParams("");
    let [show,Setshow]=useState([]);

    useEffect(()=>{
        axios
        .get(` https://api.tvmaze.com/shows/${param.sid}`)
        
        .then((response)=>{
  
            console.log(response.data)
         Setshow(response.data)
    
        })
        .catch((error)=> {
            console.log("something wrong getting data",error);
        })
    },[param])
    console.log(show);
 console.log(param.sid);
 
    return(
    
      <>
      <Container>
        <Row>
            
            <Col md={2} />
            <Col md={8}>
           <Card>
            <Card.Title>
            {show.name}
            </Card.Title>
                <Card.Text>
               <h3>
                Language:  {show.language} <br />
                </h3>   
                <b>
                Description:   </b> {show.summary.replace(/<[^>]*>/g, '')}
                </Card.Text>

           </Card>
            </Col>
        </Row>
      </Container>
      </>
    );
}