import React, { useEffect, useState } from "react";
import styles from "./SideNavBar.module.css";
import { MdNotifications, MdNotificationAdd } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import dpm from "../assets/images/dpm.webp";
import { fetchLocalStorage } from "@/MuLearnServices/common_functions";
import { Popover, PopoverTrigger, Button, PopoverContent } from "@chakra-ui/react";
import { Notification as NotificationProps, getNotifications } from "./api";
import NotificationTab from "./Notification";
import { useToast } from "@chakra-ui/react";
import { SiDiscord } from "react-icons/si";

const TopNavBar = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState<string | null>(null);
    const [notificationList, setNotificationList] = useState<NotificationProps[]>([]);
    const toast = useToast()
    const notificationStyle = {
        backgroundColor: '#ffffff00',
        _hover: {
            backgroundColor: '#ffffff00'
        },
        _active: {
            backgroundColor: '#eee'
        },
        aspectRatio: '1/1', borderRadius: '15px',
        fontSize: '30px',
        width: '50px',
        padding: '10px',
    }
    useEffect(() => {
        const userInfo = fetchLocalStorage<UserInfo>("userInfo");

        if (userInfo) {
            setName(userInfo?.first_name);
            setProfilePic(userInfo?.profile_pic || null);
        }
    }, []);
    return (
        <>
            <div id="top_nav" className={styles.top_nav}>
                <div className={styles.nav}>
                    <div className={styles.nav_items}>
                        <b className={styles.greetings}>Hello, {name} 👋</b>
                        <div className={styles.mulearn_brand2}></div>
                        <div className={styles.menu}>
                            <a href="http://discord.mulearn.org" target="_blank" rel="noopener noreferrer">
                                <SiDiscord size={30} />
                            </a>
                            {/* <i className="fi fi-sr-settings"></i> */}
                            <Popover placement="bottom-end">
                                <PopoverTrigger >
                                    <Button onClick={() => getNotifications(setNotificationList)} {...notificationStyle}>{notificationList.length === 0 ? <MdNotifications size={50} /> : <MdNotificationAdd />}</Button>
                                </PopoverTrigger>
                                <PopoverContent style={{
                                    background: "transparent",
                                    border: "none",
                                }} >
                                    <NotificationTab notificationList={notificationList} setNotificationList={setNotificationList} />
                                </PopoverContent>
                            </Popover>

                            <div className={styles.profile}>
                                <img
                                    onClick={() => {
                                        navigate("/dashboard/profile");
                                    }}
                                    src={profilePic ? profilePic : dpm}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    );
};



export default TopNavBar;
