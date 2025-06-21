import React, { Suspense, } from "react";
import UseAuth from "../../Components/UseAuth";
import MyapplicationList from "./MyapplicationList";
import { myapplicationPromise } from "../../Promise/Myapplicationpromise";

const Myapplication = () => {
  const { user, loading } = UseAuth();
  
  return (
    <div>
      <Suspense fallback={loading}>
        <MyapplicationList
        
          myapplicationPromise={myapplicationPromise(user.email)}
        ></MyapplicationList>
      </Suspense>
    </div>
  );
};

export default Myapplication;
