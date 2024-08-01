import { APIRequestContext, APIResponse, request } from 'playwright/test';
import { browserOptions, config, options } from './config-definitions';

import { ChromiumBrowser, FirefoxBrowser, Page, WebKitBrowser, chromium, firefox, webkit } from '@playwright/test';


declare global {
    var testName: string;
    var requestService: APIRequestContext;
    var response: Promise<APIResponse>;
    var pageAction: Page;
    var browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
}



export async function setupPage(browserName: string) {
  switch (browserName) {
    case 'firefox':
      globalThis.browser = await firefox.launch(browserOptions);
      break;
    case 'webkit':
      globalThis.browser = await webkit.launch(browserOptions);
      break;
    default:
      globalThis.browser = await chromium.launch(browserOptions);
  }
  const context =  await globalThis.browser.newContext(options);
  globalThis.pageAction = await context.newPage();

  await pageAction.goto('/');


}


export async function setupApi() {
  globalThis.requestService = await request.newContext({
    baseURL: config.BASE_API_URL,
    extraHTTPHeaders: {
      Accept: 'application/json',
      'X-Test-Authorization': config.KEY,
    },
    timeout: config.TIMEOUT_API,
  });
}


export async function tearDown() {
  await globalThis.browser.close();
  await globalThis.pageAction.close();
}