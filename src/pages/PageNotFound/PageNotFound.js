import React from "react";
import ContainerLayout from "../../components/Layouts/ContainerLayout/ContainerLayout";
import PrimaryBtn from "../../components/UI/PrimaryBtn/PrimaryBtn";

function PageNotFound() {
  return (
    <ContainerLayout>
      <div className="text-center mt-5">
        <h3>PageNotFound 404</h3>
        <PrimaryBtn type="link" size="md" to="/" color="black">
          Go Back
        </PrimaryBtn>
      </div>
    </ContainerLayout>
  );
}

export default PageNotFound;
