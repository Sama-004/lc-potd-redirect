import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

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

  return (
    <div className="h-screen flex justify-center items-center text-white bg-black">
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
