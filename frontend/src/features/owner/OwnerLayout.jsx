import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import CustomNavLink from "../../ui/CustomNavLink";
import {  HiHome, HiOutlineViewGrid } from "react-icons/hi";

function OwnerLayout() {
    return (
        <AppLayout>
            <Sidebar>
                
                <CustomNavLink to="dashboard">
                    <HiHome />
                    <span>داشبورد</span>
                </CustomNavLink>
                <CustomNavLink to="projects">
                    <HiOutlineViewGrid />
                    <span>پروژه ها</span>
                </CustomNavLink>

            </Sidebar>
        </AppLayout>
    )
}
export default OwnerLayout;