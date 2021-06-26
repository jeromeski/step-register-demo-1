import {Row,Col,Form,Input,Card,Typography, Button} from "antd"
import { useState } from "react";

const {Title} = Typography;

function Names({formData, setForm, navigation, index}) {
  
  const {firstname, lastname, nickname} = formData;
  const {next, previous} = navigation;

  const [invalidNameErr, setInvalidNameErr] = useState(null);


  const validateData = () => {
    setInvalidNameErr('');
    // const isValidName = /^(([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)|^([a-zA-z]{2,}))(?!(\w+[0-9]+))/g
    // if(firstname.length < 3) {
    //   setInvalidNameErr('Name should be at least more than 3 characters')
    //   return
    // }
    // if(!isValidName.test(firstname)){
    //   setInvalidNameErr('There should be no numbers in your name')
    //   return
    // }
    const regex2 = /[A-Za-z\s]{3,}/g;

    const errMessage = firstname.length === 0 
    ? 'Field is empty' : null 
    ? regex2.match(firstname) : 'Invalid Name'; 
    setInvalidNameErr(errMessage)
  }

  console.log(typeof firstname)

  return(
    <Row span={24} justify="center" align="middle" style={{height: "100%"}}>
      <Col xs={12} >
        <div>
          <Row span={24} justify="center">
            <Col xs={24} md={12}>
              <Row span={24}>
                <Col xs={24} md={12}>
                  <Title level={3}>
                    Step 1
                  </Title>
                </Col>
                <Col xs={24}>
                  <Title level={5}>
                    <span>*</span>All fields are mandatory
                  </Title>
                </Col>
              </Row>
              <Form>
                <Card>
                  <Form.Item label="*First Name:" className="styles_fullBasis" >
                    <Input 
                      value={firstname} 
                      name="firstname" 
                      
                      type="text" 
                      onChange={setForm}
                       
                    />
                    <span className="styles_error">{invalidNameErr}</span>
                  </Form.Item>
                  <Form.Item label="*Last Name: " className="styles_fullBasis" >
                    <Input
                      value={lastname} 
                      name="lastname" 
                      
                      type="text" 
                      onChange={setForm} 
                  />
                    <span className="styles_error"></span>
                  </Form.Item>
                  <Form.Item label="*Nick Name: " className="styles_fullBasis" >
                    <Input
                      value={nickname} 
                      name="nickname" 
                      
                      type="text" 
                      onChange={setForm} 
                  />
                    <span className="styles_error"></span>
                  </Form.Item>
                  <Row span={24}>
                    <Col xs={24}>
                      <Button 
                        type="primary"
                        block
                        onClick={() => validateData()}
                      >
                        Next
                      </Button>
                    </Col>
                    <Col xs={24} style={{marginTop: "10px"}}>
                      <Button
                        disabled={index < 1}
                        type="danger"
                        block
                        
                      >
                        Back
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Form>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default Names;