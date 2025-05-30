import React, { useState } from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { getUser, editUser } from '@api/user';
import { IUser } from '@typings/state/index';

import '@styles/AccountModal.css';

interface Props {
  user: IUser;
  isOpen: boolean;
  onRequestClose: () => void;
}

interface State {
  email: string;
  address: string;
  phone: string;
}

const AccountModal = ({ user, isOpen, onRequestClose }: Props) => {
  const [userData, setUserData] = useState<State>({ ...user });

  const onInputChange = (key: string, value: any) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  }

  const onEditUser = async () => {
    await editUser(userData);
    await getUser();
    onRequestClose();
  }

  return (
    <Modal
      className="account-modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="form">
        <h1>Есептік жазбаны өңдеу</h1>
        <TextField
          id="email"
          hintText="E-mail енгізіңіз"
          floatingLabelText="E-mail"
          name="email"
          value={userData.email}
          onChange={({ target }: any) => onInputChange('email', target.value)}
        /><br />
        <TextField
          id="address"
          hintText="Мекенжайды Енгізіңіз"
          floatingLabelText="Жеткізу мекенжайы"
          name="address"
          value={userData.address}
          onChange={({ target }: any) => onInputChange('address', target.value)}
        /><br />
        <TextField
          id="phone"
          hintText="Телефон нөмірін енгізіңіз"
          floatingLabelText="Телефон нөмірі"
          name="phone"
          value={userData.phone}
          onChange={({ target }: any) => onInputChange('phone', target.value)}
        /><br />
        <RaisedButton
          className="btn"
          label=" Сақтау"
          primary={true}
          onClick={onEditUser}
        />
      </div>
    </Modal>
  );
}

export default AccountModal;
