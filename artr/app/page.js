import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundImage: "url('/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <SignIn />
      <Footer />
    </div>
  );
}
