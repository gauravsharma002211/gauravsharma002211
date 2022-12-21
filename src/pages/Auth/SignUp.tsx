import { Button, Container, Form, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="login-section">
                <Container>
                    <div className="auth-box">
                        <h3 className="login-title">Sign Up</h3>
                        <Form>
                            <Form.Group className="form-group" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <div className="forgot-link">
                                <Button className="started-btn">Continue</Button>
                            </div>
                            <div className="dont-have-accont"> Already have an account?
                                <Nav.Link onClick={() => { navigate("/sign-in") }}>Sign in here</Nav.Link>
                            </div>
                        </Form>
                    </div>
                    <div className="small-desc">
                        <p>Sharing your email address enables us to create a basic profile that will make it easier to return to where you left off. Don’t worry, your privacy is very important to us and we won’t share your email address with anyone. <Nav.Link href="#">Learn more</Nav.Link></p>
                    </div>
                </Container>
            </section>
        </>

    )
}

export default SignUp;