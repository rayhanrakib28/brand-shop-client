import { useState } from "react";


const AddProduct = () => {
    const [brand, setBrand] = useState();
    const [type, setType] = useState();
    const productBrand = brand;
    const productType = type;

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.pName.value;
        const productPhoto = form.pImage.value;
        const productPrice = form.pPrice.value;
        const productDescription = form.pDescription.value;
        const product = { productBrand, productType, productName, productPhoto, productPrice, productDescription }
        console.log(product);
    }



    return (
        <div>
            <div className="bg-gray-100 mt-2">
                <h1 className='text-center pt-12 text-3xl font-bold'>Add Your Product Now</h1>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <img className=" normal-case text-xl mb-4" src="https://i.ibb.co/tMFSdqn/logo.png" alt="Priyo Tech" />
                            <p className="max-w-xl text-lg">
                                Explore our top-notch tech products, handpicked from leading brands. Find the perfect blend of innovation, performance, and style in each item. Discover the future of tech today!
                            </p>

                            <div class="mt-8">
                                <a href="/about_us" class="text-2xl font-bold text-pink-600">
                                    0151 4759 4450
                                </a>

                                <address class="mt-2 not-italic">
                                    Uttara, Dhaka-1230, Bangladesh
                                </address>
                            </div>

                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form
                                onSubmit={handleAddProduct}
                                className="space-y-4"
                            >
                                <div>
                                    <label className="sr-only" for="name">Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                                        placeholder="Product Name"
                                        type="text"
                                        id="name"
                                        name='pName'
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                                    <div>
                                        <label className="sr-only" for="email">Product Photo</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                            placeholder="Product Photo URL"
                                            type=""
                                            name="pImage"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" for="price">Price</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                            placeholder="Product Price"
                                            type="number"
                                            name="pPrice"
                                        />
                                    </div>

                                    <select
                                        className="border p-3 rounded-md"
                                        value={brand}
                                        onChange={e => setBrand(e.target.value)}
                                    >
                                        <option value="apple">Apple</option>
                                        <option value="samsung">Samsung</option>
                                        <option value="xiaomi">Xiaomi</option>
                                        <option value="google">Google</option>
                                        <option value="intel">Intel</option>
                                    </select>

                                    <select
                                        className="border p-3 rounded-md"
                                        value={type}
                                        onChange={e => setType(e.target.value)}
                                    >
                                        <option value="phone">Phone</option>
                                        <option value="computer">Computer</option>
                                        <option value="accessories">Accessories</option>
                                    </select>

                                </div>

                                <div>
                                    <label className="sr-only" for="message">Product Description</label>

                                    <textarea
                                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                        placeholder="Product Description"
                                        rows="4"
                                        name="pDescription"
                                    ></textarea>
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <button
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Add Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;