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
  ConvertToPostCodeList(payload) {
    let postCodeList = [];
    payload.forEach((item) => {
      postCodeList.push(item.post_code);
    });
    return postCodeList;
  },
  SetTablePage(pageNumber, pageSize, detailList) {
    const start = pageNumber == 1 ? 0 : (pageNumber - 1) * pageSize;
    const end = pageSize * pageNumber;
    return detailList.slice(start, end);
  },
};
