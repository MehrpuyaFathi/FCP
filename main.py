from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from typing import List, Optional
import json
import os
from pathlib import Path

app = FastAPI(title="Eclat d'Or API")

# CORS configuration for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# JSON database file paths
BASE_DIR = Path(__file__).resolve().parent
DIST_DIR = os.path.join(BASE_DIR, "dist")
DATA_DIR = os.path.join(BASE_DIR, "data")
PRODUCTS_FILE = os.path.join(DATA_DIR, "products.json")
CATEGORIES_FILE = os.path.join(DATA_DIR, "categories.json")
CONTACTS_FILE = os.path.join(DATA_DIR, "contacts.json")
ORDERS_FILE = os.path.join(DATA_DIR, "orders.json")

if os.path.exists(DIST_DIR):
    app.mount("/assets", StaticFiles(directory=os.path.join(DIST_DIR, "assets")), name="assets")

# Function to create the data directory and JSON files if they don't exist
def init_db():
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
    if not os.path.exists(PRODUCTS_FILE):
        with open(PRODUCTS_FILE, "w", encoding="utf-8") as f:
            json.dump([], f, indent=4)
    if not os.path.exists(CATEGORIES_FILE):
        with open(CATEGORIES_FILE, "w", encoding="utf-8") as f:
            json.dump([], f, indent=4)
    if not os.path.exists(CONTACTS_FILE):
        with open(CONTACTS_FILE, "w", encoding="utf-8") as f:
            json.dump([], f, indent=4)
    if not os.path.exists(ORDERS_FILE):
        with open(ORDERS_FILE, "w", encoding="utf-8") as f:
            json.dump([], f, indent=4)

init_db()

# Helper functions to read and write JSON files
def read_json(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)

def write_json(filepath, data):
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)

# Pydantic data models for requests
class ContactForm(BaseModel):
    name: str
    email: str
    message: str

class ProductModel(BaseModel):
    name: str
    description: str
    material: str
    price: float
    imageUrl: str
    category: str

class OrderItem(BaseModel):
    product_id: int
    quantity: int
    size: Optional[str] = None
    color: Optional[str] = None

class OrderForm(BaseModel):
    customer_name: str
    customer_email: str
    customer_phone: str
    shipping_address: str
    items: List[OrderItem]
    total_price: float

# ----------------------------------------------------
# APIs
# ----------------------------------------------------

@app.get("/api/products")
async def get_products(category: Optional[str] = None):
    """Get all products, optionally filtered by category"""
    products = read_json(PRODUCTS_FILE)
    if category:
        products = [p for p in products if p.get("category", "").lower() == category.lower()]
    return products

@app.get("/api/categories")
async def get_categories():
    """Get all categories with their details and images"""
    return read_json(CATEGORIES_FILE)

@app.get("/api/products/{product_id}")
async def get_product(product_id: int):
    """Get a specific product by ID"""
    products = read_json(PRODUCTS_FILE)
    for p in products:
        if p["id"] == product_id:
            return p
    raise HTTPException(status_code=404, detail="Product not found")

@app.post("/api/products")
async def create_product(product: ProductModel):
    """Admin: Add a new product"""
    products = read_json(PRODUCTS_FILE)
    new_id = max([p["id"] for p in products], default=0) + 1
    new_product = product.model_dump() if hasattr(product, 'model_dump') else product.dict()
    new_product["id"] = new_id
    products.append(new_product)
    write_json(PRODUCTS_FILE, products)
    return {"status": "success", "product": new_product}

@app.put("/api/products/{product_id}")
async def update_product(product_id: int, product: ProductModel):
    """Admin: Update an existing product"""
    products = read_json(PRODUCTS_FILE)
    for i, p in enumerate(products):
        if p["id"] == product_id:
            updated_data = product.model_dump() if hasattr(product, 'model_dump') else product.dict()
            updated_data["id"] = product_id
            products[i] = updated_data
            write_json(PRODUCTS_FILE, products)
            return {"status": "success", "product": updated_data}
    raise HTTPException(status_code=404, detail="Product not found")

@app.delete("/api/products/{product_id}")
async def delete_product(product_id: int):
    """Admin: Delete a product"""
    products = read_json(PRODUCTS_FILE)
    filtered_products = [p for p in products if p["id"] != product_id]
    if len(products) == len(filtered_products):
        raise HTTPException(status_code=404, detail="Product not found")
    write_json(PRODUCTS_FILE, filtered_products)
    return {"status": "success", "message": "Product deleted successfully"}

@app.post("/api/contact")
async def submit_contact(form: ContactForm):
    """Submit a contact us message"""
    contacts = read_json(CONTACTS_FILE)
    
    # Extract data and assign a unique ID
    new_contact = form.model_dump() if hasattr(form, 'model_dump') else form.dict()
    new_contact["id"] = len(contacts) + 1
    
    contacts.append(new_contact)
    write_json(CONTACTS_FILE, contacts)
    
    return {"status": "success", "message": "Your message has been successfully received."}

@app.post("/api/orders")
async def submit_order(form: OrderForm):
    """Submit a new customer order"""
    orders = read_json(ORDERS_FILE)
    new_order = form.model_dump() if hasattr(form, 'model_dump') else form.dict()
    new_order["id"] = len(orders) + 1
    orders.append(new_order)
    write_json(ORDERS_FILE, orders)
    return {"status": "success", "order_id": new_order["id"], "message": "Order successfully placed!"}


@app.get("/{full_path:path}")
async def serve_vue(full_path: str):
    if full_path.startswith("api"):
        raise HTTPException(status_code=404, detail="API route not found")
    
    index_file = os.path.join(DIST_DIR, "index.html")
    
    if os.path.exists(index_file):
        return FileResponse(str(index_file))

    return {"error": f"File not found at {index_file}"}