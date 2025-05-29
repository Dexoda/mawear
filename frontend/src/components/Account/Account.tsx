import React, { useState, useEffect } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { IUser, IOrder } from '@typings/state/index';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import AccountModal from '../AccountModal';
import '@styles/Account.css';

export interface Props {
  user: IUser;
  getUser: () => void;
  editUser: (data: Record<string, any>) => void;
}

const Account = ({ user, getUser }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getUser();
  }, [modalOpen]);

  return (
    <div className="account-container">
      {!user ? (
        <div className="loader">
         <img src="/img/loader.gif" />
         <h1>Жүктеу...</h1>
       </div>
      ) : (
        <>
          <h1>Сіздің есептік жазбаңыз</h1>
          <div className="account">
            <div className="account-info">
              <div className="top">
                <h2>Жеке кабинет</h2>
                <IconButton
                  color="secondary"
                  aria-label="Edit"
                  onClick={() => setModalOpen(true)}>
                  <EditIcon />
                </IconButton>
              </div>
              <Divider />
              <p><b>Аты: </b>{user.username}</p>
              <p><b>E-mail: </b>{user.email}</p>
              <p><b>Жеткізу мекенжайы: </b>{user.address}</p>
              <p><b>Телефон: </b>{user.phone}</p>
            </div>
            <div className="account-history">
              <h2>Тапсырыс тарихы</h2>
              <Divider />
              <div className="orders">
                {user.orders.length ?
                  <table>
                    <thead>
                      <tr>
                        <th>Құрылған күні</th>
                        <th>Атауы</th>
                        <th>Бағасы</th>
                        <th>Саны</th>
                        <th>Қорытынды</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.orders.map((order: IOrder) => (
                        <tr key={order.name}>
                          <td>{moment(order.dateCreated).format('ll')}</td>
                          <td>{order.name}</td>
                          <td>{(numeral( parseInt(order.price)*450)).format('0,0')+'₸'}</td>
                          <td>{order.quantity}</td>
                          <td>{numeral(parseInt(order.price)*450 * parseInt(order.quantity)).format('0,0')+'₸'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table> :
                  <h1>Тарих бос.</h1>
                }
              </div>
            </div>
          </div>
          <AccountModal
            user={user}
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
          />
        </>
      )}
    </div>
  );
};

export default Account;
