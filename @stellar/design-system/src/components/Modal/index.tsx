import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { Heading2 } from "../Heading";
import { NavButton } from "../NavButton";
import { Icon } from "../../icons";

import "./styles.scss";

const MODAL_OPEN_CLASS_NAME = "modal-open";

interface ModalComponent {
  Heading: React.FC<ModalHeadingProps>;
  Body: React.FC<ModalBodyProps>;
  Footer: React.FC<ModalFooterProps>;
}

interface ModalHeadingProps {
  children: string | React.ReactNode;
}

const ModalHeading: React.FC<ModalHeadingProps> = ({
  children,
}: ModalHeadingProps) => (
  <Heading2 className="ModalHeading">{children}</Heading2>
);

interface ModalBodyProps {
  children: React.ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = ({
  children,
}: ModalHeadingProps) => <div className="ModalBody">{children}</div>;

interface ModalFooterProps {
  children: React.ReactNode;
}

const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
}: ModalHeadingProps) => <div className="ModalFooter">{children}</div>;

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  parentId?: string;
  disableWindowScrollWhenOpened?: boolean;
  offsetTop?: string;
}

export const Modal: React.FC<ModalProps> & ModalComponent = ({
  parentId = "root",
  visible,
  onClose,
  disableWindowScrollWhenOpened = true,
  offsetTop,
  children,
}: ModalProps) => {
  const parent = document.getElementById(parentId);

  const customStyle = {
    ...(offsetTop ? { "--Modal-offset-top": offsetTop } : {}),
  } as React.CSSProperties;

  const closeOnEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (disableWindowScrollWhenOpened && visible) {
      document.body.classList.add(MODAL_OPEN_CLASS_NAME);
    } else {
      document.body.classList.remove(MODAL_OPEN_CLASS_NAME);
    }
  }, [disableWindowScrollWhenOpened, visible]);

  useEffect(() => {
    if (visible) {
      document.addEventListener("keyup", closeOnEscape);
    } else {
      document.removeEventListener("keyup", closeOnEscape);
    }
  }, [visible, closeOnEscape]);

  if (!parent || !visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal" style={customStyle}>
      <div className="Modal__container">
        <div className="Modal__content">{children}</div>
        <div className="Modal__close">
          <NavButton
            id="modal-close-button"
            title="Close modal"
            onClick={onClose}
            icon={<Icon.X />}
          />
        </div>
      </div>
      <div className="Modal__background" onClick={onClose} />
    </div>,
    parent,
  );
};

Modal.displayName = "Modal";
Modal.Heading = ModalHeading;
Modal.Heading.displayName = "Modal.Heading";
Modal.Body = ModalBody;
Modal.Body.displayName = "Modal.Body";
Modal.Footer = ModalFooter;
Modal.Footer.displayName = "Modal.Footer";
