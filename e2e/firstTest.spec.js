import {
  TEXT_ADD, TEXT_BUTTON_ADD,
  TEXT_COLOR,
  TEXT_CONFIRM,
  TEXT_DEADLINE_PLACEHOLDER,
  TEXT_LOGIN,
  TEXT_TASK_PLACEHOLDER,
  TEXT_USERNAME_PLACEHOLDER
} from "../app/resource/text";

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('I shall pass', async () => {
    await element(by.text(TEXT_USERNAME_PLACEHOLDER)).typeText('Martian');
    await element(by.label('return')).tap(); // currently keyboard is blocking login button
    await element(by.text(TEXT_LOGIN)).tap();
    await element(by.id(TEXT_ADD)).atIndex(0).tap(); // two images with id 'add' one dark one light
    await element(by.text(TEXT_TASK_PLACEHOLDER)).typeText('Write tests!');
    await element(by.text(TEXT_DEADLINE_PLACEHOLDER)).tap();
    await element(by.text(TEXT_CONFIRM)).tap();
    await element(by.id(TEXT_COLOR)).atIndex(0).tap();
    await element(by.text(TEXT_BUTTON_ADD)).tap();
  })
})
