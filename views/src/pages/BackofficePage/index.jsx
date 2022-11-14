import React from "react";
import BackOfficeContainer from "../../Components/BackOffice/BackOfficeContainer";
import FooterContainer from "../../Components/Footer/FooterContainer";
import HeaderContainer from "../../Components/Header/HeaderContainer";

const BackOffice = () => {
  return (
    <>
      {/* <HeaderContainer /> */}
      <main className="flex flex-col px-6 lg:px-16 py-8 gap-6">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <BackOfficeContainer />
      </main>
      <FooterContainer />
    </>
  );
};

export default BackOffice;
