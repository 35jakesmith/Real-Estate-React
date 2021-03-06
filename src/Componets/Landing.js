import React from 'react'

function Landing() {
  return (
    <section id="add" class="container">
    <div class="form-wrap">
        <h1>Add A Client</h1>
        <form action="/clients/add" method="post">
            <div class="input-group">
                <label for="title">Client Title</label>
                <input type="text" name="title" id="title" class="input-box" placeholder="eg. Suzy Sue" maxlength="100" />
            </div>
            <div class="input-group">
                <label for="address">Address</label>
                <input type="text" name="address" id="address" class="input-box"
                    placeholder="eg. 1600 Pennsylvania Ave NW, Washington, DC 20500-0003, United States"
                    maxlength="100" />
            </div>
            <div class="input-group">
                <label for="phone_num">Phone Number</label>
                <input type="text" name="phone_num" id="phone_num" class="input-box" placeholder="eg. 555-555-5555" />
            </div>
            <div class="input-group">
                <label for="description">Client Description</label>
                <textarea name="description" id="description" class="input-box" placeholder="Any important notes?"
                    rows="10"></textarea>
            </div>
            <div class="input-group">
                <label for="email">Contact Email</label>
                <input type="email" name="email" id="email" class="input-box"
                    placeholder="Enter an email" />
            </div>
            <input type="submit" value="Add Client" class="btn"/>
        </form>
    </div>
</section>
    
  )
}

export default Landing