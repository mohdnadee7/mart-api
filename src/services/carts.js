
const cartEntity  = require('../entites/carts');
const productService = require("../services/product");

const getCartItemByUserId = async (req, res) => {
  try {
    const cartItems = await cartEntity.find({ UserId: req.query.UserId });
    const productIds = cartItems.map((item) => item.ProductId);

    const cartProducts = await productService.getCartProductById(productIds);

    res.status(200).json(cartProducts);
  } catch (error) {
    res.status(400).json(error);
  }
};


const addItemInCartByUserId = async (req, res) => {
    try {
        const addToCart = new cartEntity(req.body);
        const user = await addToCart.save();
     
        res.status(200).Json(user, "Item added in cart");
    } catch (error) {
      res.status(400).json(error);
    }
  };

  const removeCartById = async (req, res) => {
    try {
      const { cartId } = req.body.id;  
      if (!cartId) {
        return res.status(400).json({ message: "Cart ID is required" });
      }

      const deletedCartItem = await cartEntity.findByIdAndDelete(cartId);  
      if (!deletedCartItem) {
        return res.status(404).json({ message: "Cart item not found" });
      }

      res.status(200).json({ message: "Item removed from cart", cartItem: deletedCartItem });
    } catch (error) {
      console.error("Error removing item from cart:", error);
      res.status(400).json({ error: error.message });
    }
  };
  

module.exports = {
    getCartItemByUserId,
    addItemInCartByUserId,
    removeCartById
}

