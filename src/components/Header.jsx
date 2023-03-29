import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'

export const Header = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item>
          <Link to="/">
            <Image size='mini' src='/vite.svg' style={{ marginRight: '1.5em' }} />
          </Link>
          <Link to="/">React Lab </Link>
        </Menu.Item>
        <Menu.Item >
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item >
          <Link to="/about">About</Link>
        </Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  )
}
