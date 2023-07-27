import "./cart.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartCard from "./cartCard";
import FormValidation from "../formValidation/formValidation";

const Cart = (props) => {
  const { quantity, addCart } = props;
  const [show, setShow] = useState(false);
  const [addModal, setAddModal] = useState([]);
  const [idOder, setIdOder] = useState({})
  const [quantityID, setQuantityID] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const idAddCart = addCart.find((mealID) => mealID.id);
  console.log(idAddCart)
  
  useEffect(() => {
    
     const abc = addModal.includes(idAddCart) 
     if(abc === false){
       setAddModal(addModal.concat(addCart));
     } else {
         const inputValueID = addCart[1];         
         console.log(inputValueID)
         
     }
    
  }, [props]);


  const getInforState = addModal.map((item, id) => {
    return <CartCard data={item} key={id} />;
  });

  console.log(addModal);

  return (
    <div className="Cart">
      <div className="button_cart">
        <Button variant="none" style={{ outline: "none" }} onClick={handleShow}>
          <i class="bi bi-cart-fill" style={{ height: "30px" }}></i>
          <div>Your Cart</div>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Your Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {getInforState}
            </div>
            <div>
              <FormValidation/>
            </div>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="quantityOder"> {quantity} </div>
    </div>
  );
};

export default Cart;
