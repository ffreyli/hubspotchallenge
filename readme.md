Overview

It’s your first day at HubSpot, and you’re in charge of writing the logic to send invitations to a special two-day event in each country for HubSpot’s partners in those countries.

We need to find the dates that’ll work best based on survey results that partners have sent in and determine how many people can attend.

You’re provided with an API that gives you a list of HubSpot's partners, their countries, and which dates they’re available in ISO 8601 format. You need to tell them when we should host the event and who should attend by making a POST request to an API.

The date you send in for the country should be the starting date of the two day period where the most partners can make it for both days in a row.

In case of multiple dates with the same number of partners, pick the earlier date. If there are no two days in a row when any partners can make it, return null.

Use `fetch` or a library like `axios` to make a request to the endpoint: `https://candidate.hubteam.com/candidateTest/v3/problem/dataset` in order to retrieve your data. Your API key is `1694f8ea17181cea2872454b04df`, which the API will be expecting through the key `userKey`.  

Once you have the data, you will need to determine what to submit to the API based on the prompt above. 

Once you have your answer, we can test it by making a POST request to `https://candidate.hubteam.com/candidateTest/v3/problem/result`.

To post your response, you'll need to format your data in the following manner:

// The values are just examples, the keys in the object are what matters.

{
"attendeeCount": 50,
"attendees": ['example@gmail.com'],
"name": 'USA',
"startDate": '10/12/2023'
}

For interacting with dates, you can use the package `moment` or `luxon` to make calculations simpler. 

Note: Jeffrey, let's walk through your solution before we actually make a POST request here.
