import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Box, Image} from "grommet";
import _ from "lodash";
export const ModalComponent = (props) => {
  const data = props
  return (
  <Modal
    show={data.show}
    onHide={data.onHide}
    dialogClassName="modal-90w"
    centered
    size="md"
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-custom-modal-styling-title">
        {_.upperFirst(data.pokemon.name)}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Box>
        <Image src={data.pokemon.picture}></Image>
      </Box>

    </Modal.Body>
  </Modal>
)
  ;
}
