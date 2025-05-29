import React, { useState } from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ModalProps } from '@typings/modal';
import { register } from '@api/auth';
import '@styles/RegisterModal.css';

const RegisterModal = ({ isOpen, onRequestClose, setActiveModal, setUser }: ModalProps) => {
  const [data, setData] = useState({});

  const setFormField = (key: string, value: any) => {
    setData({
      ...data,
      [key]: value,
    });
  }

  const onSubmit = () => {
    register(data).then((res) => {
      setUser && setUser(res.data);
      onRequestClose();
    });
  }

  return (
    <Modal
      className="register-modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="form">
        <h1>Тіркеу</h1>
        <TextField
          hintText="Атын енгізіңіз"
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
        <TextField
          hintText="E-mail енгізіңіз"
          floatingLabelText="E-mail"
          type="email"
          onChange={({ target }: any) => setFormField('email', target.value)}
        /><br />
        <TextField
          hintText="Мекенжайды Енгізіңіз"
          floatingLabelText="Мекен-жайы"
          onChange={({ target }: any) => setFormField('address', target.value)}
        /><br />
        <TextField
          hintText="Телефон нөмірін енгізіңіз"
          floatingLabelText="Телефон нөмірі"
          onChange={({ target }: any) => setFormField('phone', target.value)}
        /><br />
        <RaisedButton
          className="btn"
          label="Тіркелу"
          primary={true}
          onClick={onSubmit}
        />
        <p>Есептік жазба бар ма? <a onClick={() => setActiveModal('login')}>Кіру </a>.</p>
      </div>
    </Modal>
  );
}

export default RegisterModal;
