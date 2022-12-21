import { Button } from 'react-bootstrap';
const OrangeButton = (props: any) => {
    return (
        <>
            <Button className="orange-btn">{props?.buttonName}</Button>
        </>

    )
}

export default OrangeButton;