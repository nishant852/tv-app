import { useEffect, useState } from "react";
import { ReactDOM } from "react";
import axios from "axios"
import { Button, Container, Form ,Card ,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";



function Tvshow (){
    let [shows,Setshows]=useState([])
    // const [show,Setshow]=useState("");
useEffect(()=>{
    axios
    .get("https://api.tvmaze.com/search/shows?q=all")
    .then((response)=>{
      // console.log(response.data[0].show)
    // console.log(response.data[0].show)
      Setshows(response.data)
     //  console.log(shows[0].show)

    })
    .catch((error)=> {
        console.log("something wrong getting data",error);
    })
},[])
return(
    <Container>

    <Row style={{ padding: "50px",rowGap:"50px" }}>
    {shows.map((val,index)=>(
         <Col md={3} key={index} >
 
    <Card style={{ width: '100%',height:"400px" }}>
    <Card.Body style={{ height:"100%" }}>

     <Card.Img src={val.show.image.medium} 
     style={{width:'100%',height:"60%"}} /> 

      <Card.Text style={{width:"100%"}}>

     {val.show.name} <br />
        
   Rating:  {val.show.rating.average} <br />

   Runtime:{val.show.runtime} <br />

    

     </Card.Text>
     <Link to={`/show/${val.show.id}`}>
     <Button>Details</Button>
</Link>
    </Card.Body>
    
  </Card>
  </Col>
    ))}
 </Row>
    </Container>
);
}
export default Tvshow;