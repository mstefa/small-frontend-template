'use client'; // TODO

import Link from 'next/link';
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Link href="/">Home</Link>
          <Link href="/store">Store</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/about-me">About</Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
