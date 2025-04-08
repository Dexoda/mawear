import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import { IUser, ICatalogProduct } from '@typings/state/index';
import { createCart } from '@api/cart';
import '@styles/ProductDetails.css';

export interface Props {
  loggedUser: IUser;
  product: ICatalogProduct;
}

const ProductDetails = ({ loggedUser, product }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setQuantity(parseInt(value));
  }

  const addToCart = async () => {
    loggedUser && await createCart({
      user: loggedUser.id,
      product: product._id,
      quantity,
    });

    setSnackbarOpen(true);
  }

  const { info } = product;

  return (
    <div className="product-details-container">
      <h1>{info.name}</h1>
      <div className="product-details">
        <div className="product-image">
          <img src={info.photo} />
        </div>
        <div className="product-info">
          <table>
            <tr>
              <th>Атауы</th>
              <td>{info.name}</td>
            </tr>
            <tr>
              <th>Өлшемі</th>
              <td>{info.dimensions}</td>
            </tr>
            <tr>
              <th>Ені</th>
              <td>{info.displaySize}</td>
            </tr>
            {/* <tr>
              <th>Тип дисплея</th>
              <td>{info.displayType}</td>
            </tr> */}
            <tr>
              <th>Ұзындығы</th>
              <td>{info.weight}</td>
            </tr>
            {/* <tr>
              <th>Разрешение экрана</th>
              <td>{info.displayResolution}</td>
            </tr> */}
            <tr>
              <th>Киім түрі</th>
              <td>{info.os}</td>
            </tr>
            {/* <tr>
              <th>Процессор</th>
              <td>{info.cpu}</td>
            </tr> */}
            <tr>
              <th>Жас</th>
              <td>{info.internalMemory}</td>
            </tr>
            {/* <tr>
              <th>ОЗУ</th>
              <td>{info.ram}</td>
            </tr>
            <tr>
              <th>Камера</th>
              <td>{info.camera}</td>
            </tr>
            <tr>
              <th>Батарея</th>
              <td>{info.batery}</td>
            </tr> */}
            <tr>
              <th>Түсі</th>
              <td>{info.color}</td>
            </tr>
          </table>
          <Snackbar
            open={snackbarOpen}
            message={loggedUser ? 'Өнім себетке қосылды.' : 'Өзара әрекеттесу үшін тіркелгіге кіріңіз!'}
            autoHideDuration={4000}
            bodyStyle={loggedUser ? { 'background': '#64DD17' } : { 'background': '#F44336' }}
          />
        </div>
      </div>
      <div className="product-handle">
        <div className="left">
          <RaisedButton
            containerElement={<Link to="/" />}
            className="btn"
            label="Каталогқа оралу"
            labelPosition="after"
            secondary={true}
            icon={<KeyboardArrowLeft />}
          />
        </div>
        <div className="right">
          <div className="price">
            <span className="price-text">Бағасы: </span>
            <span className="price-num">{numeral(info.price*450).format('0,0 ')+'₸'}</span>
          </div>
          <div className="quantity">
            <span className="price-text">Саны: </span>
            <span><input type="number" value={quantity} min="1" max="5" onChange={onQuantityChange} /></span>
          </div>
          <div className="btn">
            <RaisedButton
              onClick={addToCart}
              label="Сатып алу"
              labelPosition="before"
              primary={true}
              icon={<AddShoppingCart />}
            />
          </div>
          </div>
      </div>
    </div>
  );
}

export default ProductDetails;