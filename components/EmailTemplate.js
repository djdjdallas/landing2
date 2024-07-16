// components/EmailTemplate.js
import React from "react";

const EmailTemplate = ({ firstName, message }) => (
  <div style={styles.container}>
    <header style={styles.header}>
      <h1 style={styles.headerTitle}>Welcome to Mail Blitz!</h1>
    </header>
    <main style={styles.main}>
      <p style={styles.message}>Hi {firstName},</p>
      <p style={styles.message}>
        Thank you for choosing Mail Blitz, your go-to Email CRM for your SaaS
        business. We're thrilled to have you on board and can't wait to help you
        with your cold emailing needs using our pre-written templates and
        customizable features.
      </p>
      {/* <p style={styles.message}>
        Get started by exploring our platform and discovering how we can make
        your email marketing campaigns more effective and efficient.
      </p> */}
      <p style={styles.message}>
        If you have any questions or need assistance, feel free to reach out to
        our support team. We're here to help!
      </p>
      <p style={styles.message}>Best regards,</p>
      <p style={styles.message}>The Mail Blitz Team</p>
    </main>
    <footer style={styles.footer}>
      <p style={styles.footerText}>
        &copy; 2024 Mail Blitz. All rights reserved.
      </p>
      <p style={styles.footerText}>
        If you no longer wish to receive emails from us, you can{" "}
        <a href="#" style={styles.unsubscribeLink}>
          unsubscribe here
        </a>
        .
      </p>
    </footer>
  </div>
);

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    border: "1px solid #dddddd",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px", // Added padding to the container
  },
  header: {
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "20px",
    textAlign: "center",
  },
  headerTitle: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
  },
  main: {
    padding: "20px",
    textAlign: "left",
  },
  message: {
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "20px",
    color: "#333333",
  },
  buttonContainer: {
    textAlign: "center", // Center the button container
  },
  button: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#000000",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#f1f5f9",
    color: "#666666",
    padding: "10px",
    textAlign: "center",
    borderTop: "1px solid #dddddd",
  },
  footerText: {
    margin: 0,
    fontSize: "12px",
  },
  unsubscribeLink: {
    color: "#000000",
  },
};

export { EmailTemplate };
