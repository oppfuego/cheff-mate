"use client";

import {FaUserCircle, FaRegFileAlt} from "react-icons/fa";
import {HiOutlineLightBulb} from "react-icons/hi";
import {useUser} from "@/context/UserContext";
import styles from "./ProfileHead.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import {LogoutButton} from "@/components/ui/logout-button/LogoutButton";
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";

const ProfileHead = () => {
    const user = useUser();
    const { lang } = useI18n();
    const t = getPageTranslations(lang).profile.head;

    const createdDate = user?.createdAt
        ? new Date(user.createdAt).toISOString().split('T')[0]
        : null;

    return (
        <header className={styles.hero}>
            <div className={styles.heroUserContainer}>
                <FaUserCircle className={styles.avatar}/>
                <div className={styles.text}>
                    <h1>
                        {t.welcomeBack.replace("{firstName}", user?.firstName || "").replace("{lastName}", user?.lastName || "")}
                    </h1>
                    <p>{t.memberSince.replace("{date}", createdDate ?? "—")}</p>
                    <p>{user?.email}</p>
                    <p>{user?.address.country} {user?.address.city}</p>
                </div>
            </div>

            <LogoutButton/>
        </header>
    );
};

export default ProfileHead;
