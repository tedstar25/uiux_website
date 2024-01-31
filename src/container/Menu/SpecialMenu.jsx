import React from 'react';


import {images,data} from '../../constants';
import './SpecialMenu.css';
import { SubHeading,MenuItem } from '../../components';
import { Link } from 'react-router-dom';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu Thats first your Power" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu-menu_items' >
          {data.wines.map((wine,index)=>(
            <MenuItem key={wine.title + index} title={wine.title} price= {wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img' >
          <img src={images.menu} alt="menu" />
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu-menu_items' >
          {data.cocktails.map((cocktail,index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop:'15px'}}>
      <Link to="/fullmenu">        
        <button type="button" className="custom__button">
          View More
        </button>
      </Link>
    </div>
  </div>
);

export default SpecialMenu;
