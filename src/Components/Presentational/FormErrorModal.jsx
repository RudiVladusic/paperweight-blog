const FormErrorModal = ({ message }) => {
  return (
    <header className="login-error-modal">
      <h2>{message}</h2>
    </header>
  );
};

export default FormErrorModal;
