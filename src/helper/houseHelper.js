export default {
  GetCreateHouseTemplate() {
    const createHouseTemplate = {
      name: {
        value: "",
        isError: false,
      },
      postCode: {
        value: "",
        isError: false,
      },
      price: {
        value: 0,
        isError: false,
      },
      description: {
        value: "",
        isError: false,
      },
    };
    return createHouseTemplate;
  },
};
