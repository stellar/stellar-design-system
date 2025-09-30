import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { NavButton } from "../NavButton";
import { Heading } from "../Typography";
import { Icon } from "../../icons";

import "./styles.scss";

const MODAL_OPEN_CLASS_NAME = "modal-open";

interface ModalComponent {
  Heading?: (props: ModalHeadingProps) => JSX.Element;
  Body?: (props: ModalBodyProps) => JSX.Element;
  Footer?: (props: ModalFooterProps) => JSX.Element;
}

/** */
export interface ModalHeadingProps {
  /** Content of the modal heading */
  children: string | React.ReactNode;
}

const ModalHeading = ({ children }: ModalHeadingProps): JSX.Element => (
  <Heading as="h2" size="md" className="ModalHeading">
    {children}
  </Heading>
);

ModalHeading.displayName = "Modal.Heading";

/** */
export interface ModalBodyProps {
  /** Content of the modal body */
  children: React.ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps): JSX.Element => (
  <div className="ModalBody">{children}</div>
);

ModalBody.displayName = "Modal.Body";

/** */
export interface ModalFooterProps {
  /** Content of the modal footer */
  children: React.ReactNode;
  /** Item alignment in the footer @defaultValue `right` */
  itemAlignment?: "right" | "stretch" | "stack";
}

const ModalFooter = ({
  children,
  itemAlignment = "right",
}: ModalFooterProps): JSX.Element => (
  <div className={`ModalFooter ModalFooter--${itemAlignment}`}>{children}</div>
);

ModalFooter.displayName = "Modal.Footer";

/** */
export interface ModalProps {
  /** ID of the modal parent (affects the position of the modal) @defaultValue `root` */
  parentId?: string;
  /** State to show or hide the modal */
  visible: boolean;
  /** Function to handle modal closed action */
  onClose: () => void;
  /** Don’t allow window scrolling when modal is visible @defaultValue `true` */
  disableWindowScrollWhenOpened?: boolean;
  /** Offset top position of the modal */
  offsetTop?: string;
  /** Align modal to the bottom on small screens */
  alignToBottom?: boolean;
  /** Content of the modal */
  children: React.ReactNode;
}

/**
 * `Modal` is a dialog window with an overlay background that is rendered on top of the rest of the website.
 *
 * Modal sub-components `Modal.Heading`, `Modal.Body`, and `Modal.Footer` help structure the modal content.
 */
export const Modal = ({
  parentId = "root",
  visible,
  onClose,
  disableWindowScrollWhenOpened = true,
  offsetTop,
  alignToBottom,
  children,
}: ModalProps & ModalComponent): JSX.Element | null => {
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
    <div
      className="Modal"
      style={customStyle}
      {...(alignToBottom ? { "data-modal-align": "bottom" } : {})}
    >
      <div className="Modal__container">
        <div className="Modal__content">{children}</div>
        <div className="Modal__close">
          <NavButton
            id="modal-close-button"
            title="Close modal"
            onClick={onClose}
            icon={<Icon.XClose />}
          />
        </div>
      </div>
      <div className="Modal__background" role="button" onClick={onClose} />
    </div>,
    parent,
  ) as React.JSX.Element;
};

Modal.displayName = "Modal";

Modal.Heading = ModalHeading;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
