import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AutosInfoProvider from "./context/ContextAutosInfo";
import Nav from "./components/Nav";
import Clientes from "./components/Clientes";
import FromFooter from "./components/FromFooter";
import DetalleModelo from "./components/DetalleModelo";
import SeccionCompletaMpdelos from "./components/SeccionCompletaModelos";

function App() {
  return (
    <>
      <Router>
        <AutosInfoProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={SeccionCompletaMpdelos} />
            <Route exact="/productosdetalles/" component={DetalleModelo} />
          </Switch>
          <Clientes />
          <FromFooter />
        </AutosInfoProvider>
      </Router>
    </>
  );
}

export default App;
