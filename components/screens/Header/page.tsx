"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  Button,
} from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <Navbar maxWidth="2xl" shouldHideOnScroll>
      <NavbarContent>
        <NavbarBrand>
          <Link className="font-bold text-inherit" href="/">
            Test
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <Button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
          Change color theme
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
