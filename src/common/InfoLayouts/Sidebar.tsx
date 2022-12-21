import { Form, FormLabel, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.svg';
import email from '../../assets/images/email.svg';
import comment from '../../assets/images/comment.svg';
import calling from '../../assets/images/calling.svg';
import camera from '../../assets/images/camera.svg';
import profile from '../../assets/images/profile.svg';
import CustomInput from '../CustomInput';
import { ProgressBar } from 'react-bootstrap';
const Sidebar = () => {
    return (
        <>
        <div className="pi-sidebar">
            <div className="pi-logo">
                <Nav.Link href="#"><img src={logo}/></Nav.Link>
            </div>
            <div className='pi-profile'>
                <div className='pi-avtar-pic'>
                    <img src={profile}/>
                    <div className='pi-file-upload'>
                        <CustomInput type="file" id="input-file" name="profile_image" placeholder="" />
                        <Form.Label for="input-file"><img src={camera}/></Form.Label>
                    </div>
                </div>
                <h3 className='pi-profile-title'>Aaron Young</h3>
                <div className='pi-call-btn'>
                    <Nav.Link href="#"><img src={email}/></Nav.Link>
                    <Nav.Link href="#"><img src={comment}/></Nav.Link>
                    <Nav.Link href="#"><img src={calling}/></Nav.Link>
                </div>
            </div>
            <div className='pi-step-progress'>
                <h4>Application <span>50%</span> Completed</h4>
                <ProgressBar now={50} style={{background:'#ffefee', height:'8px',}} variant="custom" />
            </div>
            <div className='pi-step-list'>
                <ul>
                    <li className='step-fill'>
                        <span></span>
                        <p>Personal details</p>
                    </li>
                    <li className='step-currnt'>
                        <span></span>
                        <p>Select Product</p>
                    </li>
                    <li>
                        <span></span>
                        <p>Company details</p>
                    </li>
                    <li>
                        <span></span>
                        <p>Additional details</p>
                    </li>
                    <li>
                        <span></span>
                        <p>Review & Submit </p>
                    </li>
                </ul>
            </div>
        </div>
        </>

    )
}

export default Sidebar;