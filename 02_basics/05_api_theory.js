
// ============================================================
//                    API IN JAVASCRIPT
// ============================================================

// API kya hoti hai?
// API (Application Programming Interface) ek way hai jiske through
// frontend aur backend/server aapas mein communicate karte hain.
//
// Simple flow:
//
// JavaScript (Frontend)
//        ↓
//       API
//        ↓
//     Server
//        ↓
//    Database
//
// Server se data lene ke liye JavaScript mein commonly fetch()
// ka use kiya jata hai.


// ============================================================
//                     FETCH()
// ============================================================

// fetch() API ko request bhejne ke liye use hota hai.
//
// Example:
//
// fetch("API_URL")
//
// fetch() ek Promise return karta hai, isliye hum
// .then() ya async/await ka use kar sakte hain.


// ============================================================
//                  API SE DATA LENA
//                       (GET)
// ============================================================

// GET ka use server se data lene ke liye hota hai.

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {

    // Server se response mila.
    // response.json() response ko JavaScript data/object mein
    // convert karta hai.

    return response.json();
  })
  .then(data => {

    // Ab data ke andar API se mila hua actual data hai.

    console.log(data);
  });


// ============================================================
//                  ASYNC / AWAIT
// ============================================================

// API calls ke liye async/await syntax bhi commonly use hota hai.
// Ye code ko read karna easy bana deta hai.

async function getUser() {

  // API ko request bhej rahe hain.
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  // Response ko JSON mein convert kar rahe hain.
  const data = await response.json();

  // API se mila data dekh sakte hain.
  console.log(data);
}

getUser();


// ============================================================
//                    DESTRUCTURING
// ============================================================

// Agar API se object mila:
//
// {
//   name: "Leanne Graham",
//   email: "example@gmail.com",
//   username: "Bret"
// }
//
// To hum destructuring karke directly properties nikal sakte hain.

async function getUserData() {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const data = await response.json();

  // Object destructuring
  const { name, email, username } = data;

  console.log(name);
  console.log(email);
  console.log(username);
}

getUserData();


// ============================================================
//              API REQUEST KE COMMON METHODS
// ============================================================

// GET
// → Server se data lene ke liye.
//
// POST
// → Server par naya data create/send karne ke liye.
//
// PUT
// → Existing data ko completely update karne ke liye.
//
// PATCH
// → Existing data ke kisi part ko update karne ke liye.
//
// DELETE
// → Data delete karne ke liye.


// ============================================================
//                     POST REQUEST
// ============================================================

// POST ke through hum server ko data bhej sakte hain.

async function createUser() {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "POST",

      // Server ko batate hain ki hum JSON data bhej rahe hain.
      headers: {
        "Content-Type": "application/json"
      },

      // JavaScript object ko JSON string mein convert karte hain.
      body: JSON.stringify({
        name: "Rahul",
        age: 20,
        city: "Bhopal"
      })
    }
  );

  // Server ka response JSON mein convert karte hain.
  const data = await response.json();

  console.log(data);
}

createUser();


// ============================================================
//                  TRY / CATCH
// ============================================================

// API call fail ho sakti hai.
// Error handle karne ke liye try/catch use kar sakte hain.

async function fetchUser() {

  try {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    const data = await response.json();

    console.log(data);

  } catch (error) {

    // Agar request mein error aaye
    // to yahan handle hoga.

    console.log("Error:", error);
  }
}

fetchUser();


// ============================================================
//                    SHORT SUMMARY
// ============================================================

// API
// → Frontend aur backend/server ke beech communication ka way.
//
// fetch()
// → API ko request bhejne ke liye.
//
// response.json()
// → API ke response ko JavaScript data mein convert karta hai.
//
// GET
// → Data lena.
//
// POST
// → Naya data bhejna/create karna.
//
// PUT / PATCH
// → Data update karna.
//
// DELETE
// → Data delete karna.
//
// async/await
// → API calls ko handle karne ka clean way.
//
// try/catch
// → Errors handle karne ke liye.
//
// Destructuring
// → API se mile object ke required data ko easily variables mein
//   nikalne ke liye.

