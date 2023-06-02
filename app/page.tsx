import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";

import posthog from "posthog-js";
const serverConfig = getServerSideConfig();

posthog.init("phc_8IuCMRtESvgycZHxpHhhofpWmW0VeLJd0COxHLDvLPX", {
  api_host: "https://app.posthog.com",
});

export default async function App() {
  posthog.capture("ChatGPT init ");
  return (
    <>
      <Home />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
