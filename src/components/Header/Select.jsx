import styles from "./Header.module.scss";
import {useTranslation} from "react-i18next";

export const Select = () => {

    const {i18n} = useTranslation();

    const options = [
        {
            label: 'En',
            value: 'en',
        },
        {

            label: 'Ua',
            value: 'ua',
        },
        {

            label: 'Tu',
            value: 'tu',
        },
    ]


    const handlerOnChange = (e) => {
        const {value} = e.target;
        i18n.changeLanguage(value);
        localStorage.setItem('lng', value);
    }


    return (
        <select className={styles['toggle']} onChange={handlerOnChange}>
            {
                options.map((option, index) => (
                    <option
                        key={index}
                        value={option.value}>
                        {option.label}
                    </option>
                ))}
        </select>
    )
}