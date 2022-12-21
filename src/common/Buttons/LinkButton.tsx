import { Button } from 'react-bootstrap';
const LinkButton = (props: any) => {
    return (
        <>
            <Button className="links-btn" onClick={props?.onLinkClick}>{props?.buttonTitle}</Button>
        </>

    )
}

export default LinkButton;