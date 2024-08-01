const locators = {
  login: {
    email: '[data-test="email"]',
    password: '[data-test="passwd"]',
  },
  menu: {
    settings: '[data-test="menu-settings"]'
  },
  elementByText: (text: string) => `//*[contains(text(),"${text}")]`
};

export default locators;