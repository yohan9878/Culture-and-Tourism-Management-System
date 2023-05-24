var chai = require("chai");
let { expect, assert } = require("chai");

var jp = require("jsonpath");

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

let id;

// 1. Testing User login API
describe("1. HTTP User Login Post", () => {
	it("Login User (POST)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.post("/auth/")
			.send({
				email: "admin.1@gmail.com",
				password: "poweruser@ctms",
			});

		expect(res).to.have.status(200);
	});
});

// 2. Testing User register API
describe("2. HTTP User Register Post", () => {
	it("Register User (POST)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.post("/auth/user")
			.send({
				firstname: "Udul",
				lastname: "Dulsara",
				email: "udul2023@gmail.com",
				mobile: "0758621230",
				nationality: "FR",
				nic_passport: "200009856417",
				gender: "male",
				address_country: "Australia",
				password: "uduldulsara123",
			});

		id = res.body.user._id;

		if (res.status == 200) {
			expect(res.body.message).to.equal(
				"User Registered Succefully !",
			);
		} else {
			expect(res.body.message).to.equal("User Already Exists !");
		}
	});
});

// 3. Testing get all users API
describe("3. HTTP Retrieve Registered Users Get", () => {
	it("Retrieve Users (GET)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.get("/user/");

		expect(res).to.have.status(200);
		expect(res.body.message).to.equal("Fetching users successfull !");

		console.log(res.body);
	});
});

// 4. Testing get specific user API
describe("4. HTTP Retrieve Specific Registered Users Get", () => {
	it("Retrive One User (GET)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.get(`/user/${id}`);

		expect(res).to.have.status(200);
		expect(res.body.message).to.equal("User Found !");

		console.log(res.body);
	});
});

// 5. Testing user update API
describe("4. HTTP Update Specific User PUT", () => {
	it("Update User (PUT)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.put(`/user/update/${id}`)
			.send({
				lastname: "Pallewatta",
			});

		console.log("\n Updated Lastname: ", res.body.lastname);

		expect(res).to.have.status(200);
		expect(res.body.message).to.equal("User Updated Successfully !");
	});
});

// 5. Testing user delete API
describe("4. HTTP Delete Specific User Delete", () => {
	it("Delete User (DELETE)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.delete(`/user/delete/${id}`);

		expect(res).to.have.status(200);
		expect(res.body.message).to.equal("User Deleted Successfully !");
	});
});
