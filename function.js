let but = document.querySelector("#btn");
let inp = document.querySelector("#AddNum");

let contTable = document.querySelector(".content-table");

function tableTd(cont) {
  let _ = document.createElement("th");
  _.innerText = cont;
  return _;
}

but.onclick = () => {
  let id = inp.value;

  // model data from google sheet
  let data = {
    Details: {
      Adno: "123",
      name: "Dulkifal",
      class: "10",
      exam: "Half Yearly",
    },
    Marks: [
      { sub: "Maths", P1: 20, P1T: 50 },
      { sub: "Science", P1: 30, P1T: 50 },
      { sub: "English", P1: 40, P1T: 50 },
      { sub: "Social", P1: 50, P1T: 50 },
    ],
  };

  let e = data;
  // fetch(
  //   `https://script.google.com/macros/s/AKfycbwLDMEf3dnqOn-r4wwfL99Z1di6QB3G0GNMs9fa7QAKAT6WNltEXjypmQ-y0S006VKN/exec?id=${id}`
  // )
  //   .then((e) => e.json())
  //   .then((e) => {
      // console.log(e);
      document.getElementById("studentNum").innerHTML =
        "Add.NO : " + e.Details.Adno;
      document.getElementById("studentName").innerHTML =
        "Name : " + e.Details.name;
      document.getElementById("studentClass").innerHTML =
        "Class : " + e.Details.class;
      document.getElementById("exam").innerHTML =
        "Name of Exam : " + e.Details.exam;

      let Marks = e.Marks;
      let bTable = `<thead>
      <tr>
        <th id="a">No</th>
        <th id="1">SUBJECT</th>
        <th id="2">PHASE I</th>
        <th id="3">TOTAL</th>
      </tr>
    </thead>`;
      contTable.innerHTML = bTable;
      Marks.forEach((eachSub, i) => {
        let _tr = document.createElement("tr");
        _tr.append(tableTd(i + 1));
        _tr.append(tableTd(eachSub.sub));
        _tr.append(tableTd(eachSub["P1"]));
        _tr.append(tableTd(eachSub["P1T"]));
        contTable.append(_tr);
      });

    // });
};
