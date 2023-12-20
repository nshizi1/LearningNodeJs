const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.urlencoded());
app.get('/', function(request, response, next) {
    response.send(`
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css' integrity='sha512-b2QcS5SsA8tZodcDtGRELiGv5SaKSk1vDHDaQRda0htPYWZ6046lr3kJ5bAAQdpV2mmA/4v0wQF9MyU6/pDIAg==' crossorigin='anonymous'/>
    <div class="container">
        <h1 class="text-center mt-3 mb-3">Submit form data in Node JS</h1>
        <div class="card">
            <div class="card-header">Sample form</div>
            <div class="card-body"> 
                <form method="POST" action="/">
                    <div class="mb-3">
                        <label>First Name</label>
                        <input type="text" name="first_name" id="first_name" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label>Last Name</label>
                        <input type="text" name="last_name" id="last_name" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label>Email Address</label>
                        <input type="email" name="email_address" id="email_address" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <input type="submit" value="Submit" name="submit_button" class="btn btn-primary"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `);
});
app.post('/', function(request, response, next){
    response.send(request.body);
});
app.listen(2000);