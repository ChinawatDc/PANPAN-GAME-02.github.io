import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Modal from './Modal'; // Modal is a component for displaying modal dialogs

function ModalContainer() {
  const location = useLocation();

  // Logic to determine if a modal should be shown based on the URL
  const isModal = location.state && location.state.modal;

  return (
    <>
      {/* Render the child routes */}
      <Outlet />

      {/* Render the modal dialog if necessary */}
      {isModal && <Modal />}
    </>
  );
}

export default ModalContainer;
