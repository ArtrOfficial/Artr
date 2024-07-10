import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";
import Error404 from "./pages/ErrorPage/page";

export default function Home() {
  return (
    // <div style={{ backgroundImage: "url('/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
    //   <SignIn />
    //   <Footer />
    // </div>
    <Error404 />
  );
}
