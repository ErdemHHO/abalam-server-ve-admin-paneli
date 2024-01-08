import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from 'react-router-dom' 

export const AnnouncementTable = () => {

  const [user] = useState(JSON.parse(localStorage.getItem('adminProfile')));

  const navigate=useNavigate();

    useEffect(() => {
      if (!user) {
      navigate("/signin");
      }
  }, []);

  const [updateAdmin, setUpdateAdmin] = useState({
    old_password:"",
    newPassword: "",
    newConfirmPassword: "",
  });

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [admins, setAdmins] = useState([]);
  const [admin, setAdmin] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);





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
      const result = await axios.get("/api/admin/admins");
      setAdmins(result.data.admins);
    };
    fetchData();
  }, []);
  const adminId=user.result.adminId;
  console.log("admin:",adminId)
  const deleteFunction = async (id) => {
    console.log("admin:",adminId)
    console.log("id")
    if(id===adminId){
      toast.error("Kendi Profilinizi Silemezsiniz", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }else{
    try {
      const adminler = admins.filter((item) => item._id !== id);
      const result = await axios.delete(`/api/admin/${id}`);
      setAdmins(adminler);
      toast.success("Admin başarıyla silindi.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Admin silinirken bir hata oluştu.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
    }

  };


  const updateFunction = async (id) => {
      try {
        const result = await axios.patch(`/api/admin/${id}`, updateAdmin);
        setAxiosErrors("");
        setUpdateAdmin({
          old_password: "",
          newPassword: "",
          newConfirmPassword: "",
        });
        handleClose3();
        toast.success("Şifre Güncelleme Başarıyla Tamamlandı", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      } catch (error) {
        console.log(error.response.data);
        setAxiosErrors(error.response.data.message);
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      }
  };


  const addFunction = async () => {
    const validationResult = validateForm();
    if (validationResult.isValid) {
      try {
        const result = await axios.post(`/api/admin/signup`, admin);
        setAxiosErrors("");
        setAdmins([...admins, result.data.newAdmin]);
        setAdmin({
          name: "",
          surname: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        handleClose();
        toast.success("Admin başarıyla eklendi.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      } catch (error) {
        console.log(error.response.data);
        setAxiosErrors(error.response.data.message);
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      }
    } else {
      setFormErrors(validationResult.errors);
    }
  };


  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;
    setAdmin((prevState) => ({ ...prevState, [name]: updatedValue }));
  };

  const handleChange2 = (event) => {
    const { name, type, value, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;
    setUpdateAdmin((prevState) => ({ ...prevState, [name]: updatedValue }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!admin.name) {
      errors.name = "Bu alan zorunludur";
      isValid = false;
    }
    if (!admin.surname) {
      errors.surname = "Bu alan zorunludur";
      isValid = false;
    }
    if (!admin.email) {
      errors.email = "Bu alan zorunludur";
      isValid = false;
    }
    if (!admin.password) {
      errors.password = "Bu alan zorunludur";
      isValid = false;
    }
    if (!admin.confirmPassword) {
      errors.confirmPassword = "Bu alan zorunludur";
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
            Admin Ekle
          </Button>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Adı</Form.Label>
              <Form.Control type="input" placeholder="Ad giriniz" name="name" value={admin.name} onChange={handleChange} required />
              {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Soyadı</Form.Label>
              <Form.Control type="input" placeholder="Soyad giriniz" name="surname" value={admin.surname} onChange={handleChange} required />
              {formErrors.surname && <div className="text-danger">{formErrors.surname}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-Posta</Form.Label>
              <Form.Control type="email" placeholder="E-Posta Giriniz" name="email" value={admin.email} onChange={handleChange} required />
              {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Şifre</Form.Label>
              <Form.Control type="password"  placeholder="Şifre Giriniz" name="password" value={admin.password} onChange={handleChange} required />
              {formErrors.password && <div className="text-danger">{formErrors.password}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Şifre Tekrar</Form.Label>
              <Form.Control type="password" placeholder="Şifreyi Tekrar Giriniz" name="confirmPassword" value={admin.confirmPassword} onChange={handleChange} required />
              {formErrors.confirmPassword && <div className="text-danger">{formErrors.confirmPassword}</div>}
            </Form.Group>
          </Form>
          {axiosErrors && <span className="text-danger">{axiosErrors}</span>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
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
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>



      <h2>Adminler</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Admin ID</th>
              <th scope="col">Adı</th>
              <th scope="col">Soyadı</th>
              <th scope="col">E-Posta</th>
              <th scope="col">Şifre Güncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>
            {admins &&
              admins.map((item) => (
                <tr key={`${item._id}`}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.email}</td>
                  <td>
                    <Button variant="warning" size="sm" onClick={() => handleShow3()}>
                      Şifre Güncelle
                    </Button>
                    {/* <!-- Modal3 --> */}
                    <Modal show={show3} onHide={handleClose3}>
                      <Modal.Header closeButton>
                        <Modal.Title>Admin Şifre Güncelle</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group className="mb-3">
                            <Form.Label>Eski Şifre</Form.Label>
                            <Form.Control type="password"  placeholder="Şifre Giriniz" name="old_password" onChange={handleChange2} required />

                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Yeni Şifre</Form.Label>
                            <Form.Control type="password"  placeholder="Şifre Giriniz" name="newPassword" onChange={handleChange2} required />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Yeni Şifre Tekrar</Form.Label>
                            <Form.Control type="password" placeholder="Şifreyi Tekrar Giriniz" name="newConfirmPassword" onChange={handleChange2} required />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose3}>
                          Kapat
                        </Button>
                        <Button
                          disabled={!updateAdmin.newPassword || !updateAdmin.newConfirmPassword|| !updateAdmin.old_password}
                          variant="primary"
                          onClick={() => {
                            updateFunction(item._id);
                          }}
                        >
                          Kaydet
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                  <td>
                    {/* <!-- Modal2 --> */}
                    <Modal show={show2} onHide={handleClose2}>
                      <Modal.Header closeButton>
                        <Modal.Title>Admin Silmek Üzeresiniz</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Admini silmek istediğinize emin misiniz ?</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                          Kapat
                        </Button>
                        <Button variant="danger" onClick={() => {
                        deleteFunction(item._id);
                        handleClose2();
                        }}>
                        Evet
                      </Button>
                      </Modal.Footer>
                    </Modal>
                    <Button variant="danger" size="sm" onClick={() => handleShow2()}>
                      Sil
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </main>
  );
};

export default AnnouncementTable;
