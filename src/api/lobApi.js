import axios from "axios";

const lobBaseUrl = "https://api.lob.com/v1/";

const SEARCH_TYPES = {
  ADDRESSES: "addresses",
  POST_CARDS: "postcards",
  LETTERS: "letters",
  CHECKS: "checks",
  BANK_ACCOUNTS: "bank_accounts",
  AREAS: "areas",
};

export default class lobApi {
  constructor(
    username = "test_8ddaad35dc02260ae8a4e6e33d9f3ade7ae",
    password = ""
  ) {
    this.instance = axios.create({
      baseURL: lobBaseUrl,
      auth: {
        username,
        password,
      },
    });
  }

  // --------- SEARCH ENDPOINTS ------------ //
  async search(q, types, offset, limit) {
    return this.instance.get("/search", {
      params: {
        q,
        types,
        offset,
        limit,
      },
    });
  }

  async searchAddresses(q, offset = 0, limit = 20) {
    return this.search(q, SEARCH_TYPES.ADDRESSES, offset, limit);
  }

  // --------- POST CARD ENDPOINTS --------- //
  async createPostCard(form) {
    const { description, to, from, front, back } = form;
    return this.instance.post("/postcards", {
      description,
      to: to && to.id ? to.id : to,
      from: to && from.id ? from.id : from,
      front,
      back,
    });
  }
}
