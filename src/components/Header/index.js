import React from "react";

import { Container, Icon } from "./styles";

function Header() {
  return (
    <Container>
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" alt="Logo Facebook" />
        <div>
          <span>Meu perfil</span>
          <Icon />
        </div>
      </nav>
    </Container>
  );
}

export default Header;
