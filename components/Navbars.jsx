import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { Navbar } from "flowbite-react";

export default function Navbars() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <img
          src="icon.png"
          className="mr-3 h-6 sm:h-9"
          alt="icon"
        />
        
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">
          Home
        </Navbar.Link>
        <Navbar.Link href="/projects">Projects</Navbar.Link>
        <Navbar.Link href="/">Contacts</Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}
