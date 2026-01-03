import Navbar from "../Navbar/Navbar";
import BGImage from "../../assets/images/dashboard-travel-background.webp";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <section
        style={{ backgroundImage: `url(${BGImage})` }}
        className="flex flex-col min-h-screen bg-center bg-cover"
      >
        <div className="flex flex-col items-center justify-center max-w-1080">
          {children}
        </div>
      </section>
    </>
  );
};

export default PageLayout;
