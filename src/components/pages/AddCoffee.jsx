import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Coffee added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <h3>Add Coffee</h3>
            <div className='w-10/12 mx-auto bg-bgPrimary rounded-lg'>
                <div className='p-16'>
                    <form onSubmit={handleAddCoffee}>
                        <div className='grid grid-cols-2 gap-8'>
                            <div>
                                <div>
                                    <label htmlFor="Name">Name:</label> <br />
                                    <input className="inputField" type="text" id="name" name="name" placeholder="Enter Name" />
                                </div>
                                <div>
                                    <label htmlFor="quantity">Quantity:</label><br />
                                    <input className="inputField" type="text" id="quantity" name="quantity" placeholder="Enter quantity" />
                                </div>
                                <div>
                                    <label htmlFor="Supplier">Supplier:</label><br />
                                    <input className="inputField" type="text" id="supplier" name="supplier" placeholder="Enter Supplier" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="Taste">Taste:</label><br />
                                    <input className="inputField" type="text" id="taste" name="taste" placeholder="Enter Taste" />
                                </div>
                                <div>
                                    <label htmlFor="Category">Category:</label><br />
                                    <input className="inputField" type="text" id="category" name="category" placeholder="Enter Category" />
                                </div>
                                <div>
                                    <label htmlFor="Details">Details:</label><br />
                                    <input className="inputField" type="text" id="details" name="details" placeholder="Enter Details" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Photo">Photo:</label><br />
                            <input className="inputField" type="text" id="photo" name="photo" placeholder="Enter Photo URL" />
                        </div>
                        <button className='btn w-full bg-btnBg text-black' type="submit">Add Coffee</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddCoffee;