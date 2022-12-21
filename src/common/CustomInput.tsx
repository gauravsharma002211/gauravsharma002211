import { Form } from "react-bootstrap"

const CustomInput = (props: any) => {
    return (
        <Form.Control type={props?.type} name={props?.name} placeholder={props?.placeholder} id={props?.id} disabled={props?.disabled} />
    )
}

export default CustomInput;