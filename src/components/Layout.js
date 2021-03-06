import React from "react"
import styled from "styled-components"

import GlobalStyle from "@styles/GlobalStyle"
import theme from "@styles/theme"
import Nav from "./layout/Nav"
import Footer from "./layout/Footer"

const pages = [
  {
    name: "Work",
    path: "#work",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Writing",
    path: "./blog",
  },
  {
    name: "Contact",
    path: "./hello",
  },
  {
    name: "Resume",
    path: "./resume.pdf",
  },
]

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Nav pages={pages} />
    <Main>{children}</Main>
    <Footer />
  </>
)

export default Layout

const Main = styled.main`
  padding: ${theme.space[3]}px;

  ${theme.breakpoints.xs} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: ${theme.space[2]}px;
    padding: ${theme.space[3]}px ${theme.space[8]}px;

    > * {
      grid-column: 1 / -1;
    }
  }

  ${theme.breakpoints.sm} {
    padding: ${theme.space[3]}px 120px;
  }

  ${theme.breakpoints.md} {
    padding: ${theme.space[3]}px 156px; 
  }
`
