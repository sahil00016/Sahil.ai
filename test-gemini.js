const API_KEY = "AIzaSyCegn0dw7i4NwawIvnOsIEBmTMb_NhyiS8";

async function testGemini() {
    console.log("Testing Gemini API...");

    // Test 1: Gemini 1.5 Flash
    try {
        console.log("Attempting gemini-1.5-flash...");
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: "Hello" }] }] })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("SUCCESS: gemini-1.5-flash working!");
            console.log("Response:", data.candidates[0].content.parts[0].text);
            return;
        } else {
            console.log(`FAILED: gemini-1.5-flash Status: ${response.status} ${response.statusText}`);
            const errText = await response.text();
            console.log("Error details:", errText);
        }
    } catch (e) {
        console.log("Error testing gemini-1.5-flash:", e.message);
    }

    // Test 2: Gemini Pro (Fallback)
    try {
        console.log("\nAttempting gemini-pro...");
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: "Hello" }] }] })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("SUCCESS: gemini-pro working!");
            console.log("Response:", data.candidates[0].content.parts[0].text);
        } else {
            console.log(`FAILED: gemini-pro Status: ${response.status} ${response.statusText}`);
            const errText = await response.text();
            console.log("Error details:", errText);
        }
    } catch (e) {
        console.log("Error testing gemini-pro:", e.message);
    }
}

testGemini();
