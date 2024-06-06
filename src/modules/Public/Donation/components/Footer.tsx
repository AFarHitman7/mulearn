import styles from "./Footer.module.css";
import { footerData } from "../services/footerData";
import { Link } from "react-router-dom";
import {
    RiWhatsappFill,
    RiTwitterFill,
    RiInstagramFill,
    RiLinkedinBoxFill,
    RiYoutubeFill,
    RiFacebookBoxFill
} from "react-icons/ri";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerLogo}>
                    <Link to="https://mulearn.org/">
                        <img
                            src="https://i.ibb.co/FDQ2M4n/Learn.png"
                            alt="mulearn"
                        />
                    </Link>
                </div>
                {footerData.map((data, index) => {
                    return (
                        <div className={styles.footerSection} key={index}>
                            <h3 className={styles.title}>{data.name}</h3>
                            <div className={styles.links}>
                                {data.links.map(link => {
                                    return (
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={link.url}
                                            key={link.name}
                                        >
                                            {link.name}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <hr />
            <div
                className={[styles.container, styles.centerContainer].join(" ")}
            >
                <div className={styles.socialMedia}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="http://mulearn.org/whatsapp-community"
                    >
                        <RiWhatsappFill />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="http://twitter.com/GtechMulearn"
                    >
                        <RiTwitterFill />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="http://www.instagram.com/gtechmulearn/"
                    >
                        <RiInstagramFill />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="http://www.linkedin.com/company/gtechmulearn/"
                    >
                        <RiLinkedinBoxFill />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.youtube.com/c/mulearn"
                    >
                        <RiYoutubeFill />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="http://www.facebook.com/gtechmulearn"
                    >
                        <RiFacebookBoxFill />
                    </a>
                </div>
                <div className={styles.legal}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://mulearn.org/privacypolicy"
                    >
                        <span>Privacy Policy</span>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="./donation/refund"
                    >
                        <span>Refund Policy</span>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://mulearn.org/termsandconditions"
                    >
                        <span>Terms and Conditions</span>
                    </a>
                </div>
                <div className={styles.copyRight}>
                    <span>© Copyright 2023, All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
}
