export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/BryxznTexture.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        textAlign: "center",
        paddingTop: "20vh",
        fontFamily: "sans-serif",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      {/* overlay to darken bg for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.9)",
          zIndex: 0,
        }}
      />

      {/* content */}
      <div style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          The Bryxzn Collection is under construction!
        </h1>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            The website is being developed, but poster files are up for sale!
            <br /><br />
            <strong>Price:</strong> $10 per premade file
            <br />
            <strong>Premade designs:</strong> PULSE, VOID, and FLOW (featured in my TikTok setup)
            <br />
            <strong>Custom designs:</strong> Starting at $30, so if you got a cool idea, let me know!
            <br /><br />
            <strong>How to order:</strong>
            <br />
            1. DM me on TikTok <strong>@bryxzn.tech</strong> or email me at{" "}
            <strong>btech1190@gmail.com</strong>.
            <br />
            2. Tell me which design you want (or your idea for a custom).
            <br />
            3. I’ll send you a payment option that works best for you (Venmo, CashApp, PayPal, etc.).
            <br />
            4. After payment is received, I’ll send the file to your email (or another method if easier).
            <br /><br />
            If you can’t find a good payment method, we’ll work it out. You are helping me by purchasing, so I want to make it fun and easy for you! Hope you enjoy my designs!
          </p>

          {/* simple centered TikTok button */}
          <div style={{ marginTop: "2rem" }}>
            <a
              href="https://www.tiktok.com/@bryxzn.tech?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#ff0050",
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "none",
                borderRadius: "8px",
              }}
            >
              My TikTok Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
