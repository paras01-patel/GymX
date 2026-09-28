import React, { useState } from "react";

const trainers = [
  {
    id: 1,
    name: "Vikram Sharma",
    specialization: "Bodybuilding & Strength Training",
    experience: "8+ Years Experience",
    rating: "4.9 ★",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&auto=format&fit=crop&q=60",
    price: "₹1,500 / Session",
    slots: ["07:00 AM", "09:00 AM", "05:00 PM", "07:00 PM"],
  },
  {
    id: 2,
    name: "Ananya Roy",
    specialization: "Yoga & Functional Fitness",
    experience: "6+ Years Experience",
    rating: "4.8 ★",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60",
    price: "₹1,200 / Session",
    slots: ["06:00 AM", "08:00 AM", "04:00 PM", "06:00 PM"],
  },
  {
    id: 3,
    name: "Rohan Verma",
    specialization: "Crossfit & Weight Loss",
    experience: "5+ Years Experience",
    rating: "4.7 ★",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
    price: "₹1,400 / Session",
    slots: ["08:00 AM", "10:00 AM", "06:00 PM", "08:00 PM"],
  },
];

function BookTrainer() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedSlot || !selectedDate) {
      alert("Kripya Date aur Time Slot select karein!");
      return;
    }
    setBookingSuccess(true);
  };

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto", color: "#fff" }}>
      <h1 style={{ textAlign: "center", color: "#ff4d4d", marginBottom: "10px" }}>
        Book a Personal Trainer / Class
      </h1>
      <p style={{ textAlign: "center", color: "#ccc", marginBottom: "40px" }}>
        Expert trainers ke saath apna personalized fitness session book karein.
      </p>

      {/* Trainer List */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            style={{
              backgroundColor: "#1e1e1e",
              borderRadius: "12px",
              padding: "20px",
              border: selectedTrainer?.id === trainer.id ? "2px solid #ff4d4d" : "1px solid #333",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justify: "space-between",
            }}
          >
            <div>
              <img
                src={trainer.image}
                alt={trainer.name}
                style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", marginBottom: "15px" }}
              />
              <h2 style={{ margin: "10px 0 5px", fontSize: "1.4rem" }}>{trainer.name}</h2>
              <p style={{ color: "#ff4d4d", fontWeight: "bold", marginBottom: "5px" }}>{trainer.specialization}</p>
              <p style={{ color: "#aaa", fontSize: "0.9rem" }}>{trainer.experience} • {trainer.rating}</p>
              <h3 style={{ margin: "15px 0", color: "#4caf50" }}>{trainer.price}</h3>
            </div>

            <button
              onClick={() => {
                setSelectedTrainer(trainer);
                setSelectedSlot("");
                setBookingSuccess(false);
              }}
              style={{
                backgroundColor: selectedTrainer?.id === trainer.id ? "#ff4d4d" : "#333",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              {selectedTrainer?.id === trainer.id ? "Selected" : "Select Trainer"}
            </button>
          </div>
        ))}
      </div>

      {/* Booking Form Modal/Section */}
      {selectedTrainer && (
        <div style={{ marginTop: "50px", backgroundColor: "#1e1e1e", padding: "30px", borderRadius: "12px", border: "1px solid #444" }}>
          <h2 style={{ color: "#ff4d4d", marginBottom: "20px", textAlign: "center" }}>
            Book Session with {selectedTrainer.name}
          </h2>

          {bookingSuccess ? (
            <div style={{ textAlign: "center", color: "#4caf50", padding: "20px" }}>
              <h3>🎉 Session Booked Successfully!</h3>
              <p>Date: <strong>{selectedDate}</strong> | Time: <strong>{selectedSlot}</strong></p>
              <p style={{ color: "#ccc", fontSize: "0.9rem" }}>Confirmation email aapko bhej diya gaya hai.</p>
            </div>
          ) : (
            <form onSubmit={handleBooking} style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "500px", margin: "0 auto" }}>
              <div>
                <label style={{ display: "block", marginBottom: "8px" }}>Select Date:</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #444", backgroundColor: "#2b2b2b", color: "#fff" }}
                  required
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px" }}>Select Time Slot:</label>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {selectedTrainer.slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      style={{
                        backgroundColor: selectedSlot === slot ? "#ff4d4d" : "#2b2b2b",
                        color: "#fff",
                        border: "1px solid #444",
                        padding: "8px 15px",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "#fff",
                  border: "none",
                  padding: "12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
                Confirm Slot Booking
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default BookTrainer;