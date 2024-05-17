import express from "express";
import "dotenv/config";
const app = express();
import mongoose,{Schema} from "mongoose";
import cors from "cors"


app.use(cors())

app.use(express.json())

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  image: { 
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model("Product", productSchema);

app.get("/api/products", async (req, res) => {
  const response = await Products.find();
  res.send(response);
});

app.get("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    const products = await Products.findById(id);
    res.send(products);
  });

app.post("/api/products", async (req, res) => {
 const {title,image,desc,price}=req.body;
 const newProduct = new Products({title,image,desc,price});
 await newProduct.save();
 res.send("data elave olundu")
});
app.listen(8080, () => {
  console.log(`Example app istng`);
});



app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const { title, price, desc, image } = req.body;
  const product = await Products.findByIdAndUpdate(id,{title,image,desc,price} )
  res.send(product);
})

app.delete("/api/products/:id", async(req,res)=>{
    const {id}= req.params;
    const product = await Products.findByIdAndDelete(id);
    res.send(product);
  })


mongoose
  .connect(process.env.KEY)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("not conected"));