import {
  Modal,
  Button,
  InfoBlock,
  Checkbox,
  RadioButton,
} from "@stellar/design-system";
import { useState } from "react";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

const SimpleModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setModalVisible(true)}>Show simple modal</Button>

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
      <Button onClick={() => setModalVisible(true)}>Show modal</Button>

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
          <Button>Submit</Button>
          <Button
            variant={Button.variant.secondary}
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
  description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!`,
  displayExamples: [<SimpleModalExample />],
  examples: [
    {
      title: "Simple text modal",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      previewExampleOverride: [<SimpleModalExample />],
      component: [
        <Modal visible={false} onClose={() => {}}>
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      previewExampleOverride: [<ModalExample />],
      component: [
        <Modal visible={false} onClose={() => {}}>
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
            <Button>Submit</Button>
            <Button variant={Button.variant.secondary}>Cancel</Button>
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
      description: "",
    },
    {
      prop: "visible",
      type: ["boolean"],
      default: null,
      optional: false,
      description: "",
    },
    {
      prop: "onClose",
      type: ["() => void"],
      default: null,
      optional: false,
      description: "",
    },
    {
      prop: "parentId",
      type: ["string"],
      default: "root",
      optional: true,
      description: "",
    },
    {
      prop: "disableWindowScrollWhenOpened",
      type: ["boolean"],
      default: "true",
      optional: true,
      description: "",
    },
    {
      prop: "offsetTop",
      type: ["string"],
      default: null,
      optional: true,
      description: "",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
  subComponents: {
    description: (
      <>
        <code>Modal.Heading</code>, <code>Modal.Body</code>,{" "}
        <code>Modal.Footer</code>
      </>
    ),
    components: [
      {
        component: "Heading",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
        props: [
          {
            prop: "children",
            type: ["string", "ReactNode"],
            default: null,
            optional: false,
            description: "",
          },
        ],
      },
      {
        component: "Body",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
        props: [
          {
            prop: "children",
            type: ["string", "ReactNode"],
            default: null,
            optional: false,
            description: "",
          },
        ],
      },
      {
        component: "Footer",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
        props: [
          {
            prop: "children",
            type: ["string", "ReactNode"],
            default: null,
            optional: false,
            description: "",
          },
        ],
      },
    ],
  },
};
