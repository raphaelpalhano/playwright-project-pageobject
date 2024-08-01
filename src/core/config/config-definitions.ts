import { LaunchOptions } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({
  path: `./envs/.env.${process.env.environment || 'dev'}`,
});

export const config = {
  IMG_THRESHOLD: { threshold: 0.4 },
  BASE_API_URL: process.env.BASE_API_URL,
  TIMEOUT_API: 10000,
  TIME_OUT_FRONT: 15000,
  KEY: process.env.KEY_API || '',
  BASE_URL: process.env.BASE_URL,

};



export const browserOptions: LaunchOptions = {
  slowMo: 0,
  args: ['--start-maximized', '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
  headless: process.env.head ? true : false,
};
    
export const options = {
  acceptDownloads: true,
  recordVideo: process.env.VIDEO ? { dir: 'reports/videos' } : undefined,
};
  