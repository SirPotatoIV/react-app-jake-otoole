import React from "react";
import { Header, Button, Menu } from "grommet";
import { Home } from "grommet-icons";

function Navbar() {
  return (
    <nav>
      <Header background="brand">
        <Button icon={<Home />} href="/home" hoverIndicator />
        <Menu
          label="navigation"
          items={[
            { label: "About", href: "/about" },
            { label: "Users", href: "/users" },
          ]}
        />
      </Header>
    </nav>
  );
}

export default Navbar;
