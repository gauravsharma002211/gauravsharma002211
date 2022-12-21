import { Button } from 'react-bootstrap';
const CustomButton = (props: any) => {
    return (
        <>
            <Button className="started-btn" onClick={props?.onClick}>{props?.buttonTitle}</Button>
        </>

    )
}

export default CustomButton;