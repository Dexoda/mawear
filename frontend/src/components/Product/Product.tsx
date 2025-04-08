import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import { ICatalogProduct } from '@typings/state/index'
import '@styles/Product.css';

interface Props {
  key: string;
  item: ICatalogProduct;
}

const Product = ({ item: {info, _id} }: Props) => {
  const {
    photo,
    name,
    dimensions,
    weight,
   
    internalMemory,
    os,
    price
  } = info;

  return (
    <div className="product">
      <div className="content">
        <img src={photo} />
        <div className="content-left">
          <h3>{name}</h3>
          <div className="content-info">
            <div><b>Өлшемі: </b><span>{dimensions}</span></div>
            <div><b>Ұзын: </b><span>{weight}</span></div>
            <div><b>Атауы: </b><span>{name}</span></div>
            <div><b>Жасы: </b><span>{internalMemory}</span></div>
            <div><b>Киім түрі: </b><span>{os}</span></div>
          </div>
        </div>
        <div className="content-right">
          <div className="content-info">
            <p><b>Бағасы:</b></p>
            <h2>{numeral(price*450).format('0,0 ')+'₸'}</h2>
          </div>
          <RaisedButton
            containerElement={<Link to={`/product/${_id}`} />}
            className="btn"
            label="Толығырақ"
            labelPosition="before"
            primary={true}
            icon={<NavigateNext />}
          />
        </div>
      </div>
    </div>
  )
};

export default Product;