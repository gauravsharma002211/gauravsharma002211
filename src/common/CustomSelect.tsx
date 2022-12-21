import { Form } from "react-bootstrap"


const CustomSelect = (props: any) => {
    return (
        <Form.Select aria-label="Default select example">
            {
                props?.data?.map((item: string) => {
                    return (<option>{item}</option>)
                })
            }
        </Form.Select>
    )
}

export default CustomSelect;