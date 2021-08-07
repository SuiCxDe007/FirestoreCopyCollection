const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const db = admin.firestore();

async function copyCollection() {
    const products = await db.collection("COLLECTION_NAME").get();
    products.forEach(async (doc)=> {
        await db.collection("NEW_COLLECTION_NAME").doc().set(doc.data());
    })
}

copyCollection()
