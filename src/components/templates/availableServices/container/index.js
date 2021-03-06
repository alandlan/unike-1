import React from 'react';
import AvailableServicesPresentation from '../presentation';
import { useAvailableServices } from './use';
import { Text } from 'native-base';

const AvailableServicesContainer = props => {
  const data = useAvailableServices();

  return (
    <AvailableServicesPresentation
      data={data}
      {...props}
      ongoMap={props.onGoMap}
    />
  );
};

export default AvailableServicesContainer;
