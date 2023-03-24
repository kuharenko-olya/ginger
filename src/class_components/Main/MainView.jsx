import {Component} from "react";
import styles from "./Main.module.scss";
import {ReactComponent as Logo} from "../../assets/svg/Logo-dark.svg";
import ButtonView from "../Button/ButtonView";
import {ReactComponent as IconInstagram} from "../../assets/svg/instagram.svg";
import CardView from "../Card/CardView";
import {GalleryLoader} from "../Gallery/GalleryLoader";

export default class MainView extends Component {

    render() {
        const {data} = this.props
        return (
            <div className={styles.container}>
                <section className={styles.jumbotron}>
                    <div className={styles.subtitle}>
                        <a className={styles.logo} href='#'>
                            <Logo/>
                        </a>
                        <p className={styles.description}>Try and choose your flavor of delicate zephyr on
                            Instagram </p>
                        <ButtonView text={'Subscribe'}>
                            <IconInstagram/>
                        </ButtonView>
                    </div>
                    <div className={styles.strawberry}></div>
                    <div className={styles['background-zephir']}></div>
                </section>
                <div className={styles['second-strawberry']}></div>
                <div className={styles.background}></div>

                <section id={styles['cards']}>
                    <div id={'menu'} className={styles.wrapper}>
                        {data.map(card => (
                            <CardView
                                key={card.id}
                                card={card}
                            />
                        ))}
                    </div>
                </section>

                <section id={styles['gallery']}>
                    <div id='gallery'>
                        <GalleryLoader/>
                    </div>
                </section>
            </div>
        )
    }
}