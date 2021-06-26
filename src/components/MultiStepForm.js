import {useForm, useStep} from "react-hooks-helper";
import Names from "./step-form/Names";
import Address from "./step-form/Address";
import Contact from "./step-form/Contact";
import Review from "./step-form/Review";
import Submit from "./step-form/Submit";

const defaultData = {
  firstname: "",
  lastname: "",
  nickname: ""
}

const steps = [
  {id: "names"},
  {id: "address"},
  {id: "contact"},
  {id: "review"},
  {id: "submit"},
]

function MultiStepForm() {
  const [formData,setForm] = useForm(defaultData);
  const {step, navigation, index} = useStep({
    steps,
    initialStep: 0,
  })

  console.log(index)

  const props = {formData, setForm, navigation, index}

  console.log(step)

  switch(step.id) {
    case "names":
      return <Names {...props} />
    
    case "address":
      return <Address {...props} />

    case "contact":
      return <Contact {...props} />
    
    case "review":
      return <Review {...props} />
    
    case "submit":
      return <Submit {...props} />

    default:
      return <Names {...props} />
  }
}

export default MultiStepForm;
