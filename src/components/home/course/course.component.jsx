import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './course.component.css';

export function CourseDetails(){
    return(
        <div>
                <h2 className="text-center mt-3" style={{color:"#f07857"}}>Course Details</h2>
            <div className='row mt-5'>
                <div className='col-1'></div>
                <div className='col-9' style={{display:"flex", marginTop:"100px"}}>
                    <div  style={{ marginRight:"20px"}}>
                        <Card style={{ width: '16rem' }}>
         
                            <Card.Body>
                                <Card.Title>Python</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Click Here</Button>
                            </Card.Body>
                        </Card>
                    </div>
                   
                    <div  style={{ marginRight:"20px"}}>
                        <Card style={{ width: '16rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>HTML/CSS/JS</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Click Here</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div  style={{ marginRight:"20px"}}>
                        <Card style={{ width: '16rem' }}>
                      
                            <Card.Body>
                                <Card.Title>ReactJS</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Click Here</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div  style={{ marginRight:"20px"}}>
                        <Card style={{ width: '16rem' }}>
                         
                            <Card.Body>
                                <Card.Title>Angular</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Click Here</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                
                <div className='col-2'></div>
            </div>

            <div className='row mb-5'>
                <div className='col-1'></div>
                <div className='col-9' style={{display:"flex", marginTop:"100px"}}>
                    <div  style={{ marginRight:"20px"}}>
                        <Card style={{ width: '16rem' }}>
         
                            <Card.Body>
                                <Card.Title>C / C++ / C#</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Click Here</Button>
                            </Card.Body>
                        </Card>
                    </div>
                   
                    <div  style={{ marginRight:"20px"}}>
                        <Card style={{ width: '16rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>Dot Net</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Click Here</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div  style={{ marginRight:"20px"}}>
                        <Card style={{ width: '16rem' }}>
                      
                            <Card.Body>
                                <Card.Title>DB - SQL / NoSQL</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Click Here</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div  style={{ marginRight:"20px"}}>
                        <Card style={{ width: '16rem' }}>
                         
                            <Card.Body>
                                <Card.Title>QA / Testing</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Click Here</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                
                <div className='col-2'></div>
            </div>
        </div>
    
  );
}
