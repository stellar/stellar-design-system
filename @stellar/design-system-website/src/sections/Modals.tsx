import { useState } from "react";
import {
  Heading2,
  TextLink,
  Modal,
  Button,
  InfoBlock,
} from "@stellar/design-system";

export const Modals = () => {
  const [simpleModalVisible, setSimpleModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="inset">
      <Heading2>Modal</Heading2>

      <div className="item-container">
        <div className="item-wrapper">
          <TextLink onClick={() => setSimpleModalVisible(true)}>
            Show simple modal
          </TextLink>
        </div>

        <div className="item-wrapper">
          <TextLink onClick={() => setModalVisible(true)}>Show modal</TextLink>
        </div>
      </div>

      {/* Simple modal */}
      <Modal
        visible={simpleModalVisible}
        onClose={() => setSimpleModalVisible(false)}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius
          beatae sint dolorem, excepturi quos enim, et ullam suscipit voluptates
          voluptas accusantium repellendus amet explicabo, iure veritatis
          aperiam alias molestiae.
        </p>
      </Modal>

      {/* Modal */}
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
