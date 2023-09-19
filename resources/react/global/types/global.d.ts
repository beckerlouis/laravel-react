import ziggyRoute, { Config as ZiggyConfig } from 'ziggy-js';
import { AxiosInstance } from 'axios';

declare global {
  interface Window {
    axios: AxiosInstance;
  }

  let route: typeof ziggyRoute;
  let Ziggy: ZiggyConfig;
}
