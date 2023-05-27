var chai = require("chai");
let { expect, assert } = require("chai");

var jp = require("jsonpath");

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

let id;

// 1. Testing career create API
describe("2. HTTP career create Post", () => {
	it("Career Create (POST)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.post("/career/create")
			.send({
				titel: "Guide",
				description: "Travel agent",
				educationalReq: "A/L Passed and B pass in English",
				experience: "Minimum 1 Year +",
			});

		id = res.body.user._id;

		if (res.status == 200) {
			expect(res.body.message).to.equal("Career Add Succefully !");
		} else {
			expect(res.body.message).to.equal("Career Already Exists !");
		}
	});
});

// 2. Testing get all careers API
describe("2. HTTP Retrieve Career Get", () => {
	it("Retrieve Careers (GET)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.get("/career/getAll");

		expect(res).to.have.status(200);
		expect(res.body.message).to.equal(
			"Fetching Careers successfull !",
		);

		console.log(res.body);
	});
});

// 3. Testing Remove delete API
describe("3. HTTP Delete career Delete", () => {
	it("Delete Career (DELETE)", async () => {
		let res = await chai
			.request("http://localhost:5000/api")
			.delete(`/career/delete/${id}`);

		expect(res).to.have.status(200);
		expect(res.body.message).to.equal("Career Deleted Successfully !");
	});
});
