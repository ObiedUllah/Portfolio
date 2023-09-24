const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

// server used to send send emails

const PORT = process.env.PORT || 5000;
const app = express();

const allowedOrigins = ["https://obiedullah.netlify.app", "https://obied-ullah-portfolio.onrender.com", "https://another-allowed-origin.com"];
const corsOptions = {
	origin: allowedOrigins,
	methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

//build
// app.use(express.static(path.join(__dirname, "build")));
// app.get("/*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// Node spins up our server and sets it to listen on set port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const contactEmail = nodemailer.createTransport({
	service: "hotmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

contactEmail.verify((error) => {
	if (error) {
		console.log(error);
	} else {
		console.log("Ready to Send");
	}
});

router.get("/", (req, res) => {
	res.json({ code: 200, status: "HERE" });
});

router.post("/contact", (req, res) => {
	const name = req.body.firstName + req.body.lastName;
	const email = req.body.email;
	const message = req.body.message;
	const phone = req.body.phone;
	const mail = {
		from: name,
		to: process.env.EMAIL_USER,
		subject: "Contact Form Submission - Portfolio",
		html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
	};
	contactEmail.sendMail(mail, (error) => {
		if (error) {
			res.json(error);
		} else {
			res.json({ code: 200, status: "Message Sent" });
		}
	});
});
