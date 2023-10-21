
import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.pName.value;
        const image = form.pImage.value;
        const brand = document.getElementById("brandName").value;
        const batch = document.getElementById("batchId").value;
        const type = document.getElementById("brandType").value;
        const rating = document.getElementById("productRating").value;
        const price = form.pPrice.value;
        const short_description = form.pShortDesc.value;
        const details = form.pDetails.value;
        const newProduct = { brand, batch, type, name, image, price, rating, short_description, details };
        console.log(newProduct);
        fetch('https://tech-shop-server-ecru.vercel.app/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your product has been added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                }
            })
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
                                        required
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
                                            required
                                            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                            placeholder="Product Photo URL"
                                            type=""
                                            name="pImage"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" for="price">Price</label>
                                        <input
                                            required
                                            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                            placeholder="Product Price"
                                            type="number"
                                            name="pPrice"
                                        />
                                    </div>

                                    <select
                                        className="border p-3 rounded-md"
                                        id="brandName"
                                    >
                                        <option value="apple">Apple</option>
                                        <option value="samsung">Samsung</option>
                                        <option value="xiaomi">Xiaomi</option>
                                        <option value="google">Google</option>
                                        <option value="intel">Intel</option>
                                        <option value="jbl">JBL</option>
                                    </select>

                                    <select
                                        className="border p-3 rounded-md"
                                        id="brandType"
                                    >
                                        <option value="phone">Phone</option>
                                        <option value="computer">Computer</option>
                                        <option value="headphone">Headphone</option>
                                        <option value="accessories">Accessories</option>
                                    </select>

                                    <select
                                        className="border p-3 rounded-md"
                                        id="batchId"
                                    >
                                        <option value="1">Batch 1 Apple</option>
                                        <option value="2">Batch 2 Samsung</option>
                                        <option value="3">Batch 3 Xiaomi</option>
                                        <option value="4">Batch 4 Google</option>
                                        <option value="5">Batch 5 Intel</option>
                                        <option value="6">Batch 6 JBL</option>
                                    </select>

                                    <select
                                        className="border p-3 rounded-md"
                                        id="productRating"
                                    >
                                        <option value="5">5 Star</option>
                                        <option value="4">4 Star</option>
                                        <option value="3">3 Star</option>
                                        <option value="2">2 Star</option>
                                        <option value="1">1 Star</option>

                                    </select>

                                </div>
                                <div>
                                    <label className="sr-only" for="name">Product Short Description</label>
                                    <input
                                        required
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm border outline-none"
                                        placeholder="Product Short Description"
                                        type="text"
                                        name='pShortDesc'
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" for="message">Product Details</label>

                                    <textarea
                                        required
                                        className="w-full rounded-lg border outline-none border-gray-200 p-3 text-sm"
                                        placeholder="Product Details"
                                        rows="4"
                                        name="pDetails"
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