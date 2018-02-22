import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu>
      <Link route='/'><a className='item'>CrowdCoin</a></Link>
      <Menu.Menu position='right'>
        <Link route='/'><a className='item'>Kickstarters</a></Link>
        <Link route='/kickstarters/new'><a className='item'>+</a></Link>
      </Menu.Menu>
    </Menu>
  )
}
