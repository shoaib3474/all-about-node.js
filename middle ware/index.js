const express = require('express');
const app = express();

const PORT = 8000;


// 🌐 Global Middleware #1

app.use((req, res, next) => {
    console.log('🛡️  1st Middleware: Request received at', new Date().toISOString())
    //modify the request if needed
    req.myName = 'XYZ'
    next(); //Proceed to next middleware
})

// 🌐 Global Middleware #2
app.use((req, res, next) => {
    console.log('✅  2nd Middleware: Still processing...')
    //now you access the updated the request any whare
    console.log(req.myName)
    // You can terminate here if needed, else go next
    next()

})

// 🚀 Sample Route

app.get('/', (req, res) => {
    res.json({ message: `🎉 Route reached successfully after middlewares! ${req.myName}` });
})

// 🛑 404 Middleware (if no route matches)
app.use((req, res) => {
    res.status(404).json({ error: '❌ Route not found' });
});




// 🖥️ Server Listen
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});








// app.use((req, res, next) => {
//     console.log('🛡️  1st Middleware: Request received at', new Date().toISOString());
//     // Modify request if needed: e.g., req.user = { id: 123 }
//     next(); // Proceed to next middleware
// });

// app.use((req, res, next) => {
//     console.log('✅  2nd Middleware: Still processing...');
//     // You can terminate here if needed, else go next
//     next();
// });

// // 🚀 Sample Route
// app.get('/', (req, res) => {
//     res.json({ message: '🎉 Route reached successfully after middlewares!' });
// });

// // 🛑 404 Middleware (if no route matches)
// app.use((req, res) => {
//     res.status(404).json({ error: '❌ Route not found' });
// });
