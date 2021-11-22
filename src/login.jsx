import React from 'react'

function login() {
    return (
        <div align="center">
            <h1>Login Form</h1>
            <div class="form-group">
                <div class="col-md-4">
                    <label for="exampleInputPassword1">Username</label>
                    <input type="text" class="form-control mx-sm-3" id="exampleInputEmail1" placeholder="user name" />
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-4">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control mx-sm-3" id="exampleInputEmail1" placeholder="Password" />
                </div>
            </div>
        </div>
    )
}

export default login
