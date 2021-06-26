import {Row,Col,Form,Input,Card,Typography, Button} from "antd"

const {Title} = Typography;

function Address({formData, setForm, navigation}) {
  const {address, city, state, zip} = formData;
  const {next, previous} = navigation;

  console.log(navigation)
  return(
    <Row span={24} justify="center" align="middle" style={{height: "100%"}}>
      <Col xs={13} >
        <div>
          <Row span={24} justify="center">
            <Col xs={24} md={12}>
              <Row span={24}>
                <Col xs={24} md={12}>
                  <Title level={3}>
                    Step 2
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
                  <Form.Item label="*Address: ">
                    <Input 
                      value={address} 
                      name="address" 
                      className="styles_fullBasis" 
                      type="text" 
                      onChange={setForm} 
                    />
                    <span className="styles_error"></span>
                  </Form.Item>
                  <Form.Item label="*State: ">
                    <Input
                      value={state} 
                      name="state" 
                      className="styles_fullBasis" 
                      type="text" 
                      onChange={setForm} 
                  />
                    <span className="styles_error"></span>
                  </Form.Item>
                  <Form.Item label="*City: ">
                    <Input
                      value={city} 
                      name="city" 
                      className="styles_fullBasis" 
                      type="text" 
                      onChange={setForm} 
                  />
                    <span className="styles_error"></span>
                  </Form.Item>
                  <Form.Item label="*Zip: ">
                    <Input
                      value={zip} 
                      name="zip" 
                      className="styles_fullWidth" 
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
                        onClick={() => next()}
                      >
                        Next
                      </Button>
                    </Col>
                    <Col xs={24} style={{marginTop: "10px"}}>
                      <Button 
                        type="danger"
                        block
                        onClick={() => previous()}
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

export default Address;