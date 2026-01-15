export default function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.center}>
        <h1 style={styles.code}>404</h1>
      </div>

      <a href="/" style={styles.link}>
        Take me back to <span style={styles.underline}>papertrade.com</span>
      </a>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#2f74dc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter, system-ui, sans-serif",
    position: "relative",
  },

  center: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  code: {
    fontSize: "160px",
    fontWeight: 300,
    color: "#ffffff",
    margin: 0,
    letterSpacing: "4px",
  },

  link: {
    position: "absolute",
    bottom: 24,
    fontSize: "14px",
    color: "rgba(255,255,255,0.7)",
    textDecoration: "none",
  },

  underline: {
    textDecoration: "underline",
    color: "#ffffff",
  },
};
