import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { remove } from "../store/cartSlice";

const Cart = () => {

  const products = useSelector(state => state.cart);

  const dispatch = useDispatch();
  const removeToCart = (id) => {
    dispatch(remove(id));
  }

  const cards = products.map(product => (
    <div className="col-md-3">
      <Card key={product.id} style={{ width: '18rem' }}>
        <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{width:"100px", height:"130px"}} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Price: {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ background:"white" }}>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <div>
      {cards}
    </div>
  )
}

export default Cart;