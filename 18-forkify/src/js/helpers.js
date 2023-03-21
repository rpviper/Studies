import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// This the same code combined as the bottom 2:
export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // To make sure the API accepts json
          },
          body: JSON.stringify(uploadData), // Stringifying the data that's actually uploaded
        })
      : fetch(url);

    const response = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    // Racing to see which ones get first, the fetch or timeout 10s (for bad internet)
    const data = await response.json(); // json method is awailable on all response objects

    if (!response.ok) throw new Error(`${data.message}`); // This all comes from console again
    return data;
  } catch (err) {
    throw err; // We have to rethrow the error so it comes from model.js not helpers.js
  }
};

/*
export const getJSON = async function (url) {
  try {
    // const fetchPro = fetch(url)
    const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    // Racing to see which ones get first, the fetch or timeout 10s (for bad internet)
    const data = await response.json(); // json method is awailable on all response objects
    if (!response.ok) throw new Error(`${data.message}`); // This all comes from console again
    return data;
  } catch (err) {
    throw err; // We have to rethrow the error so it comes from model.js not helpers.js
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // To make sure the API accepts json
      },
      body: JSON.stringify(uploadData), // Stringifying the data that's actually uploaded
    });

    const response = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message}`);
    return data;
  } catch (err) {
    throw err;
  }
}; */
