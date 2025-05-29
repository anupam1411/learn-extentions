import { json } from "@remix-run/node";
import {
  BlockStack,
  reactExtension,
  TextBlock,
  Banner,
  useApi,
} from "@shopify/ui-extensions-react/customer-account";
import axios from "axios";
import { useEffect } from "react";

export default reactExtension(
  "customer-account.order-status.block.render",
  () => <PromotionBanner />,
);

function PromotionBanner() {
  const { i18n } = useApi();
  const token = "cd38c91076b9645b9434bddbda06ce397ecb5b12";
  useEffect(() => {
    getOffers;
  }, []);

  async function getOffers(params) {
    try {
      const offers = await axios
        .get("https://dev.twistoe.in/api/merchants/v1/discount", {
          headers: { Authorization: `Token ${token}` },
        })
        .then((res) => res.data);

      return json({ offers });
    } catch (error) {
      console.error("Error fetching offers:", error.message);
      return json({ error: "Failed to fetch offers" }, { status: 500 });
    }
  }
  return (
    <Banner>
      <BlockStack inlineAlignment="center">
        {/* <TextBlock>{i18n.translate("earnPoints")}</TextBlock> */}
        Hello world!
      </BlockStack>
    </Banner>
  );
}
