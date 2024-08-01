import locators from './locators';
import { readerJson } from '../../support/helpers/json.helper';

export class LoginPage {

  
  static async auth(condition: string) {
    const user = readerJson('login')[condition];
    await pageAction.locator(locators.login.email).fill(user.email);
    await pageAction.locator(locators.login.password).fill(user.password);
    await pageAction.locator(locators.elementByText('Entrar')).click();
  }

 
  static async  elementIsPresent(element: string) {
    await pageAction.waitForEvent('response');
    const content = await pageAction.locator('body').textContent() || '';
    const elementsPresent = content.includes(element);
    return elementsPresent;
  }

  static async getText(text: string) {
    await pageAction.waitForEvent('response');
    const texto = await pageAction.getByText(text).evaluate(node => node.textContent);
    return texto;
  }

}

