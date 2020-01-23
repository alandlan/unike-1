import React from 'react';
import SignupContactDataPresentation from '../presentation';
import { useSelector } from 'react-redux';
import { useSetContactData } from '../../../../../hooks/useContactData';

const SignupContactDataContainer = ({ navigation }) => {
  const selector = useSelector(state => state.signup.contactData);
  const setKeyContact = useSetContactData();

  const goPage = page => navigation.navigate(page);
  const onChange = key => value => setKeyContact(key, value);

  return (
    <SignupContactDataPresentation
      title="Dados de Contato"
      disable={false}
      onChangeForm={onChange}
      data={selector}
      onBack={() => goPage('Login')}
      onForward={() => goPage('SignupProfessional')}
      onClear={() => {}}
    />
  );
};

export default SignupContactDataContainer;