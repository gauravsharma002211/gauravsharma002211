import { Form } from "react-bootstrap"

const CustomLabel = (props: any) => {
    return (
        <Form.Label>{props?.label}</Form.Label>
    )
}

export default CustomLabel;