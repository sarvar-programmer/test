import {  Col, Row, Button,Container } from 'react-bootstrap';
import '../../css/contact.css'

export default function Contact(){
        return(
            <>
             <Container className='location'>
          <Row>
            <Col md={6} className="library_location">

            </Col>
            <Col md={4} className='right_part'>
              <div className="information_input">
                <div className='info_part'>
                <p className="text-dark information">
                  Savollaringiz bo’lsa qoldiring
                </p>
                </div>
                <p className="text-white reference_point">
                  Biz siz bilan bog’lanamiz
                </p>
                 <input type="text" placeholder="Ismingizni kiriting" className="name_inp"/>
                <input type="text" placeholder="+998-(90)-123 -45-56" className="phone_inp" />
                <input type="text" placeholder="Savolingizni kiriting" className="question_inp" />
               <Button className="btn-success send_btn">Jo'natish</Button>
              </div>
            </Col>
          </Row>
        </Container>
            </>
        )
    }
