import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Select from "react-select"
import Dropval from '../../data/Dropval';
import { createProduct } from '../../Redux/Action/ProductAction';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';

const FormSelling = ({ history }) => {

    const [pName, setPname] = useState("")
    const [pTitle, setPtitle] = useState("")
    const [pDis, setPdis] = useState("")
    const [images, setImages] = useState("");
    const [price, setPrice] = useState("")
    const [afterPrice, setAfterPrice] = useState("")
    const [discount, setDiscount] = useState("")
    const [noStock, setNostock] = useState("")
    const [color, setColor] = useState("")
    const [size, setSize] = useState([])
    const [age, setAge] = useState("")
    const [cat, setCat] = useState("")
    const [subCat, setSelect] = useState("")
    const [keyFeature, setKeyFeature] = useState("")


    let type = null;
    if (subCat === "Entertainment, Technology & Electronics") {
        type = Dropval.Electronic
    }
    if (subCat === "Fashion & Apparel") {
        type = Dropval.Fashion
    }
    if (subCat === "Food") {
        type = Dropval.Food
    }
    const changeSelectOption = (e) => {
        setSelect(e.value);
        setCat(e.value)
    }
    // const createProductImagesChange = (e) => {
    //     const files = Array.from(e.target.files);

    //     setImages([]);
    //     setImagesPreview([]);

    //     files.forEach((file) => {
    //         const reader = new FileReader();

    //         reader.onload = () => {
    //             if (reader.readyState === 2) {
    //                 setImagesPreview((old) => [...old, reader.result]);
    //                 setImages((old) => [...old, reader.result]);
    //             }
    //         };

    //         reader.readAsDataURL(file);
    //     });
    // };
    const dispatch = useDispatch()

    const newProduct = useSelector((state) => state.newProduct)
    const { error, loading } = newProduct;

    // useEffect(() => {
    //     if (productInfo) {
    //         history.push("/");
    //         dispatch({ type: NEW_PRODUCT_RESET })
    //     }
    // }, [dispatch, error, loading])

    const submitDataHandler = (e) => {
        e.preventDefault();
        // const myForm = new FormData();

        // myForm.set("name", pName);
        // myForm.set("title", pTitle);
        // myForm.set("description", pDis);
        // myForm.set("price", price);
        // myForm.set("afterdiscount", afterPrice);
        // myForm.set("discount", discount)
        // myForm.set("countInStock", noStock)
        // myForm.set("color", color)
        // myForm.set("size", size)
        // myForm.set("age", age)
        // myForm.set("cat", cat)
        // myForm.set("subcat", subCat);
        // myForm.set("keys", keyFeature);
        // myForm.set("images", images)
        // // images.forEach((image) => {
        // //     myForm.append("images", image);
        // // });
        dispatch(createProduct(pName, pTitle, pDis, price, afterPrice, discount, noStock, color, size, age, cat, subCat, keyFeature, images));
        console.log(size, subCat, "vvbvbvn");

    }
    return (
        <>
            <div>
                <div className="contentArea">
                    {error && <Message variant="alert-danger"> {error}</Message>}
                    {loading && <Loading />}
                    <div className="p-4 container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <h6 className="border-bottom p-3 mb-0 card-title"><i className="bi bi-bell me-2"> </i>Start Selling</h6>
                                    <div className="card-body">
                                        <form onSubmit={submitDataHandler}>
                                            <div className='row mb-3'>

                                                <div className=" col-md-4">
                                                    <label htmlFor="exampleProduct" className="form-label">Product Name</label><input name="products" placeholder="Enter Product name" type="text" value={pName} className="form-control" onChange={(e) => setPname(e.target.value)} />
                                                </div>
                                                <div className=" col-md-4">
                                                    <label htmlFor="exampleTitlle" className="form-label">Product Title</label><input name="title" placeholder="Enter Product title" type="text" className="form-control" value={pTitle} onChange={(e) => setPtitle(e.target.value)} />
                                                </div>
                                                <div className=" col-md-4">
                                                    <label htmlFor="exampleDis" className="form-label">Product Description</label><input name="description" placeholder="Enter Product description" type="text" className="form-control" value={pDis} onChange={(e) => setPdis(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label htmlFor="exampleFile" className="form-label">Product Image</label>
                                                <div className="col-md-12">

                                                    <input type="file" name="images" className="form-control" onChange={(e) => setImages(e.target.files[0])} />
                                                </div>
                                            </div>
                                            {/* <div className="row">

                                            <h6 className="fw-bold mb-3 p-3 btn-info">Price Details</h6>

                                        </div> */}
                                            <div className='row mb-3'>

                                                <div className="col-md-4">
                                                    <label className="form-label">Product Actual Cost:</label><input name="price" placeholder="Enter Product Actual Cost:" type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label">After  discount Price </label>
                                                    <input name="title" placeholder="Enter Product value" type="text" className="form-control" value={afterPrice} onChange={(e) => setAfterPrice(e.target.value)} />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="exampleDis" className="form-label">Product discount</label><input name="description" placeholder="Enter Product description" type="number" className="form-control" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                                                </div>
                                            </div>
                                            {/* <div className="col-12">

                                            <h6 className="fw-bold mb-3 p-3 btn-primary">Stock</h6>

                                        </div> */}
                                            <div className='row mb-3'>

                                                <div className="col-md-6">
                                                    <label className="form-label">Is it in Stock ?</label>
                                                    <Select options={Dropval.yesno}></Select>

                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Number of stock </label>
                                                    <input name="title" placeholder="Enter Product value" type="number" className="form-control" value={noStock} onChange={(e) => setNostock(e.target.value)} />
                                                </div>
                                            </div>
                                            {/* <div className="col-12">

                                            <h6 className="fw-bold mb-3 py-2 px-3 btn-secondary">Product Information</h6>

                                        </div> */}
                                            <div className='row mb-3'>

                                                <div className="col-md-4">
                                                    <label className="form-label">Color</label>
                                                    <Select options={Dropval.color} placeholder="Select the product color" isSearchable={true} value={Dropval.color.filter(obj => obj.value === color)} onChange={(e) => setColor(e.value)}></Select>

                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label">Size </label>
                                                    <Select options={Dropval.size} placeholder="Select the product color" isSearchable value={Dropval.size.filter(obj => obj.value === size)} onChange={(e) => setSize(e.value)}></Select>
                                                </div>

                                                <div className='col-md-4'>

                                                    <label className="form-label w-100">Select age</label>
                                                    <div className='d-flex align-items-center gap-3'>
                                                        <div className="form-check w-100">
                                                            <input name="radio1" type="radio" className="form-check-input" value="5-9" checked={age === "5-9"} onChange={(e) => setAge(e.target.value)} />
                                                            <label className="form-check-label form-label" >5 - 9</label>
                                                        </div>
                                                        <div className="form-check w-100">
                                                            <input name="radio1" type="radio" className="form-check-input" value="10-16" checked={age === "10-16"} onChange={(e) => setAge(e.target.value)} />
                                                            <label className="form-check-label form-label" >10 - 16</label>
                                                        </div>
                                                        <div className="form-check w-100">
                                                            <input name="radio1" type="radio" className="form-check-input" value="17-21" checked={age === "17-21"} onChange={(e) => setAge(e.target.value)} />
                                                            <label className="form-check-label form-label" >17 - 21</label>
                                                        </div>
                                                        <div className="form-check w-100">
                                                            <input name="radio1" type="radio" className="form-check-input" value="22-30" checked={age === "22-30"} onChange={(e) => setAge(e.target.value)} />
                                                            <label className="form-check-label form-label">22 - 30</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mt-3">
                                                    <div className="mb-3">
                                                        <label htmlFor="examplePassword" className="form-label">Categories</label>
                                                        <Select options={Dropval.Categories} onChange={changeSelectOption} placeholder="Select product Category" value={Dropval.Categories.filter(obj => obj.value === cat)}></Select>

                                                    </div>
                                                </div>
                                                <div className="col-md-6 mt-3">
                                                    <div className="mb-3">
                                                        <label htmlFor="examplePassword" className="form-label">SubCategories</label>
                                                        <Select options={type} placeholder="Select product subCategory" value={Dropval.Fashion.filter(obj => obj.value === subCat)} onChange={(e) => setSelect(e.value)}></Select>

                                                    </div>
                                                </div>

                                                <div className="col-md-12 ">
                                                    <div className="mb-3">
                                                        <label htmlFor="examplePassword" className="form-label">Key features or Identity</label>
                                                        <input className='form-control' value={keyFeature} onChange={(e) => setKeyFeature(e.target.value)} placeholder="Write some identity of your product e.g. color, type, etc" />

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-md-6">

                                                    <button type="submit" className="btn p-2 btn-success w-100">Add Product</button>
                                                </div>
                                                <div className="col-md-6">

                                                    <button type="reset" className="btn p-2 btn-danger w-100">Reset </button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )

}
export default FormSelling