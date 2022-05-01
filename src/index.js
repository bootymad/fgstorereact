import ReactDOM from "react-dom/client";
import "./styles.css";
import Products from "./Products";
import {ProdMoonDust, ProdSolarWind, ProdStarDew} from "./images/images.js";
import Footer from "./Footer";
import Header from "./Header";
import Cart from "./Cart";
import { useState } from "react";




const productList = [
    {
        name: 'Moon Dust',
        price: 16,
        desc: 'Maximum Texture Powder',
        img: ProdMoonDust,
        descFull: `Aloe Barbadensis (Aloe Vera) Leaf Juice*, Water (Aqua), Silica Silylate, Silica Dimethicone Silylate, Hydrolyzed Chestnut Extract, Hydrolyzed Adansonia Digitata (Baobab) Seed Protein, Hydrolyzed Soy Protein, Hydrolyzed Quinoa, Lavandula Angustifolia (Lavender) Flower Extract*, Camellia Sinensis (Green Tea) Leaf Extract*, Tapioca Starch, Galactoarabinan, Coco-Glucoside, Fragrance, Dimethicone/Vinyl Dimethicone Crosspolymer, Silica, VP/VA Copolymer, Phenoxyethanol, Sodium Benzoate, Citric Acid.
        
        *Organic Ingredient
        `

    },
    {
        name: 'Solar Wind',
        price: 18,
        desc: 'Modern Sea Salt Spray',
        img: ProdSolarWind,
        descFull: `Aloe Barbadensis (Aloe Vera) Leaf Juice*, Water (Aqua), Alcohol Denat., Glycerin*, Hydrolyzed Quinoa, Hydrolyzed Adansonia Digitata (Baobab) Seed Protein, Hydrolyzed Rice Protein, Lavandula Angustifolia (Lavender) Flower Extract*, Camellia Sinensis (Green Tea) Leaf Extract*, Xylitylglucoside, Coco-Glucoside, Anhydroxylitol, Dead Sea Salt, Xylitol, Galactoarabinan, Fragrance, VP/VA Copolymer, Phenoxyethanol, Benzyl Alcohol.

        *Organic Ingredient
        `
    },
    {
        name: 'Star Dew',
        price: 20,
        desc: 'Hybrid Grooming Cream',
        img: ProdStarDew,
        descFull: `Aloe Barbadensis (Aloe Vera) Leaf Juice*, Water (Aqua), Caprylic/Capric Triglyceride, Glyceryl Stearate SE, Cetearyl Alcohol, Glycerin*, Dimethicone, Cetearyl Glucoside, Hydrolyzed Chestnut Extract, Hydrolyzed Adansonia Digitata (Baobab) Seed Protein, Hydrolyzed Quinoa, Lavandula Angustifolia (Lavender) Flower Extract*, Camellia Sinensis (Green Tea) Leaf Extract*, Hydrolyzed Soy Protein, Panthenol, Coconut Alkanes, Pullulan, Sorbitol, Xylitol, Trehalose, Coco-Caprylate/Caprate, Acacia Senegal Gum, Simmondsia Chinensis (Jojoba) Seed Oil*, Salvia Hispanica (Chia) Seed Oil, Galactoarabinan, Tocopheryl Acetate, Cinnamidopropyltrimonium Chloride, Behentrimonium Methosulfate, Fragrance, Olealkonium Chloride, Guar Hydroxypropyltrimonium Chloride, Polyquaternium-7, Polyquaternium-55, Phenoxyethanol, Benzyl Alcohol. 

        *Organic Ingredient`
    }
]





function App() {
    const [cart, setCart] = useState({});

    console.log(Object.keys(cart))
    console.log(cart);
    return (
        <div className="main-container">
            <Header />
            <Products products={productList} cartUpdater={setCart} cart={cart} />
            {Object.keys(cart).length === 0 ? null : <Cart cart={cart} cartUpdater={setCart} />}
            
            <Footer copyText="FLYGUY Hair, LLC 2022" />


        </div>
        
    )
}




ReactDOM.createRoot(document.querySelector('#root')).render(<App />);