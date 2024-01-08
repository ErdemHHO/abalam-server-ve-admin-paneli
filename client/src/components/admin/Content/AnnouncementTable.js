import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export const AnnouncementTable = () => {
  const [announcements, setannouncements] = useState([]);
  const [addannouncement, setAddannouncement] = useState({
    title: "",
    description: "",
  });
  const [show, setShow] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [axiosErrors, setAxiosErrors] = useState("");

  const handleClose = () => {
    setShow(false);
    setFormErrors({});
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/announcement");
      console.log(result.data.announcements);
      setannouncements(result.data.announcements);
    };
    fetchData();
  }, []);

  const deleteFunction = async (id) => {
    try {
      const urunler = announcements.filter((item) => item._id !== id);
      const result = await axios.delete(`/api/announcement/${id}`);
      setannouncements(urunler);
    } catch (error) {
      console.log(error);
    }
  };

  const addFunction = async () => {
    const validationResult = validateForm();
    if (validationResult.isValid) {
      try {
        const result = await axios.post(`/api/announcement`, addannouncement);
        setAxiosErrors("");
        setannouncements([...announcements, result.data.newAnnouncements]);
        setAddannouncement({
          title: "",
          description: "",
        });
        handleClose();
      } catch (error) {
        console.log(error.response.data);
        setAxiosErrors(error.response.data.message);
      }
    } else {
      setFormErrors(validationResult.errors);
    }
  };

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;
    setAddannouncement((prevState) => ({ ...prevState, [name]: updatedValue }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!addannouncement.title) {
      errors.title = "Bu alan zorunludur";
      isValid = false;
    }
    if (!addannouncement.description) {
      errors.description = "Bu alan zorunludur";
      isValid = false;
    }

    setFormErrors(errors);
    return { isValid, errors };
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
      <div className="d-flex justify-content-end flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div className="btn-toolbar mb-2 mb-md-0">
          <Button variant="primary" onClick={handleShow}>
            Duyuru Ekle
          </Button>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Duyuru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="input" placeholder="Title giriniz" name="title" value={addannouncement.title} onChange={handleChange} required />
              {formErrors.title && <div className="text-danger">{formErrors.title}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>Description</Form.Label>
              <Form.Control type="input" placeholder="Description Giriniz" name="description" value={addannouncement.description} onChange={handleChange} required />
              {formErrors.description && <div className="text-danger">{formErrors.description}</div>}
            </Form.Group>
          </Form>
          {axiosErrors && <span className="text-danger">{axiosErrors}</span>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const { isValid, errors } = validateForm();
              setFormErrors(errors);
              if (isValid) {
                addFunction();
              }
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <h2>Urunler</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Duyuru ID</th>
              <th scope="col">Duyuru Title</th>
              <th scope="col">Duyuru Description</th>
              <th scope="col">Guncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>
            {announcements &&
              announcements.map((item) => (
                <tr key={`${item._id}`}>
                  <td>{item._id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <Button variant="warning" size="sm">
                      Guncelle
                    </Button>
                  </td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => deleteFunction(item._id)}>
                      Sil
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AnnouncementTable;
