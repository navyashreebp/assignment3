const supertest = require("supertest");

const app = require("../index");



describe("creating user", () => {
    it("when user doesn't exists", async () => {
        const { status, body } = await supertest(app)
        .post("/user/add")
        .send({ name: "navya", email: "navya@gmail.com", mobileNo: "123456789" });
        // console.log(body,'testttttttt');
        expect(status).toBe(200);
        // expect(body).toEqual({ message: "created successfully." });
    });

    it("when user already exists", async () => {
        const { status, body } = await supertest(app)
        .post("/user/add")
        .send({ name: "navya", email: "navya@gmail.com", mobileNo: "123456789" });

        expect(status).toBe(409);
        // expect(body).toEqual({ message: "Already exists." });
    });

    it("when request body is empty.", async () => {
        const { status, body } = await supertest(app)
        .post("/user/add")
        .send({});
        
        expect(status).toBe(410);
        // expect(body).toEqual({ message: "Invalid request. please check the userId." });
    });

});

describe("updating user", () => {
    it("when user exists", async () => {
        const { status, body } = await supertest(app)
        .post("/user/6458bc475f478b829ee780d3/update")
        .send({ name: "navya", email: "navya@gmail.com", mobileNo: "123456789" });

        expect(status).toBe(200);
        // expect(body).toEqual({ message: "User updated successfully." });
    });

});

describe("get users", () => {
    it("get all the users list", async () => {
        const { status, body } = await supertest(app)
        .get("/");
    
        expect(status).toBe(200);
        // expect(Array.isArray(body.users)).toBe(true);
    
        // body.users.forEach(user => {
        //     expect((validateUserData(user)));
        // });
    });
});

describe("deleting user", () => {
    it("when user exists", async () => {
        const { status, body } = await supertest(app)
        .delete("/user/6458bc475f478b829ee780d3/delete")
        expect(status).toBe(200);
        // expect(body).toEqual({ message: "User updated successfully." });
    });

});

