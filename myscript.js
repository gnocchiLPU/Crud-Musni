var UniqueIDV, FirstNameV, MiddleNameV, SurNameV, AddressV, EmailV;

function readFom() {
  UniqueIDV = document.getElementById("UniqueID").value;
  FirstNameV = document.getElementById("FirstName").value;
  MiddleNameV = document.getElementById("MiddleName").value;
  SurNameV = document.getElementById("SurName").value;
  AddressV = document.getElementById("Address").value;
  EmailV = document.getElementById("Email").value;
  console.log(UniqueIDV, FirstNameV, MiddleNameV, SurNameV, AddressV, EmailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .set({
      UniqueID: UniqueIDV,
      FirstName: FirstNameV,
      MiddleName: MiddleNameV,
      SurName: SurNameV,
      Address: AddressV,
      Email: EmailV,
    });
  Swal.fire("Data Inserted!");
  document.getElementById("UniqueID").value = "";
  document.getElementById("FirstName").value = "";
  document.getElementById("MiddleName").value = "";
  document.getElementById("SurName").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .on("value", function (snap) {
      document.getElementById("UniqueID").value = snap.val().UniqueID;
      document.getElementById("FirstName").value = snap.val().FirstName;
      document.getElementById("MiddleName").value = snap.val().MiddleName;
      document.getElementById("SurName").value = snap.val().SurName;
      document.getElementById("Address").value = snap.val().Address;
      document.getElementById("Email").value = snap.val().Email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .update({
      //   UniqueID: UniqueIDV,
      UniqueID: UniqueIDV,
      FirstName: FirstNameV,
      MiddleName: MiddleNameV,
      SurName: SurNameV,
      Address: AddressV,
      Email: EmailV,
    });
  Swal.fire("Data Updated!");
  document.getElementById("UniqueID").value = "";
  document.getElementById("FirstName").value = "";
  document.getElementById("MiddleName").value = "";
  document.getElementById("SurName").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .remove();
  Swal.fire("Data Deleted!");
  ddocument.getElementById("UniqueID").value = "";
  document.getElementById("FirstName").value = "";
  document.getElementById("MiddleName").value = "";
  document.getElementById("SurName").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};
