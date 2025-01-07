# MongoDB $in operator with ObjectId
This example demonstrates an incorrect use of the `$in` operator in MongoDB queries when dealing with ObjectIds.  The `$in` operator expects an array of ObjectIds, not strings. Attempting to use it with strings results in no matches.

## Bug
The `bug.js` file contains a query that uses the `$in` operator with an array of strings representing ObjectIds. This will not produce the expected result.  The query will return an empty array.

## Solution
The `bugSolution.js` file shows the correct way to use the `$in` operator with ObjectIds.  The ObjectIds are properly cast as ObjectId type before use in the query.