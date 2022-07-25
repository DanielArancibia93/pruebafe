import React, { Fragment } from "react";
import {TodoList} from './components/TodoList'
/* Añadir un componente */
export function App(){
  return (
    <Fragment>
      <TodoList />
    </Fragment>
  );
};