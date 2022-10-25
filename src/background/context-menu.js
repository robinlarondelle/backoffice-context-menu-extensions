import { generateBsn } from './bsn-generator';
import { generateEmail } from './email-generator';
import { generateIBAN } from './iban-generator';
import { generateVatNumber } from './vat-number-generator';

export default function init() {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'paste-random-iban',
      title: 'Random IBAN',
      contexts: ['editable'],
    });
    chrome.contextMenus.create({
      id: 'paste-random-btw-number',
      title: 'Random BTW-nummer',
      contexts: ['editable'],
    });
    chrome.contextMenus.create({
      id: 'paste-random-email',
      title: 'Random email',
      contexts: ['editable'],
    });
    chrome.contextMenus.create({
      id: 'paste-random-bsn',
      title: 'Random BSN',
      contexts: ['editable'],
    });
  });

  chrome.contextMenus.onClicked.addListener((info) => {
    switch (info.menuItemId) {
      case 'paste-random-iban':
        chrome.tabs.executeScript({
          code: `
            document.execCommand('selectAll');
            document.execCommand('insertText', false, '${generateIBAN()}');
          `,
        });
        break;
      case 'paste-random-btw-number':
        chrome.tabs.executeScript({
          code: `
            document.execCommand('selectAll');
            document.execCommand('insertText', false, '${generateVatNumber()}');
          `,
        });
        break;
      case 'paste-random-email':
        chrome.tabs.executeScript({
          code: `
            document.execCommand('selectAll');
            document.execCommand('insertText', false, '${generateEmail()}');
          `,
        });
        break;
      case 'paste-random-bsn':
        chrome.tabs.executeScript({
          code: `
            document.execCommand('selectAll');
            document.execCommand('insertText', false, '${generateBsn()}');
          `,
        });
        break;
      default:
        break;
    }
  });
}
