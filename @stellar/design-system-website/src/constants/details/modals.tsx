import {
  Modal,
  Button,
  InfoBlock,
  Checkbox,
  RadioButton,
} from "@stellar/design-system";
import { useState } from "react";
import { ComponentDetails, ComponentDetailsId } from "types/types";

const SimpleModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <Button variant="primary" size="md" onClick={() => setModalVisible(true)}>
        Show simple modal
      </Button>

      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius
          beatae sint dolorem, excepturi quos enim, et ullam suscipit voluptates
          voluptas accusantium repellendus amet explicabo, iure veritatis
          aperiam alias molestiae.
        </p>
      </Modal>
    </div>
  );
};

const ModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <Button variant="primary" size="md" onClick={() => setModalVisible(true)}>
        Show modal
      </Button>

      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Heading>Modal heading</Modal.Heading>

        <Modal.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
            voluptates voluptas accusantium repellendus amet explicabo, iure
            veritatis aperiam alias molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
            voluptates voluptas accusantium repellendus amet explicabo, iure
            veritatis aperiam alias molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
            voluptates voluptas accusantium repellendus amet explicabo, iure
            veritatis aperiam alias molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
            voluptates voluptas accusantium repellendus amet explicabo, iure
            veritatis aperiam alias molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
            voluptates voluptas accusantium repellendus amet explicabo, iure
            veritatis aperiam alias molestiae.
          </p>

          <InfoBlock variant={InfoBlock.variant.warning}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
              corrupti voluptatum molestias nesciunt ad sapiente placeat maxime
              ullam saepe ab temporibus ratione at eos sed, voluptatem laborum
              provident! Aperiam.
            </p>
          </InfoBlock>

          <Checkbox
            id="modal-checkbox-1"
            label="Pariatur
            eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
            voluptates voluptas accusantium repellendus amet explicabo, iure
            veritatis aperiam alias molestiae."
          />

          <RadioButton id="modal-radio-1" name="modal-radio" label="Label 1" />
          <RadioButton
            id="modal-radio-2"
            name="modal-radio"
            label="Pariatur
            eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
            voluptates voluptas accusantium repellendus amet explicabo, iure
            veritatis aperiam alias molestiae."
          />
          <RadioButton id="modal-radio-3" name="modal-radio" label="Label 3" />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" size="md">
            Submit
          </Button>
          <Button
            variant="secondary"
            size="md"
            onClick={() => setModalVisible(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const modals: ComponentDetails = {
  id: ComponentDetailsId.modals,
  title: "Modals",
  description: (
    <>
      Modal is a dialog window with an overlay background, which is rendered on
      top of the rest of the website.
    </>
  ),
  shortDescription:
    "A dialog window with an overlay background, rendered on top",
  examples: [
    {
      title: "Simple text modal",
      description: "",
      previewExampleOverride: [<SimpleModalExample />],
      component: [
        <Modal
          visible={false}
          onClose={() => {
            // do nothing
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
            voluptates voluptas accusantium repellendus amet explicabo, iure
            veritatis aperiam alias molestiae.
          </p>
        </Modal>,
      ],
    },
    {
      title: "Fully-featured modal",
      description: "Modal with scrolling content using modal sub-components.",
      previewExampleOverride: [<ModalExample />],
      component: [
        <Modal
          visible={false}
          onClose={() => {
            // do nothing
          }}
        >
          <Modal.Heading>Modal heading</Modal.Heading>

          <Modal.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
              voluptates voluptas accusantium repellendus amet explicabo, iure
              veritatis aperiam alias molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
              voluptates voluptas accusantium repellendus amet explicabo, iure
              veritatis aperiam alias molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
              voluptates voluptas accusantium repellendus amet explicabo, iure
              veritatis aperiam alias molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
              voluptates voluptas accusantium repellendus amet explicabo, iure
              veritatis aperiam alias molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
              voluptates voluptas accusantium repellendus amet explicabo, iure
              veritatis aperiam alias molestiae.
            </p>

            <InfoBlock variant={InfoBlock.variant.warning}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                ipsa corrupti voluptatum molestias nesciunt ad sapiente placeat
                maxime ullam saepe ab temporibus ratione at eos sed, voluptatem
                laborum provident! Aperiam.
              </p>
            </InfoBlock>

            <Checkbox
              id="modal-checkbox-1"
              label="Pariatur
            eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
            voluptates voluptas accusantium repellendus amet explicabo, iure
            veritatis aperiam alias molestiae."
            />

            <RadioButton
              id="modal-radio-1"
              name="modal-radio"
              label="Label 1"
            />
            <RadioButton
              id="modal-radio-2"
              name="modal-radio"
              label="Pariatur
            eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
            voluptates voluptas accusantium repellendus amet explicabo, iure
            veritatis aperiam alias molestiae."
            />
            <RadioButton
              id="modal-radio-3"
              name="modal-radio"
              label="Label 3"
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" size="md">
              Submit
            </Button>
            <Button variant="secondary" size="md">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>,
      ],
    },
  ],
  props: [
    {
      prop: "children",
      type: ["ReactNode"],
      default: null,
      optional: false,
      description: "Content of the modal",
    },
    {
      prop: "visible",
      type: ["boolean"],
      default: null,
      optional: false,
      description: "State to show or hide the modal",
    },
    {
      prop: "onClose",
      type: ["() => void"],
      default: null,
      optional: false,
      description: "Function to handle modal closed action",
    },
    {
      prop: "parentId",
      type: ["string"],
      default: "root",
      optional: true,
      description: "ID of the modal parent (affects the position of the modal)",
    },
    {
      prop: "disableWindowScrollWhenOpened",
      type: ["boolean"],
      default: "true",
      optional: true,
      description: "Don’t allow window scrolling when modal is visible",
    },
    {
      prop: "offsetTop",
      type: ["string"],
      default: null,
      optional: true,
      description: "Offset top position of the modal",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
  subComponents: {
    description: (
      <>
        Modal sub-components <code>Modal.Heading</code>, <code>Modal.Body</code>
        , <code>Modal.Footer</code> help to structure the modal content.
      </>
    ),
    components: [
      {
        component: "Heading",
        description: "",
        props: [
          {
            prop: "children",
            type: ["string", "ReactNode"],
            default: null,
            optional: false,
            description: "Content of the modal heading",
          },
        ],
      },
      {
        component: "Body",
        description: "",
        props: [
          {
            prop: "children",
            type: ["string", "ReactNode"],
            default: null,
            optional: false,
            description: "Content of the modal body",
          },
        ],
      },
      {
        component: "Footer",
        description: "",
        props: [
          {
            prop: "children",
            type: ["string", "ReactNode"],
            default: null,
            optional: false,
            description: "Content of the modal footer",
          },
        ],
      },
    ],
  },
};
