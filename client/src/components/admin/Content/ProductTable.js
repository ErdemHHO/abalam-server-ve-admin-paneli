import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [addProduct, setAddProduct] = useState({
    category_id: "",
    urun_kodu: "",
    name: "",
    title: "",
    description: "",
    stock: true,
    old_price: null,
    price: null,
    cost: null,
    color: "",
    brand: "",
    isActive: true,
    isFavorite: false,
    isNewProduct: false,
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
      const result = await axios.get("/api/product");
      console.log(result.data.products);
      setProducts(result.data.products);
    };
    fetchData();
  }, []);

  const deleteFunction = async (slug) => {
    try {
      const urunler = products.filter((item) => item.slug !== slug);
      const result = await axios.delete(`/api/product/${slug}`);
      setProducts(urunler);
    } catch (error) {
      console.log(error);
    }
  };

  const addFunction = async () => {
    const validationResult = validateForm();
    if (validationResult.isValid) {
      try {
        const result = await axios.post(`/api/product`, addProduct);
        setAxiosErrors("");
        setProducts([...products, result.data.newProduct]);
        setAddProduct({
          category_id: "",
          urun_kodu: "",
          name: "",
          title: "",
          description: "",
          stock: true,
          old_price: null,
          price: null,
          cost: null,
          color: "",
          brand: "",
          isActive: true,
          isFavorite: false,
          isNewProduct: false,
        });
        handleClose();
      } catch (error) {
        console.log(error.response.data.message);
        setAxiosErrors(error.response.data.message);
      }
    } else {
      setFormErrors(validationResult.errors);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;
    setAddProduct((prevState) => ({ ...prevState, [name]: updatedValue }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!addProduct.category_id) {
      errors.category_id = "Bu alan zorunludur";
      isValid = false;
    }

    if (!addProduct.urun_kodu) {
      errors.urun_kodu = "Bu alan zorunludur";
      isValid = false;
    }

    if (!addProduct.name) {
      errors.name = "Bu alan zorunludur";
      isValid = false;
    }

    if (!addProduct.title) {
      errors.title = "Bu alan zorunludur";
      isValid = false;
    }
    if (!addProduct.description) {
      errors.description = "Bu alan zorunludur";
      isValid = false;
    }
    if (!addProduct.old_price) {
      errors.old_price = "Bu alan zorunludur";
      isValid = false;
    }
    if (!addProduct.price) {
      errors.price = "Bu alan zorunludur";
      isValid = false;
    }
    if (!addProduct.cost) {
      errors.cost = "Bu alan zorunludur";
      isValid = false;
    }
    if (!addProduct.color) {
      errors.color = "Bu alan zorunludur";
      isValid = false;
    }
    if (!addProduct.brand) {
      errors.brand = "Bu alan zorunludur";
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
            Urun Ekle
          </Button>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Urun Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ControlInput0">
              <Form.Label>Kategori Id</Form.Label>
              <Form.Control type="input" placeholder="Kategori Id Giriniz" autoFocus name="category_id" value={addProduct.category_id} onChange={handleChange} required />
              {formErrors.category_id && <div className="text-danger">{formErrors.category_id}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Urun Kodu</Form.Label>
              <Form.Control type="input" placeholder="Urun Kodu Giriniz" name="urun_kodu" value={addProduct.urun_kodu} onChange={handleChange} required />
              {formErrors.urun_kodu && <div className="text-danger">{formErrors.urun_kodu}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>Name</Form.Label>
              <Form.Control type="input" placeholder="Name Giriniz" name="name" value={addProduct.name} onChange={handleChange} required />
              {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="input" placeholder="Title Giriniz" name="title" value={addProduct.title} onChange={handleChange} required />
              {formErrors.title && <div className="text-danger">{formErrors.title}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="ControlInput4">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={addProduct.description} onChange={handleChange} />
              {formErrors.description && <div className="text-danger">{formErrors.description}</div>}
            </Form.Group>
            <Form.Group controlId="ControlInput5">
              <Form.Check type="checkbox" id="isNewProductSwitch" label="Stock?" name="stock" checked={addProduct.stock} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput6">
              <Form.Label>Old Price</Form.Label>
              <Form.Control type="number" placeholder="Old Price Giriniz" name="old_price" value={addProduct.old_price} onChange={handleChange} />
              {formErrors.old_price && <div className="text-danger">{formErrors.old_price}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput7">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Price Giriniz" name="price" value={addProduct.price} onChange={handleChange} />
              {formErrors.price && <div className="text-danger">{formErrors.price}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput8">
              <Form.Label>Cost</Form.Label>
              <Form.Control type="number" placeholder="Cost Giriniz" name="cost" value={addProduct.cost} onChange={handleChange} />
              {formErrors.cost && <div className="text-danger">{formErrors.cost}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput9">
              <Form.Label>Color</Form.Label>
              <Form.Control type="input" placeholder="Color Giriniz" name="color" value={addProduct.color} onChange={handleChange} />
              {formErrors.color && <div className="text-danger">{formErrors.color}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput10">
              <Form.Label>Brand</Form.Label>
              <Form.Control type="input" placeholder="Brand Giriniz" name="brand" value={addProduct.brand} onChange={handleChange} />
              {formErrors.brand && <div className="text-danger">{formErrors.brand}</div>}
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="isActiveCheckbox">
                  <Form.Check type="checkbox" id="isActiveSwitch" label="Aktif mi?" name="isActive" checked={addProduct.isActive} onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="isFavoriteCheckbox">
                  <Form.Check type="checkbox" id="isFavoriteSwitch" label="Favori mi?" name="isFavorite" checked={addProduct.isFavorite} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="isNewProductCheckbox">
                  <Form.Check type="checkbox" id="isNewProductSwitch" label="Yeni Ürün mü?" name="isNewProduct" checked={addProduct.isNewProduct} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          {axiosErrors && (
            <div className="alert alert-danger mt-4 text-center" role="alert">
              {axiosErrors}
            </div>
          )}
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

      {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}

      <h2>Urunler</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              {/* <th scope="col">#Id</th> */}
              <th scope="col">Urun Kodu</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Stock</th>
              <th scope="col">Old Price</th>
              <th scope="col">Price</th>
              <th scope="col">Cost</th>
              <th scope="col">Color</th>
              <th scope="col">Brand</th>
              <th scope="col">isActive</th>
              <th scope="col">isFavorite</th>
              <th scope="col">isNewProduct</th>
              <th scope="col">Guncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((item) => (
                <tr key={`${item._id}`}>
                  <td>{item.urun_kodu}</td>
                  <td>{item.name}</td>
                  <td>{item.title}</td>
                  <td>{item.stock ? "Var" : "Yok"}</td>
                  <td>{item.old_price}</td>
                  <td>{item.price}</td>
                  <td>{item.cost}</td>
                  <td>{item.color}</td>
                  <td>{item.brand}</td>
                  <td>{item.isActive ? "Aktif" : "Pasif"}</td>
                  <td>{item.isFavorite ? "Evet" : "Hayır"}</td>
                  <td>{item.isNewProduct ? "Evet" : "Hayır"}</td>
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

export default ProductTable;
