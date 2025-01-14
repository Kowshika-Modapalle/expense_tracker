import React from 'react'
import { menuItems } from '../utils/menuItems';
import { logout, profile } from '../utils/icons';
import { styled } from 'styled-components'

const Dashboard = () => {
  return (
    <NavStyled>
      <div className='text'>
        <h2> {profile}  Kowshika</h2>
        <p style={{marginLeft: '33px'}}>Balance Money</p>
      </div>
      <ul className='menu'>
        {menuItems.map((item) => {
          return <li key={item.id}>{item.icon}<span>{item.title}</span></li>
        })}
      </ul>
      <div className="bottom-nav">
        <li>
          {logout} Sign Out
        </li>
      </div>
    </NavStyled>
  )
}


const NavStyled = styled.nav`
padding: 2rem 1.5rem;
width: 374px;
height: 100vh;
border: 3px solid #FFFFFF;
background:hsl(150, 50.00%, 97.60%);
backdrop-filter: blur(4.5px);
border-radius: 32px;
display: flex;
flex-direction: column;
justify-content: space-between:
gap: 2rem;
.text {
     margin-bottom: 20px;
  }
.menu{
flex: 1;
display:flex;
flex-direction: column;
li{
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
  margin:.6rem 0;
  font-weight: 500;
  cursor: pointer;
  transition: all .4s ease-in-out;
  color: rgba(34, 34, 96, .6);
  padding-left: 1rem;
  postion: relative;
  i{
  color: rgba(34,34,96,0.6);
  font-size: 1.4rem;
  transition: all .4s ease-in-out;
  }
}
}
.bottom-nav {
    margin-top: auto;
    li {
      display: flex;
      align-items: center;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.8);
      padding: 1rem;
    }
  }
`;

export default Dashboard