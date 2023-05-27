var chai = require("chai");
let { expect, assert } = require("chai");

var jp = require("jsonpath");

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

let id;

// 1. Testing career create API
describe("2. HTTP Post create Post", () => {
	it("Career Create (POST)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.post("/post/create")
			.send({
				location: "Polonnaruwa",
				description: "Ancient Place",
				img: "polonnaruwa.jpeg",
			});

		id = res.body.user._id;

		if (res.status == 200) {
			expect(res.body.message).to.equal("Post Add Succefully !");
		} else {
			expect(res.body.message).to.equal("Post Already Exists !");
		}
	});
});

// 2. Testing get all posts API
describe("2. HTTP Retrieve Posts Get", () => {
	it("Retrieve Posts (GET)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.get("/post/getAll");

		expect(res).to.have.status(200);
		expect(res.body.message).to.equal("Fetching Posts successfull !");

		console.log(res.body);
	});
});

// 3. Testing getOne post API
describe("3. HTTP Retrieve getOne Post Get", () => {
	it("Retrive One Post (GET)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.get(`/post/get/${id}`);

		expect(res).to.have.status(200);
		expect(res.body.message).to.equal("Post Found !");

		console.log(res.body);
	});
});

// 4. Testing Post update API
describe("4. HTTP Update Specific Post PUT", () => {
	it("Update User (PUT)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.put(`/post/update/${id}`)
			.send({
				location: "Anuradhapura",
			});

		console.log("\n Updated Location: ", res.body.location);

		expect(res).to.have.status(200);
		expect(res.body.message).to.equal("Post Updated Successfully !");
	});
});

// 5. Testing Post delete API
describe("4. HTTP Delete Specific Post Delete", () => {
	it("Delete Post (DELETE)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.delete(`/post/delete/${id}`);

		expect(res).to.have.status(200);
		expect(res.body.message).to.equal("Post Deleted Successfully !");
	});
});
