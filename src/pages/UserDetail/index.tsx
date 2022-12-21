import Footer from "../../common/InfoLayouts/Footer";
import Header from "../../common/InfoLayouts/Header";
import Sidebar from "../../common/InfoLayouts/Sidebar";
import AdditionalDetail from "./AdditionalDetail";
import CompanyDetail from "./CompanyDetail";
import PackageDetail from "./PackageDetail";
import PersonalDetail from "./PersonalDetail";
import Review from "./Review";

const UserDetail = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="pi-content-wrp">
                <PersonalDetail />
                {/* <PackageDetail /> */}
                <CompanyDetail />
                <AdditionalDetail />
                <Review />
            </div>
            <Footer />
        </>
    )
}

export default UserDetail;