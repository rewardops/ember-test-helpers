type Target = string | Element | Document | Window;

export default Target;

export interface HTMLElementContentEditable extends HTMLElement {
  isContentEditable: true;
}

// eslint-disable-next-line require-jsdoc
export function isElement(target: any): target is Element {
  return target.nodeType === Node.ELEMENT_NODE;
}

// eslint-disable-next-line require-jsdoc
export function isWindow(target: Target): target is Window {
  return target instanceof Window;
}

// eslint-disable-next-line require-jsdoc
export function isDocument(target: any): target is Document {
  return target.nodeType === Node.DOCUMENT_NODE;
}

// eslint-disable-next-line require-jsdoc
export function isContentEditable(
  element: Element
): element is HTMLElementContentEditable {
  return (
    'isContentEditable' in element && (element as HTMLElement).isContentEditable
  );
}
