import React from 'react';
import numeral from 'numeral';
import Modal from 'react-modal';
import { ICartProduct } from '@typings/state/index';
import { ModalProps } from '@typings/modal';
import Button from '@material-ui/core/Button';
import '@styles/CheckoutModal.css';

const CheckoutModal = ({ cart, isOpen, setActiveModal, makeOrder }: ModalProps): JSX.Element => (
  <Modal
    className="checkout-modal"
    isOpen={isOpen}
    onRequestClose={() => setActiveModal(null)}
  >
    <div className="order">
      <h1>Тапсырысты тексеріңіз</h1>
      <p>
        <i>.</i>
      </p>
      <table>
        <thead>
          <tr>
            <th>Атауы</th>
            <th>Бағасы</th>
            <th>Саны</th>
            <th>Қорытынды</th>
          </tr>
        </thead>
        <tbody>
          {cart!.length && cart!.map((item: ICartProduct) => {
            return (
              <tr key={item.product.info.name} >
                <td>{item.product.info.name}</td>
                <td>{numeral(item.product.info.price*450).format('0,0 ')+'₸'}</td>
                <td>{item.quantity}</td>
                <td>{numeral(item.product.info.price *450* item.quantity!).format('0,0 ')+'₸'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p className="total">
        <b>Қорытынды: </b>
        <span>{numeral(cart!.length && cart!.reduce((acc, item) => acc += item.product.info.price *450* item.quantity!, 0)).format('0,0 ')+'₸'}</span>
      </p>
      <div className="btns">
        <Button
          className="btn"
          onClick={() => setActiveModal(null)}>
          Бас тарту
        </Button>
        <Button
          className="btn"
          onClick={makeOrder}>
          Растау
        </Button>
      </div>
    </div>
  </Modal>
);

export default CheckoutModal;
