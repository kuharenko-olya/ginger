import styles from './Contacts.module.scss';
import {ReactComponent as Viber} from "../../assets/svg/viber.svg";
import {ReactComponent as Telegram} from "../../assets/svg/telegram.svg";
import {ReactComponent as Phone} from "../../assets/svg/phone.svg";
import {ReactComponent as Map} from "../../assets/svg/map.svg";


export const ContactsView = () => {
    return (
        <>
            <h2 className={styles.title}>Contacts</h2>
            <div className={styles['contacts']}>
                <div className={styles.row}>
                    <div className={styles.icon}>
                        <Viber/>
                    </div>
                    <a className={styles.contact} href="tel:066-333-94-74">(066) 333 94 74</a>
                </div>
                <div className={styles.row}>
                    <div className={styles.icon}>
                        <Telegram/>
                    </div>
                    <a className={styles.contact} href="tel:066-333-94-74">(068) 847 34 95</a>
                </div>
                <div className={styles.row}>
                    <div className={styles.icon}>
                        <Phone/>
                    </div>
                    <div className={styles.contact}>
                        <a className={styles.contact} href="tel:099-347-92-64">(099) 347 92 64</a>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles['icon-map']}>
                        <Map/>
                    </div>
                    <span className={styles.contact}>Kyiv, st. Shevchenko, 24</span>
                </div>
            </div>
        </>
    )
}