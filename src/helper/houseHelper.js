export default {
  GetCreateHouseTemplate() {
    const createHouseTemplate = {
      id: 0,
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
