// This file is responsible for handling the request to fetch categories from the Twistoe API.

import { json } from "@remix-run/node";
import axios from "axios";

export async function action({ request }) {
  const json = await request.json();

  try {
    const response = await axios.get(
      `https://dev.twistoe.in/api/merchants/v1/discount/`,
      {
        headers: {
          Authorization: `Token `,
        },
      },
    );
    const data = response.data;

    return { data };
  } catch (error) {
    console.error("Error access categories:", error);
    return { error: "Failed to retrieve categories", status: 500 };
  }
}
