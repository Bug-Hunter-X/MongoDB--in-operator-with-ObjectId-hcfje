```javascript
// Correct use of $in operator with an array of ObjectId
const { ObjectId } = require('mongodb');
db.collection.find({ _id: { $in: [new ObjectId("654321"), new ObjectId("123456")] } });
```