import config from '../../playwright.config';

const getBrowserType = () => {
  const BrowserType = config.projects && config.projects[1] ? config.projects[1].name : 'unknown';
  return BrowserType;
}

export class Logger {
    static log(log: string) {
      console.log(`[${getBrowserType()}]: - ${new Date().toLocaleString()} - log     -----  ${log}`);
    }
    
    static step(step: any) {
      console.log(`[${getBrowserType()}]: - ${new Date().toLocaleString()} - step    -----  ${step}`);
    }

    static action(action: any) {
      console.log(`[${getBrowserType()}]: - ${new Date().toLocaleString()} - action  -----  ${action}`);
    }
  
    static error(message: any) {
      console.log(`[${getBrowserType()}]: - ${new Date().toLocaleString()} - error  -----  ${message}`);
    }
  }
  