import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export const CategoryTable = () => {
  const [categories, setcategories] = useState([]);
  const [addCategory, setaddCategory] = useState({
    name: "",
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
      const result = await axios.get("/api/category");
      console.log(result.data.categories);
      setcategories(result.data.categories);
    };
    fetchData();
  }, []);

  const deleteFunction = async (slug) => {
    try {
      const urunler = categories.filter((item) => item.slug !== slug);
      const result = await axios.delete(`/api/category/${slug}`);
      setcategories(urunler);
    } catch (error) {
      console.log(error);
    }
  };

  const addFunction = async () => {
    const validationResult = validateForm();
    if (validationResult.isValid) {
      try {
        const result = await axios.post(`/api/category`, addCategory);
        setAxiosErrors("");
        setcategories([...categories, result.data.newCategory]);
        setaddCategory({
          name: "",
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
    setaddCategory((prevState) => ({ ...prevState, [name]: updatedValue }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!addCategory.name) {
      errors.name = "Bu alan zorunludur";
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
            Kategori Ekle
          </Button>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kategori</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>Name</Form.Label>
              <Form.Control type="input" placeholder="Name Giriniz" name="name" value={addCategory.name} onChange={handleChange} required />
              {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
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
              <th scope="col">Kategori ID</th>
              <th scope="col">Kategori Name</th>
              <th scope="col">Guncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((item) => (
                <tr key={`${item._id}`}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>
                    <Button variant="warning" size="sm">
                      Guncelle
                    </Button>
                  </td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => deleteFunction(item.slug)}>
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

export default CategoryTable;
