import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: ReactNode;
  target?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
  const {
    children,
    target = document.body,
  } = props;

  return createPortal(children, target);
};
