import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga";

const trackingId = "G-3VMPYPNRWG";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

export const App = () => {
  const [problemLink, setProblemLink] = useState(null);

  const fetchProblemLink = () => {
    axios
      .get(`${BACKEND_URL}`)
      .then((response) => {
        const link =
          response.data.data.data.activeDailyCodingChallengeQuestion.link;
        setProblemLink(link);
        window.location.href = `https://leetcode.com${link}`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(fetchProblemLink, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center text-white bg-black">
      <Analytics />
      <div>
        {problemLink === null ? (
          <p>Please wait to be redirected...</p>
        ) : (
          <a href="https://github.com/sama-004">github.com/sama-004</a>
        )}
      </div>
    </div>
  );
};
