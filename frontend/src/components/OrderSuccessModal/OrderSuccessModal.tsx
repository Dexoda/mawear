import React from 'react';
import Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
import { ModalProps } from '@typings/modal';
import '@styles/OrderSuccessModal.css';

const OrderSuccessModal = ({ isOpen, setActiveModal }: ModalProps) => (
  <Modal
    className="order-success-modal"
    isOpen={isOpen}
    onRequestClose={() => setActiveModal(null)}
  >
    <div className="success">
      <h1>Сәтті!</h1>
      <img src="/img/success.gif" />
      <br/>
      <p>
      Сіздің тапсырысыңыз өңдеуге қабылданды, тапсырысты растау үшін жақын арада сізбен байланысады
      </p>
      <RaisedButton
        onClick={() => setActiveModal(null)}
        className="btn"
        label="OK"
        primary={true}
      />
    </div>
  </Modal>
);

export default OrderSuccessModal;
