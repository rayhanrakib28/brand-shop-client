import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const oldProduct = useLoaderData();
    const { _id, brand, batch, type, name, image, price, rating, short_description, details } = oldProduct || {};

    const handleUpdateProduct = event => {
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
        const updatedProduct = { brand, batch, type, name, image, price, rating, short_description, details };
        console.log(updatedProduct);
        fetch(`https://tech-shop-server-ecru.vercel.app/product/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Updated!',
                        'Your product has been updated.',
                        'success'
                    )
                    window.location.href = `/product/${_id}`;
                }

            })
    }


    return (
        <div>
            <div className="bg-gray-100 mt-2">
                <h1 className='text-center pt-12 text-3xl font-bold'>Update {name}</h1>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 justify-center items-center lg:grid-cols-3">
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form
                                onSubmit={handleUpdateProduct}
                                className="space-y-4"
                            >
                                <div>
                                    <label className="sr-only" for="name">Name</label>
                                    <input
                                        required
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                                        placeholder="Product Name"
                                        defaultValue={name}
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
                                            defaultValue={image}
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
                                            defaultValue={price}
                                            type="number"
                                            name="pPrice"
                                        />
                                    </div>

                                    <select
                                        className="border p-3 rounded-md"
                                        id="brandName"
                                        defaultValue={brand}
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
                                        defaultValue={type}
                                    >
                                        <option value="phone">Phone</option>
                                        <option value="computer">Computer</option>
                                        <option value="headphone">Headphone</option>
                                        <option value="accessories">Accessories</option>
                                    </select>

                                    <select
                                        className="border p-3 rounded-md"
                                        id="batchId"
                                        defaultValue={batch}
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
                                        defaultValue={rating}
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
                                        defaultValue={short_description}
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
                                        defaultValue={details}
                                        rows="4"
                                        name="pDetails"
                                    ></textarea>
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <button
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Update Product
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

export default UpdateProduct;