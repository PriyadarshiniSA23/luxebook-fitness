const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("LuxeBook Backend Running");
});

app.post("/api/bookings", (req, res) => {
  const {
    trainer_name,
    booking_date,
    booking_time,
    member_name,
    member_email,
  } = req.body;

  const sql = `
    INSERT INTO bookings
    (trainer_name, booking_date, booking_time, member_name, member_email)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      trainer_name,
      booking_date,
      booking_time,
      member_name,
      member_email,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Booking failed",
        });
      }

      res.json({
        success: true,
        bookingId: result.insertId,
      });
    }
  );
});

app.get("/api/bookings", (req, res) => {
  db.query("SELECT * FROM bookings", (err, results) => {
    if (err) return res.status(500).send(err);

    res.json(results);
  });
});

app.get("/api/dashboard-stats", (req, res) => {
  const query = `
    SELECT
      COUNT(*) AS totalBookings,
      COUNT(DISTINCT member_email) AS uniqueMembers,
      COUNT(*) * 150 AS revenue
    FROM bookings
  `;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(results[0]);
  });
});

app.delete("/api/bookings/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM bookings WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Booking deleted successfully",
      });
    }
  );
});

app.put("/api/bookings/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  db.query(
    "UPDATE bookings SET status = ? WHERE id = ?",
    [status, id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Status updated",
      });
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
}); 