import React, { useState } from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ModalProps } from '@typings/modal';
import { login } from '@api/auth';
import '@styles/LoginModal.css';

const LoginModal = ({ isOpen, onRequestClose, setActiveModal, setUser }: ModalProps): JSX.Element => {
  const [data, setData] = useState({});

  const setFormField = (key: string, value: any) => {
    setData({
      ...data,
      [key]: value,
    });
  }

  const onSubmit = () => {
    login(data).then((res) => {
      setUser && setUser(res.data);
      onRequestClose();
    });
  }

  return (
    <Modal
      className="login-modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="form">
        <h1>Авторизация</h1>
        <TextField
          hintText="Логинді енгізіңіз"
          floatingLabelText="Логин"
          autoFocus
          onChange={({ target }: any) => setFormField('username', target.value)}
        /><br />
        <TextField
          hintText="Құпия сөзді енгізіңіз"
          floatingLabelText="Құпия сөз"
          type="password"
          onChange={({ target }: any) => setFormField('password', target.value)}
        /><br />
        <RaisedButton
          className="btn"
          label="Кіру"
          primary={true}
          onClick={onSubmit}
        />
        <p> <a onClick={() => setActiveModal('register')}>Есептік жазба әлі жоқ па?</a>.</p>
      </div>
    </Modal>
  );
}

export default LoginModal;
