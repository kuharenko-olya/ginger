import {Component} from "react";
import styles from "./OrderTable.module.scss";
import {Modal} from "./Modal/Modal";
import {ButtonRemoveView} from "./ButtonRemove/ButtonRemoveView";


export class OrderTableView extends Component {

    render() {
        const {
            isOpen,
            activeRow,
            data,
            handlerAddData,
            toggleTable,
            doubleClick,
            handlerImageUnloader,
            handlerRemoveElement,
            handlerKeyDown,
            tableRef
        } = this.props;

        const image = 'invalid path';

        return (
            <section className={styles['table-section']}>
                <h2>Orders</h2>
                <div className={styles['button-container']}>
                    <Modal handlerAddData={handlerAddData}/>
                </div>
                <div className={styles.table}
                     ref={tableRef}
                     onKeyDown={handlerKeyDown}
                >
                    <div className={styles.thead}>
                        <div>ID</div>
                        <div>Customer</div>
                    </div>
                    <div className={styles.tbody}>
                        <div>
                            {
                                data.map((user) => (
                                    <div className={styles.div} key={user.id}>
                                        <div onClick={() => toggleTable(user.id)}
                                             onDoubleClick={doubleClick}
                                             className={`${styles.row} 
                                             ${user.id === activeRow ? styles.active : ''}`}
                                        >
                                            <div className={styles['cell-id']}>{user.id}</div>
                                            <div className={styles['cell-customer']}>{user.customer}</div>
                                            <div className={styles['button-remove']}>
                                                <ButtonRemoveView
                                                    click={() => handlerRemoveElement(user.id)}/>
                                            </div>
                                        </div>
                                        <div className={`${styles['inner-table']}
                                        ${user.id === activeRow && isOpen ? styles['customer-info'] : styles.hidden}`}
                                        >
                                            <div className={styles.thead}>
                                                <div>Date</div>
                                                <div>Product</div>
                                                <div>Amount</div>
                                                <div>Price</div>
                                            </div>
                                            <div className={styles.tbody}>
                                                {user['products'].map((product) => (
                                                    <div key={product.id} className={styles['inner-row']}>
                                                        <div className={styles.cell}>2023-02-14</div>
                                                        <div className={styles.cell}>{product.name}</div>
                                                        <div className={styles.cell}>{product.amount}</div>
                                                        <div className={styles.cell}>{product.currency}
                                                            {product.price}
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className={styles.total}>
                                                    <div className={styles['total-price']}>Total Price</div>
                                                    <div className={styles.price}>{user.totalPriceCurrency}
                                                        {user.totalPrice}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <img onError={handlerImageUnloader}
                     src={image} alt="zephyr"/>
            </section>
        )
    }
}