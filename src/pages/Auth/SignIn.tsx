import { Button, Col, Container, Form, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik'
import * as yup from "yup";
import { EMAIL, EMAIL_REG, PASSWORD, PASSWORD_REG, REQUIRED } from "../../constants/main";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../Redux/Actions/AuthActions";

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().max(255).required(REQUIRED).matches(EMAIL_REG, EMAIL),
            // password: yup.string().required(REQUIRED).matches(PASSWORD_REG, PASSWORD)
        }),
        onSubmit: (values, { resetForm }) => {
            console.log('values', values);
            dispatch(LoginAction(values))
        }
    })

    return (
        <>
            <section className="login-section">
                <Container>
                    <div className="auth-box">
                        <h3 className="login-title">Login in</h3>
                        <Form>
                            <Form.Group className="form-group">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name='email'
                                    onChange={loginFormik.handleChange}
                                    onBlur={loginFormik.handleBlur}
                                    placeholder="Enter email"
                                />
                                {loginFormik.errors.email &&
                                    loginFormik.touched.email && (
                                        <span>
                                            {loginFormik.errors.email}
                                        </span>
                                    )}
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='password'
                                    onChange={loginFormik.handleChange}
                                    onBlur={loginFormik.handleBlur}
                                    placeholder="Enter password"
                                />
                                {loginFormik.errors.password &&
                                    loginFormik.touched.password && (
                                        <span>
                                            {loginFormik.errors.password}
                                        </span>
                                    )}
                            </Form.Group>
                            <div className="forgot-link">
                                <Button
                                    className="started-btn"
                                    onClick={() => loginFormik.handleSubmit()}
                                >
                                    Log in
                                </Button>
                                {/* <Nav.Link href="#">Forgot email?</Nav.Link> */}
                            </div>
                            <div className="dont-have-accont"> Don't have an account?
                                <Nav.Link onClick={() => { navigate("/sign-up") }}>Sign up here</Nav.Link>
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

export default SignIn;