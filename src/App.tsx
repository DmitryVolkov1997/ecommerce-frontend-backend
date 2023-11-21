import {Route, Routes} from 'react-router-dom'
import './App.css'
import {CheckoutPage, HomePage, ProductDetailsPage} from 'pages'


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/product/:slug" element={<ProductDetailsPage/>}/>
                <Route path="/checkout" element={<CheckoutPage/>}/>
            </Routes>
        </>
    )
}

export default App
