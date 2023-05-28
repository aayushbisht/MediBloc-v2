const MediBloc = artifacts.require("MediBloc");

require("chai").use(require("chai-as-promised")).should();

contract(
  "MediBloc",
  ([
    deployer,
    patientOne,
    patientTwo,
    doctorOne,
    doctorTwo,
    insurerOne,
    insurerTwo,
  ]) => {
    let mediBloc;

    before(async () => {
      mediBloc = await MediBloc.deployed();
    });

    describe("deployment", async () => {
      it("deploys successfully", async () => {
        const address = await mediBloc.address;
        assert.notEqual(address, 0x0);
        assert.notEqual(address, "");
        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
      });

      it("has a name", async () => {
        const name = await mediBloc.name();
        assert.equal(name, "mediBloc");
      });
    });

    describe("patients", async () => {
      let result;
      const name = "Sam";
      const age = 22;
      const hash = "QmV8cfu6n4NT5xRr2AHdKxFMTZEJrA44qgrBCr739BN9Wb";

      before(async () => {
        result = await mediBloc.add_agent(name, age, 0, hash);
      });

      it("adds patients", async () => {});
    });
  }
);
