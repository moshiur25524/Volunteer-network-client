import React from 'react';

const Register = () => {
    return (
        <form>
            <div className='w-50 mx-auto my-5'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input type="text" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name='password' class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Date</label>
                    <input type="text" name='password' class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <input type="text" name='password' class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Organize Books at the Library</label>
                    <input type="text" name='password' class="form-control" id="exampleInputPassword1" />
                </div>

                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="button">Register</button>
                </div>
            </div>
        </form>
    );
};

export default Register;