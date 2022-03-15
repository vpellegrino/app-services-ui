import React from 'react';
import { FederatedModule } from '@app/components';
import { AppServicesLoading } from '@rhoas/app-services-ui-components';

const SmartEventsPage: React.FC = () => {
  return (
    <>
      {/*<p>this is smartevents page inside app-services-ui. loading federated module below</p>*/}
      <FederatedModule
        scope="smartevents"
        fallback={<AppServicesLoading />}
        module="./SmartEventsOverview"
        render={(SmartEventsOverview) => <SmartEventsOverview />}
      />
    </>
  );
};

export default SmartEventsPage;
